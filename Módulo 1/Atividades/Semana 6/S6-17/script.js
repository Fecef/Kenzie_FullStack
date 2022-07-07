// Simples
const tag = document.createElement("p");
tag.innerText = "Olá, eu sou uma tag criada pelo JS";
document.querySelector("body").appendChild(tag);

// Intermediário
const tagInput = document.createElement("input");
tagInput.placeholder = "Digite seu texto aqui";
const form = document.querySelector("form").appendChild(tagInput);

// Avançado
const article = document.createElement("article");
const h1 = document.createElement("h1");
h1.innerText = "Título do Post";
const p = document.createElement("p");
p.innerText = "Descrição do Post";
const a = document.createElement("a");
a.innerText = "Ver post completo";

document.querySelector("body").appendChild(article);
article.appendChild(h1);
article.appendChild(p);
article.appendChild(a);
