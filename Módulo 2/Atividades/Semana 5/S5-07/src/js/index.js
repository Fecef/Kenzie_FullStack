import { ApiRequests } from "./api.js";
class Client {
  static async list() {
    const clients = await ApiRequests.listarClientes();
    const cardWrapper = document.querySelector("#cardWrapper");

    clients.forEach((cl) => {
      cardWrapper.insertAdjacentHTML(
        "afterbegin",
        `
              <li class="card">
                  <h2>${cl.nome}</h2>
  
                  <div>
                      <h3>Dados Pessoais</h3>
                      <p>email: ${cl.email}</p>
                      <p>idade: ${cl.idade}</p>
                      <p>cpf: ${cl.cpf}</p>
                      <p>sexo: ${cl.sexo}</p>
  
                  </div>
                  <div>
                      <h3>Endereco</h3>
                      <p>cep: ${cl.endereco.cep}</p>
                      <p>estado: ${cl.endereco.estado}</p>
                      <p>cidade: ${cl.endereco.cidade}</p>
                      <p>bairro: ${cl.endereco.bairro}</p>
                      <p>rua: ${cl.endereco.rua}</p>
                      <p>numero: ${cl.endereco.numero}</p>
                  </div>
  
              </li>
          `
      );
    });
  }
}
Client.list();
