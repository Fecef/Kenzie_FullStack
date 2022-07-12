const productsCart = [
  {
    id: 1,
    name: "Uva Crimson",
    price: 44.99,
  },
  {
    id: 2,
    name: "Vinho Canção",
    price: 17.98,
  },
  {
    id: 3,
    name: "Água de coco",
    price: 8.99,
  },
  {
    id: 4,
    name: "Mamão",
    price: 9.98,
  },
  {
    id: 5,
    name: "Água tônica",
    price: 17.98,
  },
];

function createElements(obj) {
  // TAG Pai.
  let body = document.querySelector("body");

  // Criando elementos.
  let main = document.createElement("main");
  main.classList.add("main", "container");

  let h1 = document.createElement("h1");
  h1.classList.add("main-title");
  h1.innerText = "Virtual Market";

  let ul = document.createElement("ul");
  ul.classList.add("list");

  let liHeader = document.createElement("li");
  liHeader.classList.add("list-item", "list-header");

  let strongHeader = document.createElement("strong");
  strongHeader.innerText = "Item";

  let spanHeader = document.createElement("span");
  spanHeader.innerText = "Valor";

  let button = document.createElement("button");
  button.classList.add("btn");
  button.type = "submit";
  button.innerText = "Finalizar compra";

  // Construindo HTML.
  body.appendChild(main).append(h1, ul, button);
  ul.appendChild(liHeader).append(strongHeader, spanHeader);

  for (let i = 0; i < obj.length; i++) {
    let li = document.createElement("li");
    li.classList.add("list-item");

    let strong = document.createElement("strong");
    let span = document.createElement("span");

    value = convertPrice(obj[i].price);

    strong.innerText = obj[i].name;
    span.innerText = value;

    // Construindo lista.
    ul.appendChild(li).append(strong, span);
  }

  // Criando li "Total".
  let liFooter = document.createElement("li");
  liFooter.classList.add("list-item");
  liFooter.innerText = "Total";

  let strongFooter = document.createElement("strong");
  let total = soma(obj);
  total = convertPrice(total);
  strongFooter.innerText = total;

  let spanFooter = document.createElement("span");

  // Construindo li "Total".
  ul.appendChild(liFooter).appendChild(spanFooter).appendChild(strongFooter);
}
createElements(productsCart);

function convertPrice(price) {
  price = price.toString().replace(".", ",");
  return `R$ ${price}`;
}

function soma(obj) {
  let total = 0;
  for (let i = 0; i < obj.length; i++) {
    total += obj[i].price;
  }
  return total.toFixed(2);
}
