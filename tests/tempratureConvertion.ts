export function fahrenheitToCelsius(fahrenheit) {
    let temperatureF = fahrenheit;
    let convertFahrenheitToCelsius = (temperatureF - 32) * 5 / 9;
    return convertFahrenheitToCelsius;
}

export function celsiusToFahrenheit(celsius) {
    let temperatureC = celsius;
    let convertCelsiusToFahrenheit = temperatureC * 9 / 5 + 32;
    return convertCelsiusToFahrenheit;
}