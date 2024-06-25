import { test, expect } from "@playwright/test";
import { fahrenheitToCelsius , celsiusToFahrenheit } from "./tempratureConvertion";


test.describe('Temperature Conversion Functions', () => {

    test('should convert Fahrenheit to Celsius correctly', async () => {
        expect(fahrenheitToCelsius(32)).toBe(0);
        expect(fahrenheitToCelsius(212)).toBe(100);
        expect(fahrenheitToCelsius(98.6)).toBeCloseTo(37, 1); 
        expect(fahrenheitToCelsius(-40)).toBe(-40);
    });

    test('should convert Celsius to Fahrenheit correctly', async () => {
        expect(celsiusToFahrenheit(0)).toBe(32);
        expect(celsiusToFahrenheit(100)).toBe(212);
        expect(celsiusToFahrenheit(37)).toBeCloseTo(98.6, 1);
        expect(celsiusToFahrenheit(-40)).toBe(-40);
    });
});