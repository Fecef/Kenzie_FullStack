export class Api {
  static token = "";
  static baseUrl = "https://m2-api-token.herokuapp.com";
  static headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${Api.token}`,
  };

  static async getPublic() {
    try {
      const res = await fetch(`${this.baseUrl}/recipe`, {
        method: "GET",
        headers: this.headers,
      });
      const receitas = await res.json();
      return receitas;
    } catch (error) {
      console.log(error);
    }
  }

  static async getPrivate() {
    try {
      const res = await fetch(`${this.baseUrl}/recipe/user`, {
        method: "GET",
        headers: this.headers,
      });
      const user = await res.json();
      return user;
    } catch (error) {
      console.log(error);
    }
  }

  static async createUser(data) {
    try {
      const res = await fetch(`${this.baseUrl}/auth/register`, {
        method: "POST",
        headers: this.headers,
        body: JSON.stringify(data),
      });
      const newUser = await res.json();
      return newUser;
    } catch (error) {
      console.log(error);
    }
  }

  static async login(data) {
    try {
      const res = await fetch(`${this.baseUrl}/auth/login`, {
        method: "POST",
        headers: this.headers,
        body: JSON.stringify(data),
      });
      const token = await res.json();
      Api.token = token;
      return token;
    } catch (error) {
      console.log(error);
    }
  }
}
