const players = {};

/**
 * Get the character data for a given Discord user ID.
 * @param {string} userId - Discord user ID.
 * @returns {object|null} The player's character data, or null if not found.
 */
function getCharacter(userId) {
    return players[userId]?.character || null;
}

/**
 * Create or update a character associated with a Discord user ID.
 * @param {string} userId - Discord user ID.
 * @param {object} characterData - The character data to associate.
 */
function setCharacter(userId, characterData) {
    if (!players[userId]) {
        players[userId] = { character: {}, progress: {}, inventory: [] };
    }
    players[userId].character = { ...players[userId].character, ...characterData };
}

/**
 * Get a player's inventory.
 * @param {string} userId - Discord user ID.
 * @returns {array|null} The player's inventory, or null if not found.
 */
function getInventory(userId) {
    return players[userId]?.inventory || null;
}

/**
 * Add an item to a player's inventory.
 * @param {string} userId - Discord user ID.
 * @param {object} item - The item to add.
 */
function addItemToInventory(userId, item) {
    if (!players[userId]) {
        players[userId] = { character: {}, progress: {}, inventory: [] };
    }
    players[userId].inventory.push(item);
}

/**
 * Remove an item from a player's inventory.
 * @param {string} userId - Discord user ID.
 * @param {string} itemName - The name of the item to remove.
 */
function removeItemFromInventory(userId, itemName) {
    if (players[userId] && players[userId].inventory) {
        players[userId].inventory = players[userId].inventory.filter(
            (item) => item.name !== itemName
        );
    }
}

/**
 * Track a player's progress (e.g., quests, achievements).
 * @param {string} userId - Discord user ID.
 * @param {object} progressData - The progress data to associate.
 */
function updateProgress(userId, progressData) {
    if (!players[userId]) {
        players[userId] = { character: {}, progress: {}, inventory: [] };
    }
    players[userId].progress = { ...players[userId].progress, ...progressData };
}

/**
 * Remove a player's association completely.
 * @param {string} userId - Discord user ID.
 */
function removePlayer(userId) {
    delete players[userId];
}

module.exports = {
    getCharacter,
    setCharacter,
    getInventory,
    addItemToInventory,
    removeItemFromInventory,
    updateProgress,
    removePlayer,
};
