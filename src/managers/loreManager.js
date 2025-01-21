const fs = require('fs').promises;
const path = './loreData.json';

async function saveLore(topic, text) {
    const lore = await loadLore();
    lore[topic.toLowerCase()] = text;
    await fs.writeFile(path, JSON.stringify(lore, null, 2));
}

async function loadLore() {
    try {
        const data = await fs.readFile(path, 'utf-8');
        return JSON.parse(data);
    } catch {
        return {};
    }
}

async function getLore(topic) {
    const lore = await loadLore();
    return lore[topic.toLowerCase()] || null;
}

async function generateNewLore(topic) {
    const newLore = `A newly fabricated piece of lore about ${topic}.`;
    await saveLore(topic, newLore);
    return newLore;
}

module.exports = {
    getLore,
    saveLore,
    loadLore,
    generateNewLore,
};
