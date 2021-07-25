// Restar 5 - 1 sin usar el simbolo de resta

const resta = (num1, num2) => {
  let result = 0;
  for (let i = num2; i < num1; i++) {
    result++;
  }
  return result;
}

console.log(resta(5, 1));
