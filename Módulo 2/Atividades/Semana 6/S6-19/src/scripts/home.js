import { ApiRequest } from "./models/api.js";
import { Anime } from "./models/animation.js";

class HomeFeature {
  static id = localStorage.getItem("@kenzie:id");
  static hasId = this.id !== null;

  static access() {
    const headerBtn = document.querySelectorAll(".btn-grey");

    if (this.hasId) {
      headerBtn[0].classList.add("hidden");
      headerBtn[1].classList.add("hidden");
      return;
    }
    headerBtn[0].classList.remove("hidden");
    headerBtn[1].classList.remove("hidden");
  }

  static logOut() {
    const headerBtn = document.querySelectorAll(".btn-grey");

    headerBtn[2].addEventListener("click", () => {
      localStorage.clear();
      window.location.replace("../../index.html");
      return;
    });
  }

  static postFeatureEventHandler() {
    const input = document.querySelector(".comment-section input");
    const textarea = document.querySelector(".comment-section textarea");
    const section = document.querySelector(".comment-section");
    const button = document.querySelector(".comment-section button");

    section.addEventListener("keyup", () => {
      if (input.value.length > 0 && textarea.value.length > 0) {
        button.disabled = false;
        button.classList.add("btn-primary");
      } else {
        button.disabled = true;
        button.classList.remove("btn-primary");
      }
    });

    button.addEventListener("click", async () => {
      await ApiRequest.createPost({
        title: input.value,
        description: textarea.value,
      });
      input.value = "";
      textarea.value = "";
    });
  }

  static folowSugestionEventHandler() {
    const button = document.querySelectorAll("#userSugestions button");

    button.forEach((el) => {
      el.addEventListener("click", async () => {
        if (el.innerText === "Seguir") {
          el.classList.remove("btn-outline");
          el.classList.add("btn-primary");
          el.innerText = "Seguindo";
          ApiRequest.followUser({ following_users_uuid: el.id });
        } else {
          el.classList.remove("btn-primary");
          el.classList.add("btn-outline");
          el.innerText = "Seguir";
          const followerUser = await ApiRequest.findUser(el.id);
          const ass = followerUser.followers.filter((la) => {
            if (la.followers_users_id.uuid == this.id) {
              return la.uuid;
            }
          });
          ApiRequest.unFollowUser(ass[0].uuid);
        }
      });
    });
  }

  static allUsersPostsEventHandler() {
    const button = document.querySelectorAll(".perfil-footer button");
    const icon = document.querySelectorAll(".perfil-footer i");

    button.forEach((el) => {
      el.addEventListener("click", async (e) => {
        Render.modalPost(e.target.id);
      });
    });

    icon.forEach((el) => {
      el.addEventListener("click", async () => {
        el.classList.toggle("fa-heart-follow");
        const res = await ApiRequest.likePost({ post_uuid: el.id });

        if (res.post_uuid[0] === "You already liked this post.") {
          return ApiRequest.dislikePost(el.id);
        }
      });
    });
  }
}

class Render {
  static id = localStorage.getItem("@kenzie:id");
  static userData = [];
  static allPosts = [];
  static followingUserEmail = [];

  static async getData() {
    const user = await ApiRequest.findUser(this.id);
    const data = await ApiRequest.getAllPosts();

    this.userData.push(user);
    this.allPosts.push(...data.results);
    user.following.forEach((el) =>
      this.followingUserEmail.push(el.following_users_id.email)
    );
    return this.functionCaller();
  }

  static functionCaller() {
    this.postFeature(...this.userData);
    this.folowSugestion(this.allPosts);
    this.allUsersPosts(this.allPosts);
  }

  static async postFeature(user) {
    const divpai = document.querySelector(".comment-section div");
    const div = document.createElement("div");
    const img = document.createElement("img");
    const divdiv = document.createElement("div");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const label = document.createElement("label");
    const input = document.createElement("input");
    const textarea = document.createElement("textarea");
    const button = document.createElement("button");
    const small = document.createElement("small");
    console.log(user);
    div.classList.add("perfil-card");
    img.classList.add("perfil-avatar-sm");
    img.src = user.image;
    img.alt = "Avatar";
    divdiv.classList.add("perfil-avatar-body");
    h2.innerText = user.username;
    p.innerText = user.work_at;
    label.for = "commentTitle";
    label.classList.add("hidden");
    input.classList.add("input");
    input.type = "text";
    input.name = "comment-title";
    input.id = "commentTitle";
    input.placeholder = "Título";
    textarea.classList.add("input");
    textarea.name = "comment";
    textarea.id = "comment";
    textarea.cols = "100";
    textarea.rows = "5";
    textarea.placeholder = "O que estou pensando?";
    textarea.maxLength = "1000";
    button.classList.add("btn");
    button.innerText = "Postar";
    button.disabled = true;
    small.innerText = user.followers_amount

    divpai.append(div, label, input, textarea, button);
    div.append(img, divdiv, small);
    divdiv.append(h2, p);

    HomeFeature.postFeatureEventHandler();
  }

