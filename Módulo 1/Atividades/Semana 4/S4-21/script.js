// Exercício 1
function funcaoContaPasso(passos) {
  let i = 1;
  passos < 0 ? console.log("Eliminado") : false;
  while (i <= passos) {
    console.log(`Visitei a ${i}ª casa.`);
    i++;
  }
}

// Exercício 2
function voltarInicio(casaAtual) {
  casaAtual > 0 && casaAtual !== 1 ? true : console.log("valor inválido");

  let i = casaAtual;

  while (i >= 1) {
    console.log(i);
    i--;
  }
}
