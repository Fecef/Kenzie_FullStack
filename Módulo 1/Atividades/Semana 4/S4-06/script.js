// Exercício 1
function areYouPlayingBanjo(nome) {

    nome = prompt("Are you playing banjo?");

    if (nome.substr(0, 1) === "r" || nome.substr(0, 1) === "R") {
        return console.log((nome + " is playing banjo"));
    }

    return console.log((nome + " doest not play banjo"));
}

// Exercício 2
function makingSixToast(torradas) {

    if (torradas > 6) {

        return alert("Execedeu a capacidade máxima. Retornando " + (torradas - 6) + " torradas.");

    } else if (torradas < 6) {
        return alert("Torradas insuficientes. Adicoine mais " + (6 - torradas) + " torradas.")
    }

    return alert("Torradas quentinhas!");
}

// Exercício 3
function howOldWillIBeIn2099(anoNascimento, anoFinal) {
    let idade = anoFinal - anoNascimento;

    if (anoNascimento > anoFinal) {
        return alert("Você irá nascer em " + (anoNascimento - anoFinal) + " anos.");

    } else if (anoNascimento === anoFinal) {
        return alert("Parabéns!! Você acabou de nascer!");
    }

    return alert("Idade: " + idade);
}