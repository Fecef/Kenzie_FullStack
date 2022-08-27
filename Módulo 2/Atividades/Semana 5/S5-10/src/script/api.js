export class ApiResquest {
  static url = "https://blog-m2.herokuapp.com";
  static token = localStorage.getItem("@kenzie:token");
  static userId = localStorage.getItem("id");
  static headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${this.token}`,
  };

  static async cadastrar(body) {
    try {
      const apiResponse = await fetch(`${this.url}/users/register`, {
        method: "POST",
        headers: this.headers,
        body: JSON.stringify(body),
      });
      const newUser = await apiResponse.json();
      return newUser;
    } catch {
      return error;
    }
  }

  static async logar(body) {
    try {
      const apiResponse = await fetch(`${this.url}/users/login`, {
        method: "POST",
        headers: this.headers,
        body: JSON.stringify(body),
      });
      const login = await apiResponse.json();
      console.log(login);
      return login;
    } catch {
      return false;
    }
  }

  static async buscarUsuario(id) {
    try {
      const apiResponse = await fetch(`${this.url}/users/${id}`, {
        method: "GET",
        headers: this.headers,
      });
      const result = await apiResponse.json();
      return result;
    } catch {
      return false;
    }
  }

  static async listarPostagens() {
    try {
      const apiResponse = await fetch(`${this.url}/posts?page=1`, {
        method: "GET",
        headers: this.headers,
      });
      const allPosts = await apiResponse.json();
      return allPosts.data;
    } catch {
      return false;
    }
  }

  static async buscarPost(id) {
    try {
      const apiResponse = await fetch(`${this.url}/posts/${id}`, {
        method: "GET",
        headers: this.headers,
      });
      const post = await apiResponse.json();
      console.log(post);
      return post;
    } catch {
      return false;
    }
  }

  static async postar(content) {
    try {
      const apiResponse = await fetch(`${this.url}/posts`, {
        method: "POST",
        headers: this.headers,
        body: JSON.stringify(content),
      });
      const post = await apiResponse.json();
      console.log(post);
      return post;
    } catch {
      return false;
    }
  }

  static async editarPost(id, content) {
    try {
      const apiResponse = await fetch(`${this.url}/posts/${id}`, {
        method: "PATCH",
        headers: this.headers,
        body: JSON.stringify(content),
      });
      const post = await apiResponse.json();
      console.log(post);
      return post;
    } catch {
      return false;
    }
  }

  static async deletarPost(id) {
    try {
      const apiResponse = await fetch(`${this.url}/posts/${id}`, {
        method: "DELETE",
        headers: this.headers,
      });
      return apiResponse;
    } catch {
      return false;
    }
  }
}
