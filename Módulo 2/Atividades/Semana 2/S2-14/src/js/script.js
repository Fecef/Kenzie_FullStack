const cartArr = [];

cardWrapper(produtos);
getCategory(produtos);
getInputValue(produtos);
getFoodId(produtos);
removeFromCart();

//------------------------
// CardWrapper
//------------------------
function cardWrapper(foodArr) {
  clearCardWrapper();
  listCard(foodArr);
}

function clearCardWrapper() {
  const ul = document.querySelector("ul");
  ul.innerHTML = "";
}

function listCard(foodArr) {
  foodArr.forEach((food) => {
    buildCard(food);
  });
}

function buildCard(food) {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  const img = document.createElement("img");
  const h3 = document.createElement("h3");
  const span = document.createElement("span");
  const ol = listVitamins(food);
  const button = document.createElement("button");
  const p = document.createElement("p");

  li.id = food.id;
  img.alt = `Imagem ${food.nome}`;
  img.src = food.img;
  h3.innerText = food.nome;
  span.innerText = food.secao;
  button.innerText = "Comprar";
  p.innerText = `R$ ${food.preco.replace(".", ",")}`;

  const card = ul.appendChild(li).append(img, h3, span, ol, button, p);

  return card;
}

function listVitamins(food) {
  const ol = document.createElement("ol");
  food.componentes.forEach((vitamin) => {
    const li = document.createElement("li");
    li.innerText = vitamin;
    ol.append(li);
  });
  return ol;
}
//------------------------
// Busca por nome.
//------------------------
function findfood(search, foodArr) {
  const input = normalizer(search);

  const result = foodArr.filter((food) => {
    const nome = normalizer(food.nome);
    const secao = normalizer(food.secao);
    const categoria = normalizer(food.categoria);

    if (nome.includes(input)) {
      return food;
    } else if (secao.includes(input)) {
      return food;
    } else if (categoria.includes(input)) {
      return food;
    }
  });
  cardWrapper(result);
}

function getInputValue(foodArr) {
  const btn = document.querySelector(".estiloGeralBotoes--botaoBuscaPorNome");
  const input = document.querySelector(".campoBuscaPorNome");

  btn.addEventListener("click", () => {
    const search = input.value;
    return search === "" ? cardWrapper(produtos) : findfood(search, foodArr);
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
function filterByCategory(category, foodArr) {
  if (category === "Todos Produtos") {
    return cardWrapper(foodArr);
  }
  const filteredList = foodArr.filter((food) => {
    return food.secao === category;
  });
  cardWrapper(filteredList);
}

function getCategory(foodArr) {
  const categoryButton = document.querySelector("#botoesContainer");
  categoryButton.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
      const category = event.target.innerText;
      filterByCategory(category, foodArr);
    }
  });
}

//------------------------
// Adicionar ao carrinho.
//------------------------
function getFoodId(foodArr) {
  const ul = document.querySelector(".mainList");
  ul.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
      const id = event.target.parentElement.id;
      return getFood(+id, foodArr);
    }
  });
}

function getFood(id, foodArr) {
  const food = foodArr.find((element) => {
    return element.id === id;
  });
  cartArr.unshift(food);
  addFoodToCart(cartArr);
}

function addFoodToCart(foodArr) {
  const ul = document.querySelector(".carrinhoCompras-Wrapper-list");
  const emptyCart = document.querySelector(".emptyCart");
  const footer = document.querySelector(".carrinhoCompras-footer table");

  ul.innerHTML = "";

  foodArr.forEach((food) => {
    ul.insertAdjacentHTML(
      "beforeend",
      `
      <li id="${food.id}" class="carrinhoCompras-Wrapper-Card">
        <img src="${food.img}" alt="${food.nome}">
        <img src="src/img/icons/trash.svg" alt="trash">
        <div>
          <h3>${food.nome}</h3>
          <span>${food.secao}</span>
          <p>R$ ${food.preco.replace(".", ",")}</p>
        </div>
      </li>
      `
    );
  });
  setTotalCartItems();
  setTotalCartPrice();

  if (setTotalCartItems() > 0) {
    emptyCart.classList.add("hidden");
    footer.classList.remove("hidden-table");
  } else {
    emptyCart.classList.remove("hidden");
    footer.classList.add("hidden-table");
  }

  return ul;
}

//------------------------
// Adicionar preço e quantidade.
//------------------------
function setTotalCartItems() {
  const qtde = document.querySelector("#quantidade");
  qtde.innerText = cartArr.length;
  return cartArr.length;
}

function setTotalCartPrice() {
  const total = document.querySelector("#total");
  const result = cartArr.reduce((acc, food) => acc + +food.preco, 0);
  total.innerText = `R$ ${result.toFixed(2).replace(".", ",")}`;
}

//------------------------
// Remover do carrinho.
//------------------------
function removeFromCart() {
  const ul = document.querySelector(".carrinhoCompras-Wrapper-list");

  ul.addEventListener("click", (event) => {
    if (event.target.alt === "trash") {
      const foodList = ul.children;
      const parent = event.target.parentElement;

      for (let i = 0; i < foodList.length; i++) {
        if (foodList[i] == parent) {
          cartArr.splice(i, 1);
          addFoodToCart(cartArr);
        }
      }
    }
  });
}
