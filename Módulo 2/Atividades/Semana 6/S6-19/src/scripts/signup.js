import { Anime } from "./models/animation.js";
import { ApiRequest } from "./models/api.js";

class SignUp {
  static signUp() {
    const form = document.querySelector("form");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const name = e.target.name.value;
      const email = e.target.email.value;
      const password = e.target.password.value;
      const workAt = e.target.workAt.value;
      const img = e.target.imgUrl.value;
      const data = {
        username: name,
        email: email,
        password: password,
        work_at: workAt,
        image: img,
      };
      const res = await ApiRequest.createUser(data);

      if (res.email.length === 1) {
        return Anime.alertModal();
      }
      return window.location.replace("../../index.html");
    });
  }
}
SignUp.signUp();
