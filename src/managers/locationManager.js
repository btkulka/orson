const locationMap = {
  Tavern: {
    category: 'Town of Rivershire',
    description: 'A cozy tavern filled with the scent of ale and a warm hearth.'
  },
  Blacksmith: {
    category: 'Town of Rivershire',
    description: 'A loud workshop where metal rings on anvils all day long.'
  }
};

const channelLocationMap = {}; // channelId -> locationName

module.exports = {
  async ensureLocationChannel(guild, locationName) {
      const locationInfo = locationMap[locationName];
      if (!locationInfo) return null; // Unknown location

      // Find the category by name
      let category = guild.channels.cache.find(
          (ch) => ch.type === 'GUILD_CATEGORY' && ch.name === locationInfo.category
      );

      // Create the category only if it doesn't exist
      if (!category) {
          try {
              category = await guild.channels.create(locationInfo.category, {
                  type: 'GUILD_CATEGORY'
              });
          } catch (error) {
              console.error(`Error creating category '${locationInfo.category}':`, error);
              throw error;
          }
      }

      // Sanitize the channel name
      const channelName = locationName.toLowerCase().replace(/\s+/g, '-');

      // Check if a channel with the name exists under the correct category
      let locationChannel = guild.channels.cache.find(
          (ch) => ch.name === channelName && ch.parentId === category.id
      );

      // Create the channel only if it doesn't exist
      if (!locationChannel) {
          try {
              locationChannel = await guild.channels.create(channelName, {
                  type: 'GUILD_TEXT',
                  parent: category.id,
                  topic: locationInfo.description
              });
          } catch (error) {
              console.error(`Error creating channel '${channelName}':`, error);
              throw error;
          }
      }

      channelLocationMap[locationChannel.id] = locationName;
      return locationChannel;
  },

  getLocationNameFromChannel(channelId) {
      return channelLocationMap[channelId] || null;
  },

  async removeLocationChannel(guild, locationName) {
      const locationInfo = locationMap[locationName];
      if (!locationInfo) return;

      let category = guild.channels.cache.find(
          (ch) => ch.type === 'GUILD_CATEGORY' && ch.name === locationInfo.category
      );
      if (!category) return;

      const channelName = locationName.toLowerCase().replace(/\s+/g, '-');
      let locationChannel = guild.channels.cache.find(
          (ch) => ch.name === channelName && ch.parentId === category.id
      );

      if (locationChannel) {
          try {
              await locationChannel.delete(`Location '${locationName}' is no longer accessible.`);
              delete channelLocationMap[locationChannel.id];
          } catch (error) {
              console.error(`Error deleting channel '${channelName}':`, error);
          }
      }

      if (category.children.cache.size === 0) {
          try {
              await category.delete(`No more rooms under ${locationInfo.category}`);
          } catch (error) {
              console.error(`Error deleting category '${locationInfo.category}':`, error);
          }
      }
  }
};
