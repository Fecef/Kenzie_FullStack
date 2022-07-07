let listFigure = [];
let listPainting = [];
let secaoListFigure = document.getElementsByClassName("card-wrapper");

function ActionItem(imagem, nome, valor) {
  let action = {
    imagem,
    nome,
    valor,
  };
  listFigure.push(action);
}
ActionItem("Dragon Ball", "Goku", 150);

function PaintingItem(imagem, nome, valor) {
  let painting = {
    imagem,
    nome,
    valor,
  };
  listPainting.push(painting);
}
PaintingItem("Quadro1", "A Volta do Parafuso", 500);
