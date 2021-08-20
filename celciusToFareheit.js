const celciusTemperature = 11;
const fahrenheitTemperature = 110;
// let fahrenheitTemperature = celciusToFahrenCoverter(celciusTemperature);
// console.log(celciusTemperature + "° celcius = " + fahrenheitTemperature + "° fahrenheit");

function celciusToFahrenCoverter(celciusTemperature) {
    fahrenhite = parseFloat(celciusTemperature * (9 / 5) + 32).toFixed(2);
    return fahrenhite;
}

function fahrenToCelciusConverter(fahrenheitTemperature) {
    celcius = parseFloat((fahrenheitTemperature - 32) * (5 / 9)).toFixed(2);
    return celcius;
}

console.log(fahrenheitTemperature + "° fahrenheit = " + fahrenToCelciusConverter(fahrenheitTemperature) + "° celcius");