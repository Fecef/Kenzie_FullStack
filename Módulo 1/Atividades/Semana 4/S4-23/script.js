// Exercício 1
function largestPairSum(numbers) {
  let maior1 = 0;
  let maior2 = 0;

  numbers.sort(function (a, b) {
    if (a > b) return 1;
    if (b > a) return -1;
    return 0;
  });

  maior1 = numbers[numbers.length - 1];
  maior2 = numbers[numbers.length - 2];

  return maior1 + maior2;
}

// Exercício 2
function dominator(arr) {
  const verificados = [];

  for (let i = 0; i < arr.length; i++) {
    if (verificados.includes(arr[i]) === true) {
      continue;
    }

    let contador = 0;

    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        contador++;
      }
    }
    if (contador > arr.length / 2) {
      return arr[i];
    }

    verificados.push(arr[i]);
  }

  return -1;
}
