const products = [
  {
    title: "Uva Crimson",
    price: 8.99,
    category: "Frutas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Banana",
    price: 5.69,
    category: "Frutas",
    image: "./img/products/product_2.svg",
    imageDescription: "",
  },
  {
    title: "Mamão",
    price: 4.99,
    category: "Frutas",
    image: "./img/products/product_3.svg",
    imageDescription: "",
  },
  {
    title: "Maçã",
    price: 9.2,
    category: "Frutas",
    image: "./img/products/product_4.svg",
    imageDescription: "",
  },
  {
    title: "Refrigerante",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Vinho",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_6.svg",
    imageDescription: "",
  },
  {
    title: "Água Tônica",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Água de coco",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_8.svg",
    imageDescription: "",
  },

  {
    title: "Sabonete",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_9.svg",
    imageDescription: "",
  },

  {
    title: "Detergente",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_10.svg",
    imageDescription: "",
  },

  {
    title: "Limpa superfícies",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_11.svg",
    imageDescription: "",
  },

  {
    title: "Lustra Móveis",
    price: 8.99,
    category: "Higiene",
    image: undefined,
    imageDescription: "",
  },
];

// Chamando elementos PAI pela classe.
const fruits = document.querySelector(".fruits");
const drinks = document.querySelector(".drinks");
const hygiene = document.querySelector(".hygiene");

// Cria a estrutura HTML a partir da TAG <li>
function createHtmlProductList(index) {
  const li = document.createElement("li");
  li.classList.add("product");
  li.innerHTML = `
    <img
      src="${products[index].image}"
      alt="${products[index].title}"
      title="${products[index].title}"
      class="product-img"
    />
    <main class="product-main">
      <h1 class="product-title">${products[index].title}</h1>
      <h5 class="product-category">${products[index].category}</h5>
      <strong class="product-price">${products[index].price}</strong>
    </main>
    `;
  return li;
}

// Retorna a seção do produto.
function getProductSection(section) {
  switch (section) {
    case "Frutas":
      return fruits;
    case "Bebidas":
      return drinks;
    case "Higiene":
      return hygiene;
  }
}

// Inclui a lista no corpo do HTML.
function addProductListToHtml(section) {
  const ul = document.createElement("ul");

  getProductSection(section).appendChild(ul);

  for (let i = 0; i < products.length; i++) {
    if (products[i].image == undefined) {
      products[i].image = "./img/products/no-img.svg";
    }

    if (products[i].category === section) {
      const list = createHtmlProductList(i);
      ul.appendChild(list);
    }
  }
}
addProductListToHtml("Higiene");
addProductListToHtml("Bebidas");
addProductListToHtml("Frutas");
