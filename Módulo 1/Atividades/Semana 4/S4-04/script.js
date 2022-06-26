// Exercício 1
function soma(valor1, valor2) {
    return valor1 + valor2;
}

console.log(soma(15, 876));

// Exercício 2
function tipoVariavel(variavel) {
    return typeof (variavel);
}

console.log(tipoVariavel(true));

// Exercício 3
function somarNotas(nota1, nota2, nota3, nota4) {

    if (typeof nota1 !== "number" || typeof nota2 !== "number" || typeof nota3 !== "number" || typeof nota4 !== "number") {

        return "A função só pode receber números."
    }

    return nota1 + nota2 + nota3 + nota4;
}

console.log(somarNotas(8, '6', 9, 3));

