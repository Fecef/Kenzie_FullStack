import { dataBase } from "./livraria.js";

function trabalhoEmDobro() {
  const uniqueBooks = [];
  const filteredBooks = dataBase.filter((book) => {
    const isDuplicate = uniqueBooks.includes(book.title);
    if (!isDuplicate) {
      uniqueBooks.push(book.title);
      return true;
    }
    return false;
  });
  return filteredBooks;
}
trabalhoEmDobro();

function zerosNoFim() {
  const catalogo = trabalhoEmDobro();

  const hasInventory = catalogo.filter((book) => {
    return book.inventory > 0;
  });
  const hasNoInventory = catalogo.filter((book) => {
    return book.inventory === 0;
  });

  const novoCatalogo = hasInventory.concat(hasNoInventory);

  return novoCatalogo;
}
zerosNoFim();

function topLivros() {
  const bestSellers = [
    "As Crônicas de Gelo e Fogo, de George R. R. Martin",
    "Admirável Mundo Novo, Aldous Huxley, 1932",
    "O Senhor dos Anéis, de J.R.R. Tolkien",
  ];
  const catalogo = zerosNoFim();
  const novoCatalogo = [];

  bestSellers.forEach((title) => {
    const bestBook = catalogo.find((book) => {
      return title === book.title;
    });
    novoCatalogo.push(bestBook);
  });

  return novoCatalogo;
}
topLivros();

function domLivraria() {
  const catalogo = zerosNoFim();
  const container = document.querySelector("ul");

  catalogo.forEach((book) => {
    const li = document.createElement("li");
    li.innerText = book.title;
    container.appendChild(li); //método de array .title;
  });
}
domLivraria();
