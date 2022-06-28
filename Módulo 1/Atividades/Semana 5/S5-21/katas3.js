const sampleArray = [
  469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848,
  179, 535, 940, 472,
];

function kata1() {
  let string = "";
  for (let i = 1; i <= 25; i++) {
    string += i + " ";
  }
  showResults(
    "Exibir os números de 1 a 25: (1, 2, 3, …, 24, 25)\n" + string + "\n"
  );
  return string;
}
kata1();

function kata2() {
  let string = "";
  for (let i = 25; i >= 1; i--) {
    string += i + " ";
  }
  showResults(
    "Exibir os números de 25 a 1: (25, 24, 23, …, 2, 1)\n" + string + "\n"
  );
  return string;
}
kata2();

function kata3() {
  let string = "";
  for (let i = -1; i >= -25; i--) {
    string += i + " ";
  }
  showResults(
    "Exibir os números de -1 a -25: (-1, -2, -3, …, -24, -25)\n" + string + "\n"
  );
  return string;
}
kata3();

function kata4() {
  let string = "";
  for (let i = -25; i <= -1; i++) {
    string += i + " ";
  }
  showResults(
    "Exibir os números de -25 a -1: (-25, -24, -23, …, -2, -1)\n" +
      string +
      "\n"
  );
  return string;
}
kata4();

function kata5() {
  let string = "";
  for (let i = 25; i >= -25; i--) {
    i % 2 === 0 ? true : (string += i + " ");
  }
  showResults(
    "Exibir os números ímpares de 25 a -25: (25, 23, 21, …, -23, -25)\n" +
      string +
      "\n"
  );
}
kata5();

function kata6() {
  let string = "";
  for (let i = 1; i <= 100; i++) {
    i % 3 === 0 ? (string += i + " ") : false;
  }
  showResults(
    "Exibir os números divisíveis por 3 até o 100: (3, 6, 9, …, 96, 99)\n" +
      string +
      "\n"
  );
}
kata6();

function kata7() {
  let string = "";
  for (let i = 1; i <= 100; i++) {
    i % 7 === 0 ? (string += i + " ") : false;
  }
  showResults(
    "Exibir os números divisíveis por 7 até o 100: (7, 14, 21, …, 91, 98)\n" +
      string +
      "\n"
  );
}
kata7();

function kata8() {
  let string = "";
  for (let i = 100; i >= 1; i--) {
    i % 3 === 0 || i % 7 === 0 ? (string += i + " ") : false;
  }
  showResults(
    "Exibir os números divisíveis por 3 e os números divisíveis por 7 regressivamente a partir do 100: (99, 98, 96, 93, 91, …, 14, 12, 9, 7, 6, 3)\n" +
      string +
      "\n"
  );
  return (string = "");
}
kata8();

function kata9() {
  let string = "";
  for (let i = 1; i < 100; i++) {
    i % 5 === 0 && i % 2 !== 0 ? (string += i + " ") : false;
  }
  showResults(
    "Exibir os números ímpares divisíveis por 5 até o 100: (5, 15, 25, …, 85, 95)\n" +
      string +
      "\n"
  );
  return (string = "");
}
kata9();

function kata10() {
  let arr = sampleArray;
  showResults(
    "Exibir os 20 elementos de sampleArray. (469, 755, 244, …, 940, 472)\n" +
      arr +
      "\n"
  );
  return arr;
}
kata10();

function kata11() {
  let novoArr = [];
  for (let i = 0; i < sampleArray.length; i++) {
    sampleArray[i] % 2 === 0 ? novoArr.push(sampleArray[i]) : false;
  }
  showResults(
    "Exibir todos os números pares contidos em sampleArray. (244, 758, 450, …, 940, 472)\n" +
      novoArr +
      "\n"
  );
  return novoArr;
}
kata11();

function kata12() {
  let novoArr = [];
  for (let i = 0; i < sampleArray.length; i++) {
    sampleArray[i] % 2 === 0 ? true : novoArr.push(sampleArray[i]);
  }
  showResults(
    "Exibir todos os números ímpares contidos em sampleArray. (469, 755, 245, …, 179, 535)\n" +
      novoArr +
      "\n"
  );
  return novoArr;
}
kata12();

function kata13() {
  let novoArr = [];
  for (let i = 0; i < sampleArray.length; i++) {
    sampleArray[i] % 8 === 0 ? novoArr.push(sampleArray[i]) : false;
  }
  showResults(
    "Exibir os números divisíveis por 8 em sampleArray: (712, 456, …, 472)\n" +
      novoArr +
      "\n"
  );
  return novoArr;
}
kata13();

function kata14() {
  let novoArr = [];
  for (let i = 0; i < sampleArray.length; i++) {
    novoArr.push(sampleArray[i] ** 2);
  }
  showResults(
    "Exibir o quadrado de cada elemento de sampleArray. (219961, 570025, …, 222784)\n" +
      novoArr +
      "\n"
  );
  return novoArr;
}
kata14();

function kata15() {
  let soma = 0;
  for (let i = 1; i <= 20; i++) {
    soma += i;
  }
  showResults("Exibir a soma de todos os números de 1 a 20.\n" + soma + "\n");
  return soma;
}
kata15();

function kata16() {
  let soma = 0;
  for (let i = 0; i < sampleArray.length; i++) {
    soma += sampleArray[i];
  }
  showResults(
    "Exibir a soma de todos os elementos de sampleArray.\n" + soma + "\n"
  );
  return soma;
}
kata16();

function kata17() {
  let menor = sampleArray[1];
  for (let i = 0; i < sampleArray.length; i++) {
    sampleArray[i] < menor ? (menor = sampleArray[i]) : false;
  }
  showResults("Exibir o menor elemento de sampleArray.\n" + menor + "\n");
  return menor;
}
kata17();

function kata18() {
  let maior = sampleArray[1];
  for (let i = 0; i < sampleArray.length; i++) {
    sampleArray[i] > maior ? (maior = sampleArray[i]) : false;
  }
  showResults("Exibir o maior elemento de sampleArray.\n" + maior + "\n");
  return maior;
}
kata18();

function showResults(valor) {
  console.log(valor);
}
