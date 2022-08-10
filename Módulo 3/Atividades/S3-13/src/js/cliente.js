class Cliente {
  constructor(
    idCliente = "",
    tipoCliente = "",
    dataCriacao = "",
    codBanco = 0,
    agencia = 0,
    conta = 0,
    saldo = 0
  ) {
    this.idCliente = idCliente;
    this.tipoCliente = tipoCliente;
    this.dataCriacao = dataCriacao;
    this.codBanco = codBanco;
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
    this.historico = [];
  }
}
