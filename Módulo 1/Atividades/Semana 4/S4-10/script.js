// Exercício 1
function ganhador(posicao, livro) {
  let cliente = ["José", "Maria", "João", "Pedro", "Paulo"];
  let carrinhoDeCompras = [
    "Funko Pop Kakashi",
    "Dragon Ball Collection",
    "Vou ser Dev",
  ];

  posicao = cliente[posicao];

  for (let i = 0; i < carrinhoDeCompras.length; i++) {
    if (livro != carrinhoDeCompras[i]) {
      return false;
    }

    alert(
      `Parabéns ${posicao}!! O livro ${livro} foi encontrado e você foi o ganahador!`
    );
    break;
  }
}

// Exercício 2
function qualTipoDeElemento(posicao) {
  let tiposDiversos = [1.5, "String", true, 10];

  posicao = tiposDiversos[posicao];

  if (typeof posicao !== "number") {
    return "Not a number.";
  }

  return "A number!";
}

// Exercício 3
function poltronaPremiada(nome1, nome2, nome3) {
  let passageiro = [nome1, nome2, nome3];
  let poltrona = [1, 2, 3];
  let poltronaPremiada = Math.floor(Math.random() * 3 + 1);

  for (let i = 0; i < passageiro.length; i++) {
    if (poltrona[i] == poltronaPremiada) {
      alert(`${passageiro[i]} é o novo ganhador!`);
      break;
    }
  }
}
