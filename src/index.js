require('dotenv').config();
const { Client, Intents } = require('discord.js');
const BotInitializerService = require('./botInitializerService');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const botInitializerService = new BotInitializerService(client);
botInitializerService.initialize();

// Export the client and initializeBot function
module.exports = {
    client,
    initializeBot,
};
