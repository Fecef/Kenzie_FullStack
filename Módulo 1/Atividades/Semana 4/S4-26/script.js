// Exercício 1
function checkExam(array1, array2) {
  let total = 0;
  for (i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      total += 4;
    } else if (array1[i] !== array2[i] && array2[i] !== "") {
      total -= 1;
    }
  }
  total < 0 ? (total = 0) : false;
  return total;
}

// Exercício 2
function isDivideBy(number, a, b) {
  if (number % a === 0 && number % b === 0) {
    return true;
  }
  return false;
}

// Exercício 3
function DNAStrand(dna) {
  let string = "";
  for (i = 0; i < dna.length; i++) {
    dna[i] === "A" ? (string += "T") : false;
    dna[i] === "T" ? (string += "A") : false;
    dna[i] === "C" ? (string += "G") : false;
    dna[i] === "G" ? (string += "C") : false;
  }
  return string;
}
