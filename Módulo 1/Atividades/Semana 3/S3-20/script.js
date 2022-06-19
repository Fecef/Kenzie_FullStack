// Exercício 1
let salarioMinimo = parseInt(prompt("Salário mínimo: "));
let quilowatts = parseInt(prompt("Quilowatts gasto: "));

let precoQuilowatt = (salarioMinimo / 7) / 100;
let valorASerPago = quilowatts * precoQuilowatt;
let valorASerPagoComDesconto = valorASerPago * 0.9;

alert("Preco do Quilowatt: R$" + precoQuilowatt.toFixed(2));
alert("Valor a ser pago: R$" + valorASerPago.toFixed(2));
alert("Valor a ser pago com 10% de desconto: R$" + valorASerPagoComDesconto.toFixed(2));

// Exercício 2
let produto = parseInt(prompt("Valor do produto:"));
let produtoDesconto = produto * 0.91;

alert("Valor final: R$" + produtoDesconto.toFixed(2));

// Exercício 3
let a = prompt("Valor \"A\":");
let b = prompt("Valor \"B\":");
let aux = "";

aux = a;
a = b;
b = aux;

alert(`Frase trocada: ${a} ${b}`);

// Exercício 4
let qtdeFitas = parseInt(prompt("Quantas fitas:"));
let valorLocacao = parseInt(prompt("Valor do aluguel:"));

const qtdeFitasMes = qtdeFitas / 3;
const qtdeFitasMesAtrasadas = qtdeFitasMes / 10;
const fitasEstragadas = qtdeFitas * 0.02;

const faturamentoAnual = qtdeFitasMes * 12;
const ganhoMensalComMulta = (qtdeFitasMesAtrasadas * valorLocacao) * 0.1;
const qtdeReposicao = fitasEstragadas / 10;

alert("Faturamento Anual: R$" + faturamentoAnual);
alert("Valor ganho com multas por mês: R$" + ganhoMensalComMulta);
alert("Quantidade de fitas repostas anualmente: " + qtdeReposicao);

// Exercício 5
let contaCorrente = parseInt(prompt("Digite sua conta:"));

// Separando dígitos.
let unidade = Math.trunc(235 % 10);
let dezena = Math.trunc((235 % 100) / 10);
let centena = Math.trunc(235 / 100);

// Reunindo dígitos.
let contaCorrenteInvertida = unidade * 100 + dezena * 10 + centena;

// Somando digitos (normal + invertido).
let soma = contaCorrente + contaCorrenteInvertida;

// Separando dígitos da soma.
let unidadeSoma = Math.trunc(soma % 10);
let dezenaSoma = Math.trunc((soma % 100) / 10);
let centenaSoma = Math.trunc(soma / 100);

// Multiplicando cada dígito pela sua ordem posicional.
let multiplicar = centenaSoma * 1 + dezenaSoma * 2 + unidadeSoma * 3;

// Separando dígitos da multiplicação.
let unidadeMultiplicacao = multiplicar % 10;
let dezenaMultiplicacao = (multiplicar % 100) / 10;

// Imprimindo código verificador em tela.
alert("O dígito verificador é: " + unidadeMultiplicacao);