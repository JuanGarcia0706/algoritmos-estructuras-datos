// Multiplicar dos numeros sin multiplicar

const multiply = (a, b) => {
  let result = a;
  for (let i = 1; i < b; i++) {
    result += a;
  }
  return result;
}

console.log(multiply(5, 5));
