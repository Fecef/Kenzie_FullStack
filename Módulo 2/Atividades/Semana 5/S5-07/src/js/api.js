export class ApiRequests {
  static baseUrl = "https://atividade-api-clientes.herokuapp.com";
  static headers = {
    "Content-Type": "application/json",
  };

  static async listarClientes() {
    const clients = await fetch(`${this.baseUrl}/clientes`)
      .then((res) => res.json())
      .catch((err) => console.log(err));
    return clients;
  }

  static async cadastrarCliente(data) {
    const newClient = await fetch(`${this.baseUrl}/clientes`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    return newClient;
  }

  static async editarCliente(id, data) {
    const updatedClient = await fetch(`${this.baseUrl}/clientes/${id}`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
    return updatedClient;
  }

  static async deletarCliente(id) {
    const delteCliente = await fetch(`${this.baseUrl}/clientes/${id}`, {
      method: "DELETE",
      headers: this.headers,
    });
    return delteCliente;
  }
}
