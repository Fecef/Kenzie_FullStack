// Soma
function add(num1, num2) {
  return num1 + num2;
}
console.log(add(2, 4));

// Multiplicação
function multiply(num1, num2) {
  let total = 0;

  for (let i = 0; i < num2; i++) {
    total += add(num1, 0);
  }
  return total;
}
console.log(multiply(6, 8));

// Potência
function power(x, n) {
  let total = 1;

  for (let i = 0; i < n; i++) {
    total *= multiply(x, 1);
  }
  return total;
}
console.log(power(2, 8));

// Fatorial
function factorial(x) {
  for (let i = x - 1; i > 0; i--) {
    x = multiply(x, i);
  }
  return x;
}
console.log(factorial(9));

// Fibonacci
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
console.log(fibonacci(8));
