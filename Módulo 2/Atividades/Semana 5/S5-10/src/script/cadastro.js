import { ApiResquest } from "./api.js";

class SignUpPage {
  static createUser() {
    const formCadastrar = document.querySelector("#form_cadastrar");

    formCadastrar.addEventListener("submit", async (event) => {
      event.preventDefault();
      const nome = event.target.nome.value;
      const email = event.target.email.value;
      const imagem = event.target.imagem.value;
      const senha = event.target.senha.value;
      const body = {
        username: nome,
        email: email,
        avatarUrl: imagem,
        password: senha,
      };
      const res = await ApiResquest.cadastrar(body);

      if (res.message) return alert(res.message);

      window.location.assign("../../index.html");
      return res;
    });
  }
}
SignUpPage.createUser();
