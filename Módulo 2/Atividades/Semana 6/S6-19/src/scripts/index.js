import { Anime } from "./models/animation.js";
import { ApiRequest } from "./models/api.js";
class SignIn {
  static id = localStorage.getItem("@kenzie:id");

  static async signIn() {
    const form = document.querySelector("form");
    const validate = await ApiRequest.findUser(this.id);

    if (!validate.detail) {
      return window.location.replace("src/pages/home.html");
    }

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const email = e.target.email.value;
      const password = e.target.password.value;
      const data = { email: email, password: password };
      const res = await ApiRequest.readUser(data);

      if (res.non_field_errors) return Anime.alertModal();

      localStorage.setItem("@kenzie:token", res.token);
      localStorage.setItem("@kenzie:id", res.user_uuid);
      window.location.replace("src/pages/home.html");
      return;
    });
  }
}
SignIn.signIn();
