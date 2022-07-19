const cardWrapper = document.querySelector(".card-wrapper");
const shoppingCart = document.querySelector(".shopping-cart");
const shoppingCartContent = document.querySelector(".shopping-cart-content");
const shoppingCartDefault = document.querySelector(".shopping-cart-default");
const shoppingCartFooter = document.querySelector(".shopping-cart-footer");
const navbar = document.querySelector(".header-content-navbar");
const warning = document.querySelector(".warning ");
const search = document.querySelector(".search-bar button");
const searchInput = document.querySelector(".search-bar input");
const shoppingCartTable = document.querySelector(".shopping-cart-footer");

let quantity = 0;
let total = 0;

// ------------------------------------------------------
// Listando produtos no card-wrapper.
// ------------------------------------------------------
function listProductCards(list) {
  cardWrapper.innerHTML = "";

  list.length === 0
    ? warning.classList.remove("hidden")
    : warning.classList.add("hidden");

  for (let i = 0; i < list.length; i++) {
    cardWrapper.insertAdjacentHTML(
      "afterbegin",
      `
        <li id="${list[i].id}" class="card">
            <div class="card-background-img">
                <img src="${list[i].img}" alt="${list[i].nameItem}">
            </div>
            <div class="card-description">
                <p class="card-description__category">${list[i].tag[0]}</p>
                <h2 class="card-description__title">${list[i].nameItem}</h2>
                <p class="card-description__detail">${list[i].description}</p>
                <p class="card-description__price">${valueToString(
                  list[i].value
                )}</p>
                <button class="card-description__btn">${
                  list[i].addCart
                }</button>
            </div>
        </li>
      `
    );
  }
  cardWrapper.classList.remove("fade-in");
}

// ------------------------------------------------------
// Converter value em string.
// ------------------------------------------------------
function valueToString(value) {
  const price = `R$ ${value.toFixed(2).replace(".", ",")}`;
  return price;
}

// ------------------------------------------------------
// Adicionando produtos ao carrinho de compras.
// ------------------------------------------------------
function addProductButton(list) {
  cardWrapper.addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
      const cardId = event.target.parentElement.parentElement.id;
      const product = returnProduct(list, cardId);

      shoppingCartDefault.classList.add("hidden");
      shoppingCartDefault.classList.add("dropdown-shopping-cart");
      shoppingCart.classList.add("dropdown-shopping-cart");
      addToCart(product);

      setTimeout(() => {
        shoppingCartContent.firstElementChild.classList.remove("cart-effect");
        shoppingCartTable.classList.add("dropdown-table");
      }, 50);

      quantity++;
      total += product.value;
      buildCartFooter(quantity, valueToString(total));
    }
  });
}

function returnProduct(list, id) {
  for (let i = 0; i < list.length; i++) {
    if (list[i].id === Number(id)) {
      return list[i];
    }
  }
}

function addToCart(product) {
  return shoppingCartContent.insertAdjacentHTML(
    "afterbegin",
    `
      <li id="${product.id}" class="shopping-cart-content-card cart-effect">
        <img src="${product.img}" alt="${product.nameItem}">
        <div class="shopping-cart-content-card-details">
          <p class="shopping-cart-content-card-details__title">${
            product.nameItem
          }</p>
          <p class="shopping-cart-content-card-details__price">${valueToString(
            product.value
          )}</p>
          <button class="shopping-cart-content-card-details__btn">Remover produto</button>
        </div>
      </li>
    `
  );
}

function buildCartFooter(quantity, total) {
  shoppingCartFooter.innerHTML = "";
  return shoppingCartFooter.insertAdjacentHTML(
    "afterbegin",
    `
      <tr>
        <th>Quantidade:</th>
        <td>${quantity}</td>
      </tr>
      <tr>
        <th>Total:</th>
        <td>${total}</td>
      </tr>
    `
  );
}

// ------------------------------------------------------
// Removendo produtos do carrinho de compras.
// ------------------------------------------------------
function removeProductFromCart() {
  shoppingCartContent.addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
      const card = event.target.parentElement.parentElement;
      const product = returnProduct(data, card.id);
      card.classList.add("cart-effect");

      setTimeout(() => {
        card.remove();
        if (shoppingCartContent.childElementCount <= 0) {
          shoppingCartDefault.classList.remove("hidden");

          setTimeout(() => {
            shoppingCart.classList.remove("dropdown-shopping-cart");
            shoppingCartDefault.classList.remove("dropdown-shopping-cart");
            shoppingCartTable.classList.remove("dropdown-table");
          }, 50);
        }
      }, 200);

      quantity--;
      total -= product.value;
      buildCartFooter(quantity, valueToString(total));
    }
  });
}

// ------------------------------------------------------
// Filtrar produtos por categoria.
// ------------------------------------------------------
function getCategory() {
  navbar.addEventListener("click", function (event) {
    const category = event.target.innerText;
    cardWrapper.classList.add("fade-in");

    setTimeout(() => {
      return categoryFilter(category);
    }, 300);
  });
}

function categoryFilter(category) {
  if (category === "Todos") {
    return listProductCards(data);
  }
  const dataFiltered = data.filter((product) => product.tag[0] === category);
  return listProductCards(dataFiltered);
}

// ------------------------------------------------------
// Pesquisar produtos pelo nome.
// ------------------------------------------------------
function searchProduct() {
  search.addEventListener("click", function (event) {
    event.preventDefault();

    const dataFiltered = data.filter((product) =>
      normalizeSearch(product.nameItem).includes(
        normalizeSearch(searchInput.value)
      )
    );
    cardWrapper.classList.add("fade-in");

    setTimeout(() => {
      return listProductCards(dataFiltered);
    }, 300);
  });
}

function normalizeSearch(str) {
  return str
    .trim()
    .toLowerCase()
    .replace(/\s/g, "")
    .replace(/[áââà]/g, "a")
    .replace(/[éêà]/g, "e")
    .replace(/[íîì]/g, "i")
    .replace(/[óõôò]/g, "o")
    .replace(/[úûì]/g, "u");
}

// --------------------------
// Chamadas
// ---------------------------
listProductCards(data);
addProductButton(data);
removeProductFromCart();
getCategory();
searchProduct();
