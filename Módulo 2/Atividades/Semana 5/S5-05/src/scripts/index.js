import { ApiRequests } from "./app.js";

class Render {
  static async banner() {
    const news = await ApiRequests.getNews();
    const lastNews = news[news.length - 1];
    const ul = document.querySelector("#newsBanner");
    ul.insertAdjacentHTML(
      "afterbegin",
      `
        <li class="banner">
            <img src="${lastNews.imagem}" alt="${lastNews.categoria}">
            <div class="container">
                <p class="categoryBtn">${lastNews.categoria}</p>
                <a href="#">${lastNews.titulo}</a>
                <p>${lastNews.resumo}</p>
                <small>Fonte: ${lastNews.fonte}</small>
            </div>
        </li>
              `
    );
  }

  static async newsList() {
    const news = await ApiRequests.getNews();
    const ul = document.querySelector("#newsList");
    news.forEach((ele) => {
      ul.insertAdjacentHTML(
        "afterbegin",
        `
            <li class="newsCard">
                <img src="${ele.imagem}" alt="">
                <div>
                    <p class="categoryBtn">${ele.categoria}</p>
                    <a href="#">${ele.titulo}</a>
                    <p>${ele.resumo}</p>
                    <small>Fonte: ${ele.fonte}</small>
                </div>
            </li>
              `
      );
    });
  }
}

Render.banner();
Render.newsList();
