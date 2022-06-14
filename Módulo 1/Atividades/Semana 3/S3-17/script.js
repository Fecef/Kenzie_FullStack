// Exercício 1
let usuarioAutenticado = true;

if (usuarioAutenticado = true) {
    console.log("Seja Bem vindo");
}

// Exercício 2
let usuario = "Ana";
let autenticado = false;

if (usuario == "Ana" && autenticado == true) {
    console.log(`Olá ${usuario} voce está autenticado.`);
}

// Exercício 3
let produto = "maçã";
let quantidadeDoProdto = 2;
let quantidadeDoProdtoParaPromocao = 5 - quantidadeDoProdto;

if (produto == "maçã" && quantidadeDoProdto >= 5) {
    console.log("Voce recebeu uma promoção, o valor do produto será R$5,00");
} else {
    console.log(`Se você adicionar mais ${quantidadeDoProdtoParaPromocao}, o valor sairá por R$5,00.`);
}