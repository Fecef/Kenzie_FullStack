cardWrapper(produtos);
getCategory(produtos);
getInputValue(produtos);

//------------------------
// CardWrapper
//------------------------
function cardWrapper(productList) {
  clearCardWrapper();
  listCard(productList);
  setTotalPrice(productList);
}

function clearCardWrapper() {
  const ul = document.querySelector("ul");
  ul.innerHTML = "";
}

function listCard(productList) {
  productList.forEach((product) => {
    buildCard(product);
  });
}

function buildCard(product) {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  const img = document.createElement("img");
  const h3 = document.createElement("h3");
  const span = document.createElement("span");
  const p = document.createElement("p");

  img.alt = `Imagem ${product.nome}`;
  img.src = product.img;
  h3.innerText = product.nome;
  span.innerText = product.secao;
  p.innerText = `R$ ${product.preco},00`;

  const card = ul.appendChild(li).append(img, h3, span, p);

  return card;
}

//------------------------
// Busca por nome.
//------------------------
function findProduct(productName, productList) {
  if (productName === "") {
    return cardWrapper(produtos);
  }

  const product = productList.filter((product) => {
    const input = normalizer(productName);
    const name = normalizer(product.nome);
    if (name.includes(input)) {
      return product;
    }
  });
  cardWrapper(product);
}

function getInputValue(productList) {
  const btn = document.querySelector(".estiloGeralBotoes--botaoBuscaPorNome");
  const input = document.querySelector(".campoBuscaPorNome");

  btn.addEventListener("click", () => {
    const productName = input.value;
    findProduct(productName, productList);
  });
}

function normalizer(input) {
  return input
    .toLowerCase()
    .trim()
    .replaceAll(" ", "")
    .replaceAll("-", "")
    .replaceAll("-", "")
    .replaceAll(/[áâãà]/g, "a")
    .replaceAll(/[éêè]/g, "e")
    .replaceAll(/[íîì]/g, "i")
    .replaceAll(/[óôõò]/g, "o")
    .replaceAll(/[úûù]/g, "u");
}

//------------------------
// Filtro por seção.
//------------------------
function filterByCategory(category, productList) {
  if (category === "Todos Produtos") {
    return cardWrapper(productList);
  }
  const filteredList = productList.filter((product) => {
    return product.secao === category;
  });
  cardWrapper(filteredList);
}

function getCategory(productList) {
  const categoryButton = document.querySelector("#botoesContainer");
  categoryButton.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
      const category = event.target.innerText;
      filterByCategory(category, productList);
    }
  });
}

//------------
// Valor Total
//------------------------
function setTotalPrice(productList) {
  const span = document.querySelector("#total");
  const total = getTotalPrice(productList);
  span.innerText = `R$ ${total}`;
}

function getTotalPrice(productList) {
  const result = productList.reduce((acc, product) => acc + product.preco, 0);
  const total = result.toFixed(2).replace(".", ",");
  return total;
}
