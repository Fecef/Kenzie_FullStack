const numeros = [1, -1, 2, -2, -3, 3, 4, -4, 5, -5, 6, -6, 7, -7, 8, -8, 9];
const texto =
  "Crie uma função que recebe uma string como parâmetro par que o pato não lave o pé.";
const textoArray = [
  "Crie",
  "uma",
  "função",
  "que",
  "recebe",
  "uma",
  "string",
  "como",
];

function contagemNegativos(arr) {
  let contador = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[i] < 0 ? contador++ : false;
  }
  return `Contagem dos números negativos.\n ${contador}`;
}
console.log(contagemNegativos(numeros));

function somaNegativos(arr) {
  let soma = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[i] < 0 ? (soma += arr[i]) : false;
  }
  return `Soma dos números negativos.\n ${soma}`;
}
console.log(somaNegativos(numeros));

function arrayDePares(num) {
  let pares = [];
  for (let i = 0; i <= num; i++) {
    i % 2 === 0 ? pares.push(i) : false;
  }
  return `Array com números pares.\n ${pares}`;
}
console.log(arrayDePares(20));

function arrayDeNegativos(arr) {
  let negativos = [];
  for (let i = 0; i < arr.length; i++) {
    i % 2 === 0 ? true : negativos.push(arr[i]);
  }
  return `Array com números negativos.\n ${negativos}`;
}
console.log(arrayDeNegativos(numeros));

function somaArray(arr) {
  let soma = 0;
  for (let i = 0; i < arr.length; i++) {
    soma += arr[i];
  }
  return `Soma dos elementos do array.\n ${soma}`;
}
console.log(somaArray(numeros));

function arrayMaisCinco(arr) {
  let novoArray = [];
  for (let i = 0; i < arr.length; i++) {
    novoArray.push(arr[i] + 5);
  }
  return `+5 para cada elemento do array.\n ${novoArray}`;
}
console.log(arrayMaisCinco(numeros));

function mediaArray(arr) {
  let soma = 0;
  for (let i = 0; i < arr.length; i++) {
    soma += arr[i];
  }
  return `Média de elementos dentro do array.\n ${soma}`;
}
console.log(mediaArray(numeros));

function quantidadeDeAs(string) {
  let contador = 0;
  for (let i = 0; i < string.length; i++) {
    string[i] === "a" ? contador++ : false;
  }
  return `Retornar a quantidade A's presente na string.\n ${contador}`;
}
console.log(quantidadeDeAs(texto));

function somaLength(arr) {
  let soma = 0;
  for (let i = 0; i < arr.length; i++) {
    soma += arr[i].length;
  }
  return `Retornar a soma do comprimento de todos as strings do array.\n ${soma}`;
}
console.log(somaLength(textoArray));

function frasesComLengthImpar(string) {
  let arr = string.split(" ");
  let novoArr = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i].length % 2 !== 0 ? novoArr.push(arr[i]) : false;
  }
  return `Retornar string com comprimento ímpares.\n ${novoArr}`;
}
console.log(frasesComLengthImpar(texto));

function troca0PorO(string) {
  return `Trocando Os por 0s.\n ${string.replaceAll(/o/g, "0")}`;
}
console.log(troca0PorO(texto));

function trocaPminPorPmai(string) {
  return `Trocando p's por P's.\n ${string.replaceAll(/p/g, "P")}`;
}
console.log(trocaPminPorPmai(texto));
