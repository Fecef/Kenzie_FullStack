class Restaurante {
  constructor(nome, experiencia, especialidade, preco, localidade, horario) {
    this._nome = nome;
    this._experiencia = experiencia;
    this._especialidade = especialidade;
    this._preco = preco;
    this._localidade = localidade;
    this._horario = horario;
  }

  fazerPedido() {}
  pagaConta() {}
  comentarAtendimento() {}
}

class Carro {
  constructor(modelo, ano, consumo, combustivel) {
    this._modelo = modelo;
    this._ano = ano;
    this._consumo = consumo;
    this._combustivel = combustivel;
  }

  abastecer() {}
  calibrarPneus() {}
  ouvirMusica() {}
  consertarCarro() {}
}
