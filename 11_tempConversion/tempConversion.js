// Fourmula °C = (°F - 32) × 5/9

const convertToCelsius = function(farenheit) {
  let celsius = (farenheit - 32) * 5 / 9
  celsius = Math.round(celsius * 10) / 10
return celsius
};
// Formula : °F = (°C × 9/5) + 32
const convertToFahrenheit = function(celsius) {
  let farenheit = (celsius * 9 / 5) + 32
  farenheit = Math.round(farenheit * 10) / 10
  return farenheit
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
