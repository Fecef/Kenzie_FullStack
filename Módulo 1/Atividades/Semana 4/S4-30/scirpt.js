function verificarDesconto() {
  let idade = parseInt(prompt("Informe a idade: "));

  if (idade >= 18) {
    return alert("O valor do almoço deve ser 20 reais.");
  } else if (idade >= 7 && idade <= 17) {
    return alert("O valor do almoço deve ser 10 reais.");
  } else {
    return alert("Almoço grátis.");
  }
}
