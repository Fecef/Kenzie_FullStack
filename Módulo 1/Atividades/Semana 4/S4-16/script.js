// Exercício 1
function monkeyCount(n) {
  let monkeyQtd = [];
  for (let i = 1; i < n + 1; i++) {
    monkeyQtd.push(i);
  }
  return monkeyQtd;
}

// Exercício 2
function squareOrSquareRoot(array) {
  for (let i = 0; i < array.length; i++) {
    if (Math.sqrt(array[i]) % 1 == 0 && array[i] !== 1) {
      array[i] = Math.sqrt(array[i]);
    } else {
      array[i] *= array[i];
    }
  }
  return array;
}

// Exercício 3
function fixTheMeerkat(arr) {
  return arr.reverse();
}