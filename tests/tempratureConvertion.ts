export function fahrenheitToCelsius (fahrenheit) {
 let tempratureF = fahrenheit; 
 let convertFarenheitToCelsius = (tempratureF = 32) * 5/9;
 return convertFarenheitToCelsius;
}

export function celsiusToFarenheit(celsius) {
    let tempratureC = celsius;
    let convertCelsiusToFarenheit = tempratureC * 9 / 5 + 32;
    return convertCelsiusToFarenheit;
}