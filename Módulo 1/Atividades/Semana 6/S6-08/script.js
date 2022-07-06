const pessoa = {
  nome: "clara",
  anoNascimento: 1996,
  nomeDeUsuario: "CLARA_GOMES",
  temCarro: true,
  valeCombustivel: "R$ 0,00",
  distanciaDoTrabalho: "120km",
  endereco: [],
};

// Exercício 1
function getIdade(obj) {
  return console.log(2022 - obj.anoNascimento);
}
getIdade(pessoa);

// Exercício 2
function getNome(obj) {
  obj.nome = obj.nome.replace(
    obj.nome.charAt(0),
    obj.nome.charAt(0).toUpperCase()
  );
  return console.log(obj.nome);
}
getNome(pessoa);

// Exercício 3
function listUsuario(obj) {
  let listaObj = [];
  return listaObj.push(pessoa);
}
listUsuario(pessoa);

// Exercício 4
function haveRight(obj) {
  // valeCombustivel = ( distanciaDoTrabalho * valorDoLitro ) * 0,7
  let kmArr = obj.distanciaDoTrabalho.split("km")
  let km = Number(kmArr[0])
  let calculoVale = (km * 6.99) * 0.7
  let valeMsg = `R$ ${calculoVale.toFixed()},00`;

  if (obj.temCarro) {
    obj.valeCombustivel = valeMsg;
    return obj
  }
}
console.log(haveRight(pessoa));

// Exercício 5
function tipoCasa(obj) {
  return obj.push("casa")
}
console.log(tipoCasa(pessoa.endereco));

// Exercício 6
function setEndereco(endereco, pessoa) {
  endereco.push("Rua Inês de Araújo")
  return pessoa
}
console.log(setEndereco(pessoa.endereco, pessoa))