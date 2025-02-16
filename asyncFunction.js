async function asyncFunction(value) {
  if (typeof value !== 'number') {
    throw new Error('El valor debe ser un número');
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value * 2);
    }, 1000);
  });
}

module.exports = asyncFunction;

