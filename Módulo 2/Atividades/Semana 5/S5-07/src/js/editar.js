import { ApiRequests } from "./api.js";

class Client {
  static modifiedData = {
    nome: "",
    email: "",
    sexo: "",
    idade: 0,
    cpf: "",
    endereco: {
      estado: "",
      cidade: "",
      bairro: "",
      numero: "",
      rua: "",
      cep: "",
    },
  };

  static async renderClientNameOptions() {
    const allClients = await ApiRequests.listarClientes();
    const select = document.querySelector("select");

    allClients.forEach((cl) => {
      select.insertAdjacentHTML(
        "afterbegin",
        `
            <option value="${cl.nome}">${cl.nome}</option>

        `
      );
    });
  }

  static async searchClient() {
    const allClients = await ApiRequests.listarClientes();
    const select = document.querySelector("select");
    const btn = document.querySelectorAll("button")[0];

    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const client = allClients.filter((cl) => cl.nome === select.value);
      this.renderClientEditForm(...client);
      this.updateClient(client[0].id, ...client);
    });
  }

  static renderClientEditForm(client) {
    const clientKeys = Object.keys(client);
    const addressKeys = Object.keys(client.endereco);
    const input = document.querySelectorAll("input");

    input.forEach((inp) => {
      clientKeys.forEach((key, i) => {
        if (inp.name === key) {
          inp.value = client[key];
        } else if (inp.name === addressKeys[i]) {
          inp.value = client.endereco[inp.name];
        }
      });
    });
    return client;
  }

  static async updateClient(id) {
    const btn = document.querySelectorAll("button")[1];
    const input = document.querySelectorAll("input");

    btn.addEventListener("click", async (e) => {
      e.preventDefault();
      input.forEach((inp) => {
        if (this.modifiedData[inp.name] == undefined) {
          return (this.modifiedData.endereco[inp.name] = inp.value);
        }
        return (this.modifiedData[inp.name] = inp.value);
      });
      await ApiRequests.editarCliente(id, this.modifiedData);
      window.location.reload();
    });
  }
}
Client.renderClientNameOptions();
Client.searchClient();
Client.updateClient();
