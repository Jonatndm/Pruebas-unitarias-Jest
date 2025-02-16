function applyDiscountToProducts(products, discount) {
  if (typeof discount !== 'number' || discount < 0 || discount > 100) {
    throw new Error('El descuento debe ser un número entre 0 y 100');
  }

  return products
    .filter(product => product.inStock)
    .map(product => ({
      ...product,
      price: product.price * (1 - discount / 100),
    }));
}

module.exports = applyDiscountToProducts;