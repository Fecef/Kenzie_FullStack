// Exercício 1
let ganhador = {
  nome: "Adamastor",
  nascimento: "16/09/1986",
  cpf: "123.321.789-98",
  estadoCivil: "Casado",
};

function oGanhador(nome, cpf) {
  if (nome === ganhador.nome && cpf === ganhador.cpf) {
    return "É ganhador!";
  }
  return "Não é o ganhador.";
}
console.log(oGanhador("Adamastor", "123.321.789-98"));

// Exercício 2
let data = [];

function inseriData(obj) {
  data.push(obj);
  return data;
}
console.log(inseriData(ganhador));
