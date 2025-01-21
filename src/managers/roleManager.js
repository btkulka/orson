// src/managers/roleManager.js

/**
 * Add a role to a member in a Discord guild.
 * @param {GuildMember} member - The guild member to add the role to.
 * @param {string} roleName - The name of the role to add.
 * @returns {Promise<boolean>} True if successful, otherwise false.
 */
async function addRoleToMember(member, roleName) {
    try {
        const role = member.guild.roles.cache.find((r) => r.name === roleName);
        if (!role) {
            console.error(`Role "${roleName}" not found in guild "${member.guild.name}".`);
            return false;
        }

        await member.roles.add(role);
        console.log(`Added role "${roleName}" to member "${member.user.tag}".`);
        return true;
    } catch (error) {
        console.error(`Failed to add role "${roleName}" to member "${member.user.tag}":`, error);
        return false;
    }
}

/**
 * Remove a role from a member in a Discord guild.
 * @param {GuildMember} member - The guild member to remove the role from.
 * @param {string} roleName - The name of the role to remove.
 * @returns {Promise<boolean>} True if successful, otherwise false.
 */
async function removeRoleFromMember(member, roleName) {
    try {
        const role = member.guild.roles.cache.find((r) => r.name === roleName);
        if (!role) {
            console.error(`Role "${roleName}" not found in guild "${member.guild.name}".`);
            return false;
        }

        await member.roles.remove(role);
        console.log(`Removed role "${roleName}" from member "${member.user.tag}".`);
        return true;
    } catch (error) {
        console.error(`Failed to remove role "${roleName}" from member "${member.user.tag}":`, error);
        return false;
    }
}

/**
 * Create a role in the guild if it does not exist.
 * @param {Guild} guild - The guild to create the role in.
 * @param {string} roleName - The name of the role to create.
 * @param {object} options - Role options (color, permissions, etc.).
 * @returns {Promise<Role|null>} The created role or null if failed.
 */
async function createRoleIfNotExists(guild, roleName, options = {}) {
    try {
        const existingRole = guild.roles.cache.find((r) => r.name === roleName);
        if (existingRole) {
            console.log(`Role "${roleName}" already exists in guild "${guild.name}".`);
            return existingRole;
        }

        const newRole = await guild.roles.create({
            name: roleName,
            ...options,
        });

        console.log(`Created role "${roleName}" in guild "${guild.name}".`);
        return newRole;
    } catch (error) {
        console.error(`Failed to create role "${roleName}" in guild "${guild.name}":`, error);
        return null;
    }
}

/**
 * Delete a role from the guild.
 * @param {Guild} guild - The guild to delete the role from.
 * @param {string} roleName - The name of the role to delete.
 * @returns {Promise<boolean>} True if successful, otherwise false.
 */
async function deleteRole(guild, roleName) {
    try {
        const role = guild.roles.cache.find((r) => r.name === roleName);
        if (!role) {
            console.error(`Role "${roleName}" not found in guild "${guild.name}".`);
            return false;
        }

        await role.delete();
        console.log(`Deleted role "${roleName}" from guild "${guild.name}".`);
        return true;
    } catch (error) {
        console.error(`Failed to delete role "${roleName}" from guild "${guild.name}":`, error);
        return false;
    }
}

module.exports = {
    addRoleToMember,
    removeRoleFromMember,
    createRoleIfNotExists,
    deleteRole,
};
