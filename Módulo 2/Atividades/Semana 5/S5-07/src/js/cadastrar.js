import { ApiRequests } from "./api.js";

class Client {
  static personalData = {
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

  static async signUp() {
    const input = document.querySelectorAll("input");
    const submit = document.querySelector("#submit");

    submit.addEventListener("click", async (e) => {
      e.preventDefault();
      input.forEach((inp) => {
        if (Client.personalData[inp.name] == undefined) {
          return (Client.personalData.endereco[inp.name] = inp.value);
        }
        return (Client.personalData[inp.name] = inp.value);
      });
      await ApiRequests.cadastrarCliente(Client.personalData);
      window.location.reload();
    });
  }
}
Client.signUp();
