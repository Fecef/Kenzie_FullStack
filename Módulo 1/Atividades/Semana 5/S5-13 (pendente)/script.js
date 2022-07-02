// Exercício 1
function isPalindrome(x) {
  x = x.toLowerCase();
  let xReversed = x.split("").reverse().join("");
  return x === xReversed ? true : false;
}

// Exercício 2
function maps(x) {
  let arr = [];
  for (let i = 0; i < x.length; i++) {
    arr.push(x[i] * 2);
  }
  return arr;
}

// Exercício 3
function countPositivesSumNegatives(input) {
  let arr = [];
  let count = 0;
  let sum = 0;
  if (input == null) {
    return arr;
  }
  for (let i = 0; i < input.length; i++) {
    input[i] > 0 ? count++ : (sum += input[i]);
  }
  arr.push(count, sum);
  return arr[0] + arr[1] === 0 ? (arr = []) : arr;
}

// Exercício 4
function past(h, m, s) {
  return (result = (h * 3600 + m * 60 + s) * 1000);
}