  static folowSugestion(allPosts) {
    const aside = document.querySelector("#userSugestions");
    const h2 = document.createElement("h2");
    const menu = document.createElement("menu");

    h2.innerText = "Sugestões para você seguir";

    aside.append(h2, menu);

    allPosts.forEach((_, i, arr) => {
      if (i < 3) {
        let rI = Math.floor(Math.random() * (allPosts.length - 1));
        const otherEmail = arr[rI].author.email;
        const following = this.followingUserEmail.includes(otherEmail);
        const li = document.createElement("li");
        const img = document.createElement("img");
        const div = document.createElement("div");
        const h21 = document.createElement("h2");
        const p = document.createElement("p");
        const button = document.createElement("button");

        li.classList.add("perfil-card");
        img.classList.add("perfil-avatar-sm");
        img.src = arr[rI].author.image;
        img.alt = "Avatar";
        div.classList.add("perfil-avatar-body");
        h21.innerText = arr[rI].author.username;
        p.innerText = arr[rI].author.work_at;
        button.id = arr[rI].author.uuid;

        if (following) {
          button.classList.add("btn");
          button.classList.add("btn-thin");
          button.classList.add("btn-primary");
          button.innerText = "Seguindo";
        } else {
          button.classList.add("btn");
          button.classList.add("btn-thin");
          button.classList.add("btn-outline");
          button.innerText = "Seguir";
        }

        menu.append(li);
        li.append(img, div, button);
        div.append(h21, p);
      }
    });
    HomeFeature.folowSugestionEventHandler();
  }

  static allUsersPosts(allPosts) {
    const section = document.querySelector(".posts-section");
    const h1 = document.createElement("h1");
    const menu = document.createElement("menu");

    h1.innerText = "Posts";

    section.append(h1, menu);

    allPosts.forEach((el, i) => {
      const likeList = el.likes;
      const liked = likeList.some((el) => el.user.uuid === this.id);
      const li = document.createElement("li");
      const div1 = document.createElement("div");
      const img = document.createElement("img");
      const div1div = document.createElement("div");
      const h2 = document.createElement("h2");
      const p1 = document.createElement("p");
      const h1 = document.createElement("h1");
      const p2 = document.createElement("p");
      const div2 = document.createElement("div");
      const button = document.createElement("button");
      const icon = document.createElement("i");
      const span = document.createElement("span");

      div1.classList.add("perfil-card");
      img.classList.add("perfil-avatar-sm");
      img.src = el.author.image;
      img.alt = "Avatar";
      div1div.classList.add("perfil-avatar-body");
      h2.innerText = el.author.username;
      p1.innerText = el.author.work_at;
      h1.innerText = el.title;
      p2.innerText = el.description;
      p2.classList.add("post-description");
      div2.classList.add("perfil-footer");
      button.classList.add("btn");
      button.classList.add("btn-dark");
      button.innerText = "Abrir Post";
      button.id = i;
      icon.id = el.uuid;

      if (liked) {
        icon.classList.add("fa-solid");
        icon.classList.add("fa-heart");
        icon.classList.add("fa-heart-follow");
        span.innerText = el.likes.length;
      } else {
        icon.classList.add("fa-solid");
        icon.classList.add("fa-heart");
        span.innerText = el.likes.length;
      }

      menu.append(li);
      li.append(div1, h1, p2, div2);
      div1.append(img, div1div);
      div1div.append(h2, p1);
      div2.append(button, icon, span);
    });
    HomeFeature.allUsersPostsEventHandler();
  }

  static modalPost(indice) {
    const main = document.querySelector("main");

    main.insertAdjacentHTML(
      "afterend",
      `
      <div id="modal" class="modal hidden">
        <div class="modal-content">
            <div class="perfil-card">
                <img class="perfil-avatar-sm" src="${this.allPosts[indice].author.image}" alt="Avatar">
                <div class="perfil-avatar-body">
                    <h2>${this.allPosts[indice].author.username}</h2>
                    <p>${this.allPosts[indice].author.work_at}</p>
                </div>
            </div>
            <h1>${this.allPosts[indice].title}</h1>
            <p>${this.allPosts[indice].description}</p>
            <button class="btn btn-white modal-content-btn">&times</button>
        </div>
      </div>
    `
    );

    Anime.contenttModal();
  }
}

HomeFeature.access();
HomeFeature.logOut();
Render.getData();
