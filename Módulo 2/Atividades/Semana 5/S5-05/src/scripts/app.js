export class ApiRequests {
  static baseUrl = "https://kenzie-news-api.herokuapp.com/api";

  static async getNews() {
    const news = await fetch(`${this.baseUrl}/news`)
      .then((res) => res.json())
      .catch((err) => console.log(err));
    return news;
  }
}
