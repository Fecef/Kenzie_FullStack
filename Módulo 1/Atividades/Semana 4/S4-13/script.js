// Exercício 1
function noSpace(x) {
  return x.replace(/\s/g, "");
}

// Exercício 2
function countChar(string, char) {
  let regex = new RegExp(`${char}`, "gi");

  string = string.match(regex);

  if (string === null) {
    return (length = 0);
  }

  return string.length;
}

// Exercício 3
function stantonMeasure(array) {
  let contador1 = 0;
  let contadorN = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 1) {
      contador1++;
    }
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] === contador1) {
      contadorN++;
    }

    return contadorN;
  }
}
