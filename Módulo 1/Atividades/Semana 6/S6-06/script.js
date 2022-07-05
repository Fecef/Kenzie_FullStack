let listFigure = [];
let listPainting = [];

function ActionItem(imagem, nome, valor) {
  return {
    imagem,
    nome,
    valor,
  };
}

function PaintingItem(imagem, nome, valor) {
  return {
    imagem,
    nome,
    valor,
  };
}

const paint = PaintingItem("Quadro1", "A Volta do Parafuso", 500);
const action = ActionItem("Dragon Ball", "Goku", 150);

listFigure.push(action);
listPainting.push(paint)
