const applyDiscountToProducts = require('../productService');

describe('applyDiscountToProducts', () => {
  const products = [
    { id: 1, name: 'Laptop', price: 1000, inStock: true },
    { id: 2, name: 'Mouse', price: 20, inStock: false },
    { id: 3, name: 'Keyboard', price: 50, inStock: true },
  ];

  test('debe aplicar un descuento del 10% a los productos en stock', () => {
    const discountedProducts = applyDiscountToProducts(products, 10);

    expect(discountedProducts).toEqual([
      { id: 1, name: 'Laptop', price: 900, inStock: true },
      { id: 3, name: 'Keyboard', price: 45, inStock: true },
    ]);
  });

  test('debe retornar un array vacío si no hay productos en stock', () => {
    const noStockProducts = [
      { id: 2, name: 'Mouse', price: 20, inStock: false },
    ];

    const discountedProducts = applyDiscountToProducts(noStockProducts, 10);
    expect(discountedProducts).toEqual([]);
  });

  test('debe lanzar un error si el descuento no es un número válido', () => {
    expect(() => applyDiscountToProducts(products, '10')).toThrow('El descuento debe ser un número entre 0 y 100');
    expect(() => applyDiscountToProducts(products, -10)).toThrow('El descuento debe ser un número entre 0 y 100');
    expect(() => applyDiscountToProducts(products, 110)).toThrow('El descuento debe ser un número entre 0 y 100');
  });
});