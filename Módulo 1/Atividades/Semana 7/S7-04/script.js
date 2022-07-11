let produto = {
  nome: "Notebook",
  valor: 3000.0,
  liquidacao: true,
  distribuidor: "lojadakenzie.com.br",
};
// li renderiza
// span descrição
// produto.distribuior em <a>
// se produto.liquidacao === true, não redirecionar
// onClick produto.liquidicao, produto.liquidacao.innnerText = valor * 0.3 - valor;

let element = document.getElementsByClassName("container")[0];
let elementInformado = document.getElementsByClassName("informacao")[0];

element.addEventListener("click", function (e) {
  let elementCapture = e.target.className;

  if (elementCapture == "aqui_dispara") {
    if (elementInformado.children.length === 0) {
      elementInformado.innerHTML = "Sou um toggle";
    } else {
      elementInformado.innerHTML = "";
    }
  }
});
