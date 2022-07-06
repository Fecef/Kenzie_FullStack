function calculateSalary(salario, vendas) {
  if (vendas <= 1200) {
    salario += vendas * 0.03;
    return salario;
  }
  salario += (vendas - 1200) * 0.05 + 36;
  return salario;
}
console.log(calculateSalary(1300, 1600));

function cashMachine(saque, salario, vendas) {
  let salarioTotal = calculateSalary(salario, vendas);
  let qtdeNotas = 0;
  let nota = 0;
  let msg = "";
  let saqueTotal = saque;

  if (saque >= 200) {
    nota = 200;
    qtdeNotas = saque / nota;
    saque -= Math.floor(qtdeNotas) * nota;
    msg += `Notas Sacadas: ${Math.floor(
      qtdeNotas
    )} nota(s) de ${nota} reais.\n`;
  }
  if (saque >= 100) {
    nota = 100;
    qtdeNotas = saque / nota;
    saque -= Math.floor(qtdeNotas) * nota;
    msg += `Notas Sacadas: ${Math.floor(
      qtdeNotas
    )} nota(s) de ${nota} reais.\n`;
  }
  if (saque >= 50) {
    nota = 50;
    qtdeNotas = saque / nota;
    saque -= Math.floor(qtdeNotas) * nota;
    msg += `Notas Sacadas: ${Math.floor(
      qtdeNotas
    )} nota(s) de ${nota} reais.\n`;
  }
  if (saque >= 20) {
    nota = 20;
    qtdeNotas = saque / nota;
    saque -= Math.floor(qtdeNotas) * nota;
    msg += `Notas Sacadas: ${Math.floor(
      qtdeNotas
    )} nota(s) de ${nota} reais.\n`;
  }
  if (saque >= 10) {
    nota = 10;
    qtdeNotas = saque / nota;
    saque -= Math.floor(qtdeNotas) * nota;
    msg += `Notas Sacadas: ${Math.floor(
      qtdeNotas
    )} nota(s) de ${nota} reais.\n`;
  }
  if (saque >= 5) {
    nota = 5;
    qtdeNotas = saque / nota;
    saque -= Math.floor(qtdeNotas) * nota;
    msg += `Notas Sacadas: ${Math.floor(
      qtdeNotas
    )} nota(s) de ${nota} reais.\n`;
  }
  if (saque >= 2) {
    nota = 2;
    qtdeNotas = saque / nota;
    saque -= Math.floor(qtdeNotas) * nota;
    msg += `Notas Sacadas: ${Math.floor(
      qtdeNotas
    )} nota(s) de ${nota} reais.\n`;
  }

  return msg + `Saldo Atual: R$${salarioTotal - saqueTotal},00`;
}
console.log(cashMachine(1350, 1300, 1600));

function calculateStock(estoque, estoqueMax, estoqueMin) {
  let media = (estoqueMax + estoqueMin) / 2;
  return estoque >= media ? "Não efetuar compra" : "Efetuar compra";
}
console.log(calculateStock(50, 300, 10));

function calculateAge(dtNascimento, anoAtual) {
  let idade = anoAtual - dtNascimento;
  let idadeMeses = idade * 12;
  let idadeSemanas = idadeMeses * 4;
  let idadeDias = idadeSemanas * 7;
  return `Idade em anos: ${idade} anos.\nIdade em meses: ${idadeMeses} meses.\nIdade em dias: ${idadeDias} dias.\nidade em semanas: ${idadeSemanas} semanas`;
}
console.log(calculateAge(1992, 2022));

const matrizQuadrada3x3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function getDiagonal(matriz) {
  let vetor = [];
  for (let i = 0; i < matriz.length; i++) {
    for (let j = i; j < matriz[i].length; j++) {
      vetor.push(matriz[i][j]);
      break;
    }
  }
  return vetor;
}
console.log(getDiagonal(matrizQuadrada3x3));
