// Calcular la potencia de un numero sin utilizar el signo de elevado.

const raise = (a, b) => {
  let result = 1;
  for (let i = 1; i < b; i++) {
    result *= a;
  }
  return result;
}

console.log(raise(2, 5));
