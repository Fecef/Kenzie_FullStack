let listFrutas = ["HTML", "CSS", "Javascript", "REACT"];
let ul = document.getElementsByClassName("list-itens")[0];

function createElementeItens() {
  for (let i = 0; i < listFrutas.length; i++) {
    let li = document.createElement("li");
    li.innerText = listFrutas[i];
    ul.appendChild(li);
  }
}
createElementeItens();
