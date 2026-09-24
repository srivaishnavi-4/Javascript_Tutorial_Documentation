export async function getProducts() {
  const response = await fetch("/products.json");
  if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
  return await response.json();
}

export async function createProduct(product) {
  const body = JSON.stringify(product);
  return { ok: true, sentBody: body };
}