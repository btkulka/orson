// src/commands/commands.js
require('dotenv').config();
const { InstallGlobalCommands } = require('../utils/discordUtils.js');

// Command Definitions
const LORE_COMMAND = {
  name: 'lore',
  description: 'Ask Orson for lore about a topic',
  options: [
    {
      type: 3, // STRING
      name: 'topic',
      description: 'The topic you want to know more about',
      required: true,
    },
  ],
  type: 1, // Slash command
};

const MOVE_COMMAND = {
  name: 'move',
  description: 'Move to a new location',
  options: [
    {
      type: 3, // STRING
      name: 'location',
      description: 'The location you want to move to',
      required: true,
    },
  ],
  type: 1, // Slash command
};

const TIME_COMMAND = {
  name: 'time',
  description: 'Get the current in-game time',
  type: 1, // Slash command
};

// Additional Commands
// Add more commands here if needed in the future

// Consolidated Command List
const ALL_COMMANDS = [LORE_COMMAND, MOVE_COMMAND, TIME_COMMAND];

// Install commands globally

// The new Discord Installation feature seems to make this obsolete

// (async () => {
//   try {
//     const appId = process.env.DISCORD_APP_ID;
//     const token = process.env.DISCORD_TOKEN;

//     if (!appId || !token) {
//       throw new Error('APP_ID or DISCORD_TOKEN is not defined in the environment variables.');
//     }

//     console.log('Installing global commands...');
//     await InstallGlobalCommands(appId, ALL_COMMANDS);
//     console.log('Global commands installed successfully.');
//   } catch (error) {
//     console.error('Error installing global commands:', error);
//   }
// })();
