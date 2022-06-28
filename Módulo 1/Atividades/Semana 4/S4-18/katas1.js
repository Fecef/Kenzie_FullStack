// Retornar os números de 1 a 20. (1, 2, 3,…, 19, 20)
function oneThroughTwenty() {
  let contador = "";
  
  for (let i = 1; i <= 20; i++) {
    contador += i + " ";
  }
  return "De 1 a 20:\n" + contador + "\n";
}
console.log(oneThroughTwenty());

// Retornar os números pares de 1 a 20. (2, 4, 6,…, 18, 20)
function evensToTwenty() {
  let contador = "";
  
  for (let i = 1; i <= 20; i++) {
    i % 2 === 0 ? (contador += i + " ") : false;
  }
  return "De 1 a 20(PAR):\n" + contador + "\n";
}
console.log(evensToTwenty());

// Retornar os números ímpares de 1 a 20. (1, 3, 5,…, 17, 19)
function oddsToTwenty() {
  let contador = "";
  
  for (let i = 1; i <= 20; i++) {
    i % 2 === 0 ? true : (contador += i + " ");
  }
  return "De 1 a 20 (ÍMPAR):\n" + contador + "\n";
}
console.log(oddsToTwenty());

// Retornar os múltiplos de 5 até 100. (5, 10, 15,…, 95, 100)
function multiplesOfFive() {
  let contador = "";
  
  for (let i = 1; i <= 100; i++) {
    i % 5 === 0 ? (contador += i + " ") : false;
  }
  return "De 1 a 100 (MÚLTIPLOS DE 5):\n" + contador + "\n";
}
console.log(multiplesOfFive());

// Retornar todos os números até 100 que forem quadrados perfeitos. (1, 4, 9, …, 81, 100)
function squareNumbers() {
  let contador = "";
  
  for (let i = 1; i <= 10; i++) {
    contador += i * i + " ";
  }
  return "De 1 a 100 (QUADRADOS PERFEITOS):\n" + contador + "\n";
}
console.log(squareNumbers());

// Retornar os números contando de trás para frente de 20 até 1. (20, 19, 18, …, 2, 1)
function countingBackwards() {
  let contador = "";
  
  for (let i = 20; i >= 1; i--) {
    contador += i + " ";
  }
  return "De 20 a 1:\n" + contador + "\n";
}
console.log(countingBackwards());

// Retornar os números pares de 20 até 1. (20, 18, 16, …, 4, 2)
function evenNumbersBackwards() {
  let contador = "";
  
  for (let i = 20; i >= 1; i--) {
    i % 2 === 0 ? (contador += i + " ") : false;
  }
  return "De 20 a 1 (PAR):\n" + contador + "\n";
}
console.log(evenNumbersBackwards());

// Retornar os números ímpares de 20 até 1. (19, 17, 15, …, 3, 1)
function oddNumbersBackwards() {
  let contador = "";
  
  for (let i = 20; i >= 1; i--) {
    i % 2 === 0 ? true : (contador += i + " ");
  }
  return "De 20 a 1 (ÍMPAR):\n" + contador + "\n";
}
console.log(oddNumbersBackwards());

// Retornar os múltiplos de 5 contando de trás para frente a partir de 100. (100, 95, 90, …, 10, 5)
function multiplesOfFiveBackwards() {
  let contador = "";
  
  for (let i = 100; i >= 1; i--) {
    i % 5 === 0 ? (contador += i + " ") : false;
  }
  return "De 100 a 1 (MÚLTIPLOS DE 5):\n" + contador + "\n";
}
console.log(multiplesOfFiveBackwards());

// Retornar os quadrados perfeitos contando de trás para frente a partir de 100. (100, 81, 64, …, 4, 1)
function squareNumbersBackwards() {
  let contador = "";
  
  for (let i = 10; i >= 1; i--) {
    contador += i * i + " ";
  }
  return "De 100 a 1 (QUADRADOS PERFEITOS):\n" + contador + "\n";
}
console.log(squareNumbersBackwards());
