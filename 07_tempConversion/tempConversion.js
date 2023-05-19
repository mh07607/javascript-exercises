const convertToCelsius = function(temp_F) {
  return  Math.round(((temp_F - 32) * 5/9)*10)/10;
};

const convertToFahrenheit = function(temp_C) {
  return Math.round(((temp_C * 9/5) + 32)*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
