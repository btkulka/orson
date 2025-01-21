const { Client, Intents } = require('discord.js');
const timeManager = require('./managers/timeManager');
const locationManager = require('./managers/locationManager');
const loreManager = require('./managers/loreManager');
const { handleMessageCreate } = require('./events/messageCreate');

class BotInitializerService {
  constructor(client) {
    this.client = client;
  }

  async initialize() {
      try {
          console.log('Initializing bot...');
          await setupDefaultChannels(client); // Set up default channels under categories
          console.log('Bot initialization complete!');
      } catch (error) {
          console.error('Error during bot initialization:', error);
          process.exit(1); // Exit with an error code
      }
  }

  async ensureAdminCategory(guild) {
    const adminCategoryName = 'Admin'; // Example default category name

    // Check if the admin category already exists
    let adminCategory = guild.channels.cache.find(
      (ch) => ch.type === 'GUILD_CATEGORY' && ch.name === adminCategoryName
    );

    // Create the admin category only if it doesn't exist
    if (!adminCategory) {
      try {
        adminCategory = await guild.channels.create(adminCategoryName, { type: 'GUILD_CATEGORY' });
        console.log(`Admin category '${adminCategoryName}' created.`);
      } catch (error) {
        console.error(`Error creating admin category '${adminCategoryName}':`, error);
      }
    } else {
      console.log(`Admin category '${adminCategoryName}' already exists.`);
    }

    return adminCategory;
  }

  async initializeGuilds() {
    for (const [id, guild] of this.client.guilds.cache) {
      await this.ensureAdminCategory(guild);
    }
  }

  async setupEventHandlers() {

    this.client.on('messageCreate', async (message) => {
        await handleMessageCreate(message, {
            timeManager,
            locationManager,
            loreManager,
        });
        });

        client.on("applicationCommandCreate", async () => {
            console.log()
        })


        this.client.once('ready', async () => {
        console.log(`Logged in as ${this.client.user.tag}!`);
            await this.initializeGuilds();
        });

        this.client.login(token);
    }

  
    async ensureDefaultChannels(guild) {
        for (const [channelName, channelDescription] of Object.entries(defaultChannels)) {
            // Normalize channel names for case-insensitive comparison
            const existingChannel = guild.channels.cache.find(
                ch => ch.name.toLowerCase() === channelName.toLowerCase()
            );

            if (!existingChannel) {
                console.log(`Creating channel: ${channelName}`);
                try {
                    await guild.channels.create(channelName, {
                        type: 'GUILD_TEXT',
                        topic: channelDescription,
                    });
                } catch (error) {
                    console.error(`Failed to create channel ${channelName} in guild ${guild.id}:`, error);
                }
            } else {
                console.log(`Channel "${channelName}" already exists in guild ${guild.name}.`);
            }
        }
    }

    async setupDefaultChannels(client) {
        try {
            console.log('Setting up default channels...');
            const guilds = await client.guilds.fetch();

            for (const [guildId, guild] of guilds) {
                const fullGuild = await guild.fetch(); // Fetch the full guild data
                await ensureDefaultChannels(fullGuild);
            }

            console.log('Default channels setup complete!');
        } catch (error) {
            console.error('Error during default channel setup:', error);
        }
    }
}

module.exports = BotInitializerService;
