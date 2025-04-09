const convertToCelsius = function(fahren) {
  const celsius = ((fahren - 32) * 5/9);
  let roundedC = Math.round(celsius * 10)/10;
  return roundedC

};

const convertToFahrenheit = function(cels) {
  const fahrenheit = ((cels * 9/5) + 32)
  let roundedF = Math.round(fahrenheit * 10)/10;
  return roundedF
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
