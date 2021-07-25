// Dividir sin usar el signo de division

const divide = (a, b) => {
  let value = 0;
  while (a - b >= 0) {
    a -= b;
    value++;
  }
  return { value, rest: a };
}

console.log(divide(7, 2));
