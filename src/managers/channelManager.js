// src/managers/channelManager.js
const defaultChannels = require('../config/defaultChannels');

async function ensureCategory(guild, categoryName) {
    // Check if the category exists (case-insensitive)
    let category = guild.channels.cache.find(
        ch => ch.type === 'GUILD_CATEGORY' && ch.name.toLowerCase() === categoryName.toLowerCase()
    );

    if (!category) {
        console.log(`Creating category: ${categoryName}`);
        try {
            category = await guild.channels.create(categoryName, { type: 'GUILD_CATEGORY' });
        } catch (error) {
            console.error(`Failed to create category ${categoryName} in guild ${guild.id}:`, error);
        }
    }

    return category;
}

async function ensureDefaultChannels(guild) {
    for (const [categoryName, channels] of Object.entries(defaultChannels)) {
        // Ensure the category exists
        const category = await ensureCategory(guild, categoryName);

        for (const [channelName, channelDescription] of Object.entries(channels)) {
            // Check if the channel exists within the category (case-insensitive)
            const existingChannel = guild.channels.cache.find(
                ch =>
                    ch.name.toLowerCase() === channelName.toLowerCase() &&
                    ch.parentId === category.id
            );

            if (!existingChannel) {
                console.log(`Creating channel: ${channelName} under category: ${categoryName}`);
                try {
                    await guild.channels.create(channelName, {
                        type: 'GUILD_TEXT',
                        topic: channelDescription,
                        parent: category.id, // Place the channel under the category
                    });
                } catch (error) {
                    console.error(
                        `Failed to create channel ${channelName} under category ${categoryName} in guild ${guild.id}:`,
                        error
                    );
                }
            } else {
                console.log(
                    `Channel "${channelName}" already exists in category "${categoryName}" for guild ${guild.name}.`
                );
            }
        }
    }
}

async function setupDefaultChannels(client) {
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

module.exports = {
    setupDefaultChannels,
};
