let precoRefrigerante = parseFloat(prompt("Digite o valor do refrigerante:"))
let quantidadeRefrigerante = parseInt(prompt("Digite a quantidade de itens:"))
const refrigerante = precoRefrigerante * quantidadeRefrigerante;

let precoMacarrao = parseFloat(prompt("Digite o valor do macarrão:"))
let quantidadeMacarrao = parseInt(prompt("Digite a quantidade de itens:"))
const macarrao = precoMacarrao * quantidadeMacarrao;

let precoErvilha = parseFloat(prompt("Digite o valor do macarrão:"))
let quantidadeErvilha = parseInt(prompt("Digite a quantidade de itens:"))
const ervilha = precoErvilha * quantidadeErvilha;

let precoArroz = parseFloat(prompt("Digite o valor do arroz:"))
let quantidadeArroz = parseInt(prompt("Digite a quantidade de itens:"))
const arroz = precoArroz * quantidadeArroz;

let precoFeijao = parseFloat(prompt("Digite o valor do feijão:"))
let quantidadeFeijao = parseInt(prompt("Digite a quantidade de itens:"))
const feijao = precoFeijao * quantidadeFeijao;

let precoVinho = parseFloat(prompt("Digite o valor do vinho:"))
let quantidadeVinho = parseInt(prompt("Digite a quantidade de itens:"))
const vinho = precoVinho * quantidadeVinho;

let total = refrigerante + macarrao + ervilha + arroz + feijao + vinho;

if (total % 2 == 0) {
    alert(`Valor total a ser pago: R$ ${total - vinho}`);
} else {
    alert(`Valor total a ser pago: R$ ${total}`);
}