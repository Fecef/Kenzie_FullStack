class PessoaJuridica extends Cliente {
  constructor(
    idCliente = "",
    tipoCliente = "",
    dataCriacao = "",
    codBanco = 0,
    agencia = 0,
    conta = 0,
    saldo = 0,
    nomeFantasia = "",
    cnpj = "",
    email = "",
    telefone = 0,
    dataDaFundacao = ""
  ) {
    super(idCliente, tipoCliente, dataCriacao, codBanco, agencia, conta, saldo);
    this.nomeFantasia = nomeFantasia;
    this.cnpj = cnpj;
    this.email = email;
    this.telefone = telefone;
    this.dataDaFundacao = dataDaFundacao;
  }
}
