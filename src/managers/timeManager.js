const timeState = {
  day: 1,
  hour: 8,
  minute: 0,
  weather: 'Clear',
  season: 'Spring',
};

function updateTime(minutesToAdd) {
  timeState.minute += minutesToAdd;
  while (timeState.minute >= 60) {
      timeState.minute -= 60;
      timeState.hour += 1;
  }
  while (timeState.hour >= 24) {
      timeState.hour -= 24;
      timeState.day += 1;
  }
}

function updateWeather() {
  const weathers = ['Clear', 'Rain', 'Cloudy'];
  timeState.weather = weathers[Math.floor(Math.random() * weathers.length)];
}

module.exports = {
  incrementTime: (minutes) => {
      updateTime(minutes);
      updateWeather();
  },
  getCurrentTime: () => ({ ...timeState }),
  isDaytime: () => timeState.hour >= 6 && timeState.hour < 18,
};