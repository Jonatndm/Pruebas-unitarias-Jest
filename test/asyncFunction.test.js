const asyncFunction = require('../asyncFunction');

describe('asyncFunction', () => {
  test('debe retornar el doble del valor después de 1 segundo', async () => {
    const result = await asyncFunction(5);
    expect(result).toBe(10);
  });

  test('debe lanzar un error si el valor no es un número', async () => {
    await expect(asyncFunction('no es un número')).rejects.toThrow('El valor debe ser un número');
  });
});
