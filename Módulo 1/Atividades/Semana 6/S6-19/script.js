const PaintingItems = [];
const ActionItems = [];

//New Panting.
function newPaintingItem(imagem, nome, valor) {
  imagem = `assets/img/painting/${imagem}.jpg`;
  let newPI = {
    imagem,
    nome,
    valor,
  };
  return PaintingItems.push(newPI);
}

//New Action.
function newActionItem(imagem, nome, valor) {
  imagem = `assets/img/actions/${imagem}.jpg`;
  let newAI = {
    imagem,
    nome,
    valor,
  };
  return ActionItems.push(newAI);
}

// Adicionando items ao HTML.
function addItemsToMenu(section) {
  // Chamando a TAG Pai.
  let tagPai = definirTagPai(section);

  for (let i = 0; i < section.length; i++) {
    // Construindo TAG's.
    let li = document.createElement("li");

    let a = document.createElement("a");
    a.classList.add("card");
    a.href = "#";

    let img = document.createElement("img");
    img.classList.add("card__img");
    img.src = section[i].imagem;
    img.alt = section[i].nome;

    let p = document.createElement("p");
    p.classList.add("card__title");
    p.innerText = section[i].nome;

    let span = document.createElement("span");
    span.classList.add("card__price");
    span.innerText = `R$ ${section[i].valor},00`;

    // Montando Card.
    tagPai.appendChild(li);
    li.appendChild(a);
    a.append(img, p, span);
  }
}

function definirTagPai(section) {
  let tagPai = document.getElementsByClassName("card-wrapper");

  switch (section) {
    case PaintingItems:
      return tagPai[0];

    case ActionItems:
      return tagPai[1];
  }
}

// Populando lista.
newPaintingItem("clock", "Clock", 400);
newPaintingItem("gamepad", "Gamepad", 300);
newPaintingItem("personagem", "C-3PO", 320);
newActionItem("animewoman", "Anime Woman", 450);
newActionItem("dragonballpersonagem", "Goku", 500);
newActionItem("starwarspersonagem", "Mestre Yoda", 400);

// Adicionando lista ao HTML.
addItemsToMenu(ActionItems);
addItemsToMenu(PaintingItems);
