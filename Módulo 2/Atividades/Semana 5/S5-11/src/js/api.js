export class ApiRequest {
  static baseUrl = "https://kenzie-olympics.herokuapp.com/paises";
  static headers = {
    "Content-Type": "application/json",
  };

  static async getCountries() {
    try {
      const res = await fetch(`${this.baseUrl}`, {
        method: "GET",
        headers: this.headers,
      });
      const countries = await res.json();
      return countries;
    } catch (error) {
      console.log(error);
    }
  }
}
