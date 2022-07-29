const listaDeDevs = [
  {
    nome: "Rafael Bertoldo",
    stackDeEstudo: "back-end",
    imagem: "./assets/Bertoldo.jpg",
  },
  {
    nome: "Jardel Lacerda",
    stackDeEstudo: "front-end",
    imagem: "./assets/Jardel.jpg",
  },
  {
    nome: "Victor Augusto",
    stackDeEstudo: "fullstack",
    imagem: "./assets/Victor.jpg",
  },
  {
    nome: "Nicole Pimenta",
    stackDeEstudo: "front-end",
    imagem: "./assets/Nicole.jpg",
  },
  {
    nome: "Maria Ferrari",
    stackDeEstudo: "front-end",
    imagem: "./assets/Mia.jpg",
  },
  {
    nome: "Sidny",
    stackDeEstudo: "back-end",
    imagem: "./assets/Sid.jpg",
  },
];

function renderizarCards(array) {
  const section = document.querySelector("#devs__list");
  const footer = document.querySelector("#main__footer");

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const img = document.createElement("img");

    h2.innerText = element.nome;
    img.src = element.imagem;

    div.classList.add(
      element.stackDeEstudo === "front-end" ||
        element.stackDeEstudo === "fullstack"
        ? "dev__frontend"
        : "dev__backend"
    );

    // element.stackDeEstudo === "front-end" ||
    // element.stackDeEstudo === "fullstack"
    //   ? div.classList.add("dev__frontend")
    //   : div.classList.add("dev__backend");

    div.append(img, h2);
    section.appendChild(div);

    footer.remove();
  }
}
renderizarCards(listaDeDevs);
