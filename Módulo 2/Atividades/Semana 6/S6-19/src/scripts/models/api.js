export class ApiRequest {
  static baseUrl = "https://m2-rede-social.herokuapp.com/api/";
  static token = localStorage.getItem("@kenzie:token");
  static userId = localStorage.getItem("@kenzie:id");
  static headers = {
    "Content-Type": "application/json",
    Authorization: `Token ${this.token}`,
  };

  static async createUser(data) {
    const res = await fetch(`${this.baseUrl}users/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const newRes = await res.json();
    console.log(newRes);

    return newRes;
  }

  static async readUser(data) {
    const res = await fetch(`${this.baseUrl}users/login/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const newRes = await res.json();
    console.log(newRes);

    return newRes;
  }

  static async findUser(uuid) {
    const res = await fetch(`${this.baseUrl}users/${uuid}/`, {
      method: "GET",
      headers: this.headers,
    });
    const newRes = await res.json();
    console.log(newRes);

    return newRes;
  }

  static async getAllPosts() {
    const res = await fetch(`${this.baseUrl}posts/`, {
      method: "GET",
      headers: this.headers,
    });
    const newRes = await res.json();
    console.log(newRes);

    return newRes;
  }

  static async createPost(data) {
    const res = await fetch(`${this.baseUrl}posts/`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(data),
    });
    const newRes = await res.json();
    console.log(newRes);

    return newRes;
  }

  static async likePost(data) {
    const res = await fetch(`${this.baseUrl}likes/`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(data),
    });
    const newRes = await res.json();
    console.log(newRes);

    return newRes;
  }

  static async dislikePost(data) {
    const res = await fetch(`${this.baseUrl}likes/${data}/`, {
      method: "DELETE",
      headers: this.headers,
    });
    const newRes = await res.json();
    console.log(newRes);

    return newRes;
  }

  static async followUser(data) {
    const res = await fetch(`${this.baseUrl}users/follow/`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(data),
    });
    const newRes = await res.json();
    console.log(newRes);

    return newRes;
  }

  static async unFollowUser(data) {
    return await fetch(`${this.baseUrl}users/unfollow/${data}/`, {
      method: "DELETE",
      headers: this.headers,
    });
  }
}
