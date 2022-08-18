// Exercício 1
class Pessoa {
  constructor(nome, dtNascimento, cidade) {
    this._nome = nome;
    this._dtNascimento = dtNascimento;
    this._cidade = cidade;
  }

  calcularIdade() {
    return 2022 - this._dtNascimento;
  }
  apresentar() {
    const idade = this.calcularIdade();
    return `${this._nome} possui ${idade} anos de idade e atualmente está morando em ${this._cidade}`;
  }
}
const Felipe = new Pessoa("Felipe César", 1992, "São Bernardo do Campo");

// Exercício 2
class Elevador {
  constructor(andar, qtdePessoas) {
    this._andar = andar;
    this._qtdePessoas = qtdePessoas;
    this._totalAndares = 10;
    this._capacidade = 6;
  }

  entrar() {
    if (this._qtdePessoas >= 6) {
      return "Capacidade máxima atingida (6).";
    }
    return `Quantidade atual: ${++this._qtdePessoas} pessoas`;
  }
  sair() {
    if (this._qtdePessoas <= 0) {
      return "Elevador vazio.";
    }
    return `Quantidade atual: ${--this._qtdePessoas} pessoas`;
  }
  subir() {
    if (this._andar >= this._totalAndares) {
      return "Último andar.";
    }
    return `Subindo... ${++this._andar}`;
  }
  descer() {
    if (this._andar === 0) {
      return "Térreo.";
    }
    return `Descendo... ${--this._andar}`;
  }
}
const elevador = new Elevador(2, 2);

// Exercício 3
class Televisao {
  constructor(canal) {
    this._canal = canal;
    this._volume = 80;
  }
  aumentarVolume() {
    return `Aumentando... ${++this._volume}`;
  }
  diminuirVolume() {
    return `Diminuindo... ${--this._volume}`;
  }
  aumentarCanal() {
    return `Avançando canal... ${++this._canal}`;
  }
  diminuirCanal() {
    return `Voltando canal... ${--this._canal}`;
  }
  trocarCanal(canal) {
    return `Mudando de canal... ${(this._canal = canal)}`;
  }
  consultarCanal() {
    return this._canal;
  }
  consultarVolume() {
    return this._volume;
  }
}
const televisao = new Televisao(11);
console.log(televisao.aumentarCanal());
console.log(televisao.diminuirCanal());
console.log(televisao.aumentarVolume());
console.log(televisao.diminuirVolume());
console.log(televisao.trocarCanal(4));
console.log(televisao.consultarCanal());
console.log(televisao.consultarVolume());
