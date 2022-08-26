import { ApiRequests } from "./api.js";

class Client {
  static async renderClientNameOptions() {
    const allClients = await ApiRequests.listarClientes();
    const select = document.querySelector("select");

    allClients.forEach((cl) => {
      select.insertAdjacentHTML(
        "afterbegin",
        `
            <option id="${cl.id}" value="${cl.nome}">${cl.nome}</option>

        `
      );
    });
  }

  static async getClientId() {
    const btn = document.querySelector("button");
    const select = document.querySelector("select");

    btn.addEventListener("click", async (e) => {
      const clientId = select[select.selectedIndex].id;

      e.preventDefault();
      await ApiRequests.deletarCliente(+clientId);
      window.location.reload();
    });
  }
}
Client.renderClientNameOptions();
Client.getClientId();
