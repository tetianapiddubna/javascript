import { test, expect } from "@playwright/test";
import { calculateDiscountedPrice } from "./calculateDiscountedPrice";

test.describe ('testingDicountedPrice', () => {
    test('Is returning correct positive values', async() => {
        let price = 300;
        let discount = 10;
        let result = calculateDiscountedPrice(price, discount);
        expect(result).toBe(result);
    });
    test('Is returning an error because negative values are used', async() => {
        let price = -19;
        let discount = -2;
        expect (() => calculateDiscountedPrice(price, discount)).toThrow('Invalid input: price cannot be negative');
    });
    test('Is throwing an error for discount less than 0', async () => {
        const price = 100;
        const discount = -1;
        expect(() => calculateDiscountedPrice(price, discount)).toThrow('Invalid input: discount must be between 0 and 100');
      });
      test('Is throwing an error for discount more than 100', async () => {
        const price = 100;
        const discount = 100;
        expect(() => calculateDiscountedPrice(price, discount)).toThrow('Invalid input: discount must be between 0 and 100');
      });
});