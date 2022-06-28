// ADD
function add(num1, num2) {
  return num1 + num2;
}
console.assert(
  add(3, 5) == 8,
  "A função add não está funcionando como esperado"
);

// MULTIPLY
function multiply(num1, num2) {
  let total = 0;

  for (let i = 0; i < num2; i++) {
    total = add(num1, total);
  }
  return total;
}
console.assert(
  multiply(4, 6) === 24,
  "A função multiply não está funcionando como esperado"
);

// POWER
function power(x, n) {
  let total = 1;

  for (let i = 0; i < n; i++) {
    total = multiply(x, total);
  }
  return total;
}
console.assert(
  power(3, 4) === 81,
  "A função power não está funcionando como esperado"
);

// FACTORIAL
function factorial(x) {
  for (let i = x - 1; i > 0; i--) {
    x = multiply(x, i);
  }
  return x;
}
console.assert(
  factorial(5) === 120,
  "A função factorial não está funcionando como esperado"
);

/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// FIBONACCI
function fibonacci(n) {
  let num1 = 1;
  let num2 = 0;
  let aux = 0;

  for (let i = 0; i < n; i++) {
    aux = num1;
    num1 = add(num1, num2);
    num2 = aux;
  }
  return aux;
}
console.assert(
  fibonacci(7) === 13,
  "A função fibonacci não está funcionando como esperado"
);
