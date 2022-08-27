import { ApiResquest } from "./api.js";

class renderHomePage {
  static async renderHeader() {
    const id = localStorage.getItem("id");
    const userData = await ApiResquest.buscarUsuario(id);
    const header = document.querySelector("#header");
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    const h2 = document.createElement("H2");

    h2.innerText = userData.username;
    img.src = userData.avatarUrl;

    header.append(figure, h2);
    figure.append(img);
  }

  static async logOut() {
    const btn = document.querySelector("#logout");

    btn.addEventListener("click", () => {
      localStorage.clear();
      window.location.assign("../../index.html");
    });
  }

  static createPost() {
    const form = document.querySelector("#criarpost_form");
    const comment = document.querySelector("#comment");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const text = e.target.comment.value;
      const res = await ApiResquest.postar({ content: text });

      comment.value = "";
      window.location.reload();
      return res;
    });
  }

  static async renderAllPosts() {
    const data = await ApiResquest.listarPostagens();
    const tagUL = document.querySelector("#tag-ul");
    const userId = localStorage.getItem("id");

    data.forEach((post) => {
      const tagLi = document.createElement("li");
      const tagDiv = document.createElement("div");
      const tagFigure = document.createElement("figure");
      const tagImg = document.createElement("img");
      tagImg.className = "card_imagem";
      const tagFigcaption = document.createElement("figcaption");
      const tagDiv2 = document.createElement("div");
      const tagH2 = document.createElement("h2");
      const tagP = document.createElement("p");
      const tagDivBtn = document.createElement("div");
      const tagPdata = document.createElement("p");

      tagLi.classList.add("card");
      tagLi.id = post.id;
      tagDiv.className = "card_detalhes";
      tagImg.src = post.user.avatarUrl;
      tagFigcaption.classList.add("name");
      tagFigcaption.innerText = post.user.username;
      tagDiv2.classList.add("texto");
      tagH2.innerText = post.user.username;
      tagH2.id = post.user.id;
      tagP.innerText = post.content;
      tagP.id = "caixa-texto";
      tagDivBtn.classList.add("card_botoes");
      const dataformatada = new Date(post.createdAt);
      tagPdata.innerText = dataformatada.toLocaleDateString();

      tagDivBtn.append(tagPdata);
      tagDiv2.append(tagH2, tagP);
      tagFigure.append(tagImg, tagFigcaption);
      tagDiv.append(tagFigure, tagDiv2);
      tagLi.append(tagDiv, tagDivBtn);
      tagUL.appendChild(tagLi);

      if (userId == tagH2.id) {
        const tagDivBtn2 = document.createElement("div");
        const tagBtn = document.createElement("button");
        const tagBtnImg = document.createElement("img");
        tagBtnImg.className = "imagem_editar";
        tagBtnImg.id = post.id;
        const tagBtn2 = document.createElement("button");
        const tagBtn2Img = document.createElement("img");
        tagBtn2Img.className = "imagem_deletar";
        tagBtn2Img.id = post.id;

        tagBtn.id = "btn_editar";
        tagBtnImg.src = "../assets/edit 1.svg";
        tagBtn2.id = "btn_deletar";
        tagBtn2Img.src = "../assets/trash-bin 1.svg";

        tagBtn2.appendChild(tagBtn2Img);
        tagBtn.appendChild(tagBtnImg);
        tagDivBtn2.append(tagBtn, tagBtn2);
        tagDivBtn.append(tagPdata, tagDivBtn2);
      }
    });
  }
}

renderHomePage.renderHeader();
renderHomePage.logOut();
renderHomePage.createPost();
renderHomePage.renderAllPosts();

class Modals {
  static async editarPost() {
    const modal = document.getElementById("modal-editar");
    const formEditar = document.querySelector("#modal-editar");
    formEditar.addEventListener("submit", async (e) => {
      e.preventDefault();
      const texto = e.target.texto.value;
      const body = {
        content: texto,
      };

      const id = document.querySelector(".btn_enviar").id;
      // console.log(body);
      // console.log(id);
      await ApiResquest.editarPost(id, body);
      modal.style.display = "none";
      window.location.reload();
    });
  }

  static modalEditar() {
    try {
      const modal = document.getElementById("modal-editar");
      const tagUl = document.querySelector("#tag-ul");
      const modalBack = document.querySelector(".modal-background");
      const caixaTexto = document.querySelector("#caixa-texto");
      const textoEdicao = document.querySelector("#texto");

      tagUl.addEventListener("click", (e) => {
        let btnEditar = e.target;
        if (btnEditar.className == "imagem_editar") {
          modalBack.style.display = "block";
          const btnEnviar = document.querySelector(".btn_enviar");
          btnEnviar.id = btnEditar.id;
        }
      });

      const btnFechar = document.querySelector("#fechar");

      btnFechar.addEventListener("click", () => {
        modalBack.style.display = "none";
      });
    } catch {
      console.log("nenhum post seu na tela");
    }
  }

  static modalExcluir() {
    try {
      const modal = document.getElementById("modal-deletar");
      const btnFechar = document.querySelector("#fecharModal2");
      const modalBack = document.querySelectorAll(".modal-background")[1];

      const tagUl = document.querySelector("#tag-ul");
      tagUl.addEventListener("click", (e) => {
        let btnLixeira = e.target;
        if (btnLixeira.className == "imagem_deletar") {
          modalBack.style.display = "block";
          const btnDeletar = document.querySelector(".btn_deletar");
          btnDeletar.id = btnLixeira.id;
        }
      });

      btnFechar.addEventListener("click", () => {
        modalBack.style.display = "none";
      });
    } catch {
      console.log("nenhum post seu na tela");
    }
  }
  static deletarPost() {
    const modal = document.getElementById("modal-deletar");
    const btnDeletar = document.querySelector(".btn_deletar");
    btnDeletar.addEventListener("click", async function (e) {
      e.preventDefault();
      const id = document.querySelector(".btn_deletar").id;
      console.log(id);
      await ApiResquest.deletarPost(id);
      modal.style.display = "none";
      window.location.reload();
    });
  }
}

Modals.editarPost();
Modals.modalExcluir();
Modals.deletarPost();
Modals.modalEditar();
