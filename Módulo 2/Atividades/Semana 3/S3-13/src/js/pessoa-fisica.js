class PessoaFisica extends Cliente {
  constructor(
    idCliente = "",
    tipoCliente = "",
    dataCriacao = "",
    codBanco = 0,
    agencia = 0,
    conta = 0,
    saldo = 0,
    nome = "",
    cpf = "",
    email = "",
    telefone = 0,
    dataDeNascimento = ""
  ) {
    super(idCliente, tipoCliente, dataCriacao, codBanco, agencia, conta, saldo);
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.telefone = telefone;
    this.dataDeNascimento = dataDeNascimento;
  }
}
