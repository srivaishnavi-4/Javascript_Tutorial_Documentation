export const taxRate = 0.18;

export const formatPrice = price => `₹${price.toLocaleString("en-IN")}`;

export function calculateTotal(...prices) {
  return prices.reduce((total, price) => total + price, 0);
}

export function getProductSummary({ name, price, category = "Unknown" }) {
  return `${name} | ${category} | ${formatPrice(price)}`;
}

export function shallowCopy(product) {
  return { ...product };
}

export function deepCopy(product) {
  return structuredClone(product);
}

export function welcomeMessage(name) {
  return `Welcome, ${name}!`;
}