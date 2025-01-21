const { NARRATOR_NAME } = require('../config');
const logger = require('../managers/logger');

async function handleSlashCommand(interaction, { locationManager, loreManager, timeManager }) {
    const { commandName, options } = interaction;

    try {
        switch (commandName) {
            case 'move': {
                const locationName = options.getString('location');
                const guild = interaction.guild;
                if (!guild || !locationName) {
                    await interaction.reply(`**${NARRATOR_NAME}**: Invalid location or guild.`);
                    return;
                }
                const channel = await locationManager.ensureLocationChannel(guild, locationName);
                if (channel) {
                    await interaction.reply(`**${NARRATOR_NAME}**: You head toward the ${locationName}...`);
                } else {
                    await interaction.reply(`**${NARRATOR_NAME}**: I’m not sure how to get there.`);
                }
                break;
            }

            case 'lore': {
                const topic = options.getString('topic');
                if (!topic) {
                    await interaction.reply(`**${NARRATOR_NAME}**: Please provide a valid topic.`);
                    return;
                }
                let existingLore = await loreManager.getLore(topic);
                if (!existingLore) {
                    existingLore = await loreManager.generateNewLore(topic);
                }
                await interaction.reply(`**${NARRATOR_NAME}**: ${existingLore}`);
                break;
            }

            case 'time': {
                const currentTime = timeManager.getCurrentTime();
                await interaction.reply(
                  `**${NARRATOR_NAME}**: The current in-game time is Day ${currentTime.day}, ${currentTime.hour}:${String(currentTime.minute).padStart(2, '0')} (${currentTime.weather}).`
                );
                break;
            }

            default:
                await interaction.reply(`**${NARRATOR_NAME}**: I do not recognize that command.`);
                break;
        }
    } catch (error) {
        logger.error(`Error handling command '${commandName}': ${error.message}`);
        await interaction.reply(`**${NARRATOR_NAME}**: An error occurred while processing your command. Please try again later.`);
    }
}

module.exports = {
    handleSlashCommand
}