import { ApiResquest } from "./api.js";

const form = document.querySelector("#login");
class LoginPage {
  static logIn() {
    const token = localStorage.getItem("@kenzie:token");

    if (token) window.location.assign("src/pages/homepage.html");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const sentEmail = e.target.email.value;
      const sentPassword = e.target.senha.value;
      const body = { email: sentEmail, password: sentPassword };
      const res = await ApiResquest.logar(body);

      if (res.message) return alert(res.message);

      localStorage.setItem("@kenzie:token", res.token);
      localStorage.setItem("id", res.userId);
      window.location.assign("src/pages/homepage.html");
    });
  }
}
LoginPage.logIn();
