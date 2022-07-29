// array de strings
const words = ["batata", "churros", "amendoim", "silas", "(café)", "chumbo"];

//array de datas de nascimento
const birthData = [
  "06/07/1996",
  "08/05/2005",
  "25/03/2004",
  "03,08,1999",
  "06,08,1998",
];

//array de números em string
const numbers = ["1", "52", "36", "895", "48548", "5.5", "6.9", "4.25"];

function oddString() {
  const oddies = words.map((word) => {
    if (word.length % 2 !== 0) {
      return word + "_";
    }
    return word;
  });
  return oddies;
}
oddString();
// ['batata', 'churros_', 'amendoim', 'silas_', '(café)']

function noBrackets() {
  const result = words.map((word, index) => {
    const hasBracket = word.includes("(");
    if (hasBracket) {
      return index;
    }
    return word;
  });
  return result;
}
noBrackets();
// [4, 6, 7, 10]

function firstUpper() {
  const result = words.map((word, index) => {
    const firstLetter = word[0];
    const wordFinal = word.replace(firstLetter, firstLetter.toUpperCase());
    const hasBracket = word.includes("(");

    if (hasBracket) {
      const removedBracketElement = words.splice(index, 1);
      return removedBracketElement;
    }
    return wordFinal;
  });
  return result;
}
firstUpper();
//['Batata', 'Churros', 'Amendoim', 'Silas', 'Chumbo', 'Abacate', 'Olhos']

function smallest() {
  const result = words.sort((a, b) => a.length - b.length);
  return result;
}
//['silas', 'olhos', 'batata', 'chumbo', 'churros', 'abacate', 'amendoim', '(café)', ...]
smallest();

function bornYear() {
  const yearOnly = birthData.map((data) => {
    const yearStartIndex = data.length - 4;
    const yearSliced = data.slice(yearStartIndex);
    return yearSliced;
  });
  return yearOnly;
}
//['1996', '2005', '2004', '1999', '1998']
bornYear();

function fixingDate() {
  const dataNormalized = birthData.map((data) => {
    const result = data.replaceAll(",", "/");
    return result;
  });
  return dataNormalized;
}
// ["06/07/1996", "08/05/2005", "25/03/2004", "03/08/1999", "06/08/1998"]
fixingDate();

function stringToNumbers() {
  const toNumber = numbers.map((num) => {
    return +num;
  });
  return toNumber;
}
stringToNumbers();
//[1, 52, 36, 895, 48548, 5.5, 6.9, 4.25]
