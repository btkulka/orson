const { BOT_PREFIX, NARRATOR_NAME } = require('../config');

async function handleMessageCreate(message, { timeManager, locationManager, loreManager }) {
  if (message.author.bot) return;

  // Increment in-game time
  timeManager.incrementTime(5);

  const sendThinkingMessage = async (content) => {
    try {
      return await message.reply(content || 'Thinking...');
    } catch (error) {
      console.error('Error sending thinking message:', error);
      throw error;
    }
  };

  const handleMoveCommand = async (args) => {
    try {
      const locationName = args.join(' ');
      const guild = message.guild;
      if (!guild || !locationName) return;

      const thinkingMessage = await sendThinkingMessage();

      const channel = await locationManager.ensureLocationChannel(guild, locationName);
      const response = channel
        ? `**${NARRATOR_NAME}**: You head toward the ${locationName}...`
        : `**${NARRATOR_NAME}**: I’m not sure how to get there.`;

      await thinkingMessage.edit(response);
    } catch (error) {
      console.error('Error handling move command:', error);
      throw error;
    }
  };

  const handleLoreCommand = async (args) => {
    try {
      const topic = args.join(' ');
      if (!topic) return;

      const thinkingMessage = await sendThinkingMessage();

      let lore = loreManager.getLore(topic) || loreManager.generateNewLore(topic);
      await thinkingMessage.edit(`**${NARRATOR_NAME}**: ${lore}`);
    } catch (error) {
      console.error('Error handling lore command:', error);
      throw error;
    }
  };

  const handleDefaultCommand = async () => {
    try {
      const thinkingMessage = await sendThinkingMessage();
      await thinkingMessage.edit(`**${NARRATOR_NAME}**: I do not recognize that command.`);
    } catch (error) {
      console.error('Error handling default command:', error);
      throw error;
    }
  };

  const handleFreeFormMessage = async () => {
    try {
      const currentTime = timeManager.getCurrentTime();
      const response = `**${NARRATOR_NAME}**: [Day ${currentTime.day}, ${currentTime.hour}:${String(currentTime.minute).padStart(2, '0')} - Weather: ${currentTime.weather}] ` +
        `I hear your words echo through the realm...`;

      const thinkingMessage = await sendThinkingMessage();
      await thinkingMessage.edit(response);
    } catch (error) {
      console.error('Error handling free-form message:', error);
      throw error;
    }
  };

  try {
    if (message.content.startsWith(BOT_PREFIX)) {
      const args = message.content.slice(BOT_PREFIX.length).trim().split(/\s+/);
      const command = args.shift().toLowerCase();

      switch (command) {
        case 'move':
          await handleMoveCommand(args);
          break;
        case 'lore':
          await handleLoreCommand(args);
          break;
        default:
          await handleDefaultCommand();
          break;
      }
    } else {
      await handleFreeFormMessage();
    }
  } catch (error) {
    console.error('Error processing message:', error);
  }
}

module.exports = { handleMessageCreate };
