const atletas = ["Rafael", "Manoel", "Daniel"];

function positions(arrayCompetidores) {
  let posicaoDaniel = arrayCompetidores.indexOf("Daniel");
  let posicaoPosterior = posicaoDaniel - 1;
  let aux = "";

  if (posicaoDaniel !== 0) {
    aux = arrayCompetidores[posicaoDaniel];
    arrayCompetidores[posicaoDaniel] = arrayCompetidores[posicaoPosterior];
    arrayCompetidores[posicaoPosterior] = aux;
    return `Este é o pódio:\n 1º - ${arrayCompetidores[0]}\n 2º - ${arrayCompetidores[1]}\n 3º - ${arrayCompetidores[2]}`;
  } else {
    return `Daniel é o vencedor!`;
  }
}
console.log(positions(atletas));
