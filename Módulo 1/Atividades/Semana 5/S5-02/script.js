//Exercício 1
const caixaDeSuprimentos = [];

function comprandoItens(categoria) {
  nome = [];
  nome.push(categoria);
  for (let i = 0; i < 5; i++) {
    nome.push(prompt(`Item ${i + 1}:`));
  }
  caixaDeSuprimentos.push(nome);

  let confirmacao = prompt("Cadastrar nova compra?");
  if (confirmacao === "Sim") {
    categoria = prompt("Categoria:");
    comprandoItens(categoria);
  }
  return nome;
}
comprandoItens("Higiene");