// Exercício 1
class Calculadora {
  static historico = [];

  static soma(num1, num2) {
    const res = num1 + num2;
    console.log(res);
    this.salvarHistorico(num1, num2, res, "+");
  }
  static subtracao(num1, num2) {
    const res = num1 - num2;
    console.log(res);
    this.salvarHistorico(num1, num2, res, "-");
  }
  static divisao(num1, num2) {
    const res = num1 / num2;
    console.log(res);
    this.salvarHistorico(num1, num2, res, "/");
  }
  static multiplicacao(num1, num2) {
    const res = num1 * num2;
    console.log(res);
    this.salvarHistorico(num1, num2, res, "*");
  }
  static salvarHistorico(num1, num2, res, operador) {
    this.historico.push(`${num1} ${operador} ${num2} = ${res}`);
  }
}

// Exercício 2
class ContaBancaria {
  constructor(numero, titular, saldo, limite) {
    this._numero = numero;
    this._titular = titular;
    this._saldo = saldo;
    this._limite = limite;
  }

  getNumero() {
    return this._numero;
  }
  setNumero(num) {
    this._numero = num;
  }
  getTitular() {
    return this._titular;
  }
  setTitular(titular) {
    this._titular = titular;
  }
  getSaldo() {
    return this._saldo;
  }
  getLimite() {
    return this._limite;
  }

  depositar(valor) {
    this._saldo += valor;
  }

  sacar(valor) {
    this._saldo -= valor;
    return this.getSaldo();
  }

  imprimirDados() {
    return `A conta de número ${this.getNumero()} de ${this.getTitular()} possui um saldo de R$${this.getSaldo()} e um limite de R$${this.getLimite()}`;
  }
}

// Exercício 3

class Slenzie {
  constructor(nomeEvento) {
    this._nomeEvento = nomeEvento;
    this._perguntas = [];
    this._perguntasArquivadas = [];
  }
  adicionarPergunta(usuario, pergunta) {
    this._perguntas.push({ nome: usuario, pergunta: pergunta, votos: 0 });
  }
  arquivarPergunta() {
    this._perguntasArquivadas.push(this._perguntas.pop());
  }
  votarPergunta(index) {
    this._perguntas[index].votos++;
    this._perguntas.sort((a, b) => a.votos + b.votos);
  }
  reativarPergunta(index) {
    this._perguntas.push(...this._perguntasArquivadas.splice(index, 1));
  }
}
