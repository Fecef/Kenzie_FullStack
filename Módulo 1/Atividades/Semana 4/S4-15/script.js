// Exercício 1
function onlyEven(arr) {
  let even = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      even.push(arr[i]);
    }
  }
  return even;
}

// Exercício 2
function somaArray(arr) {
  let soma = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      arr[i] = parseInt(arr[i]);
    }
    soma += arr[i];
  }
  return soma;
}
