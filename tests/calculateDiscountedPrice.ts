export function calculateDiscountedPrice (price, discount) {
    if (price < 0) {
        throw new Error('Invalid input: price cannot be negative');
    }
    if (discount < 0 || discount > 100) {
        throw new Error('Invalid input: discount must be between 0 and 100');
    }

    let discountedAmount = (price * discount) / 100;
    let finalPrice = price - discountedAmount; 
    return finalPrice;
}