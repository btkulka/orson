require('dotenv').config();
const { OpenAI } = require('openai');

// Initialize the OpenAI client with the API key
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Prompts
const orsonSystemPrompt = require('../prompts/orsonSystemPrompt');

/**
 * This structure will store chat contexts keyed by some chat/session ID
 * (e.g. userId, channelId, or a unique scenario ID).
 * Each context is an array of messages, where each message is an object:
 * { role: 'system'|'user'|'assistant', content: '...' }
 */
const chatContexts = {};

/**
 * Configuration for ChatGPT model
 * Default model is taken from the environment variable or set to 'gpt-3.5-turbo'.
 */
let configuredModel = process.env.CHATGPT_MODEL || 'gpt-3.5-turbo';

/**
 * Sets the model configuration globally for the application.
 * @param {string} model - The model name (e.g., 'gpt-3.5-turbo', 'gpt-4').
 */
function setChatGPTModel(model) {
  configuredModel = model;
}

/**
 * Starts a new chat session by clearing any prior context
 * and setting an initial 'system' message. The system message can
 * include relevant lore, instructions, or style guidelines.
 * @param {string} sessionId - Unique identifier for a chat session
 * @param {string} initialLore - A chunk of lore or system instructions
 */
function startNewChat(sessionId, initialLore) {
    chatContexts[sessionId] = [
        {
          role: 'system',
          content: orsonSystemPrompt
        }
    ];
}

/**
 * Adds a user message to an existing chat context.
 * @param {string} sessionId
 * @param {string} userContent
 */
function addUserMessage(sessionId, userContent) {
  if (!chatContexts[sessionId]) {
    // If the session doesn't exist yet, create a minimal one
    startNewChat(sessionId, 'No lore provided yet.');
  }

  chatContexts[sessionId].push({
    role: 'user',
    content: userContent
  });
}

/**
 * Sends the current conversation context to the LLM
 * and returns the assistant's reply. The conversation is then
 * updated with the assistant's response.
 * @param {string} sessionId
 * @param {object} [options] - Optional config: model, temperature, etc.
 * @param {object} [discordChannel] - Discord channel to send error messages
 * @returns {Promise<string>} The assistant's text reply
 */
async function getChatCompletion(sessionId, options = {}, discordChannel = null) {
  const model = options.model || configuredModel;
  const temperature = options.temperature ?? 0.7;
  const maxTokens = options.maxTokens ?? 150;

  if (!chatContexts[sessionId]) {
    startNewChat(sessionId, 'No lore provided yet.');
  }

  const messages = chatContexts[sessionId];

  try {
    const response = await openai.chat.completions.create({
      model,
      messages,
      temperature,
      max_tokens: maxTokens
    });

    const assistantMessage = response.choices[0]?.message?.content.trim() || '';

    chatContexts[sessionId].push({
      role: 'assistant',
      content: assistantMessage
    });

    return assistantMessage;
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    console.error('Session ID:', sessionId);
    console.error('Messages:', JSON.stringify(messages, null, 2));
    if (discordChannel) {
      discordChannel.send(`**Error:** Failed to process your request. Details: ${error.message}`);
    }
    return 'An error occurred while processing your request. Please try again later.';
  }
}

/**
 * Adds a chunk of lore to the conversation as a 'system' message,
 * guiding the assistant with new context or backstory.
 * In effect, you can use this to "train" or prime the model on
 * additional relevant lore. Future user queries in the same session
 * will be influenced by this system-level content.
 * @param {string} sessionId
 * @param {string} loreContent - New lore or instructions for the system message
 */
function injectLore(sessionId, loreContent) {
  if (!chatContexts[sessionId]) {
    startNewChat(sessionId, loreContent);
  } else {
    chatContexts[sessionId].push({
      role: 'system',
      content: loreContent
    });
  }
}

module.exports = {
  setChatGPTModel,
  startNewChat,
  addUserMessage,
  getChatCompletion,
  injectLore
};
