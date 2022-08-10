class Transacao {
  static transferencia(
    contaOrigem = Class,
    contaDestino = Class,
    idTransacao = 0,
    dataDeTransacao = "",
    valorDaTransferencia = 0
  ) {
    if (contaOrigem.saldo >= valorDaTransferencia) {
      contaOrigem.saldo -= valorDaTransferencia;
      contaDestino.saldo += valorDaTransferencia;

      contaOrigem.historico.push({
        idTransacao: idTransacao,
        dataDeTransacao: dataDeTransacao,
        valorDaTransferencia: valorDaTransferencia,
        tipo: "pagamento",
      });

      contaDestino.historico.push({
        idTransacao: idTransacao,
        dataDeTransacao: dataDeTransacao,
        valorDaTransferencia: valorDaTransferencia,
        tipo: "recebimento",
      });

      return { mensagem: "Transferência realizada com sucesso!" };
    }
    return { mensagem: "Saldo insuficiente para transferência!" };
  }

  static deposito(
    contaDestino = Class,
    idDeposito = 0,
    dataDoDeposito = "",
    valorDoDeposito = 0
  ) {
    contaDestino.saldo += valorDoDeposito;
    contaDestino.historico.push({
      idDeposito: idDeposito,
      dataDoDeposito: dataDoDeposito,
      valorDoDeposito: valorDoDeposito,
      tipo: "recebimento",
    });
    return {
      mensagem: "Depósito realizado com sucesso!",
    };
  }

  static pagamentoSalario(
    contaOrigem = Class,
    contaDestino = Class,
    idPagamento = 0,
    dataDoPagamento = "",
    valorDoSalario = 0
  ) {
    if (contaOrigem instanceof PessoaFisica && valorDoSalario > 1000) {
      return {
        mensagem:
          "Seu limite máximo para este tipo de operação é de 1000. Entre em contato com o banco.",
      };
    } else if (contaOrigem.saldo < valorDoSalario) {
      return {
        mensagem: "Saldo insuficiente para realizar o pagamento!",
      };
    }
    contaOrigem.saldo -= valorDoSalario;
    contaDestino.saldo += valorDoSalario;
    contaOrigem.historico.push({
      idPagamento: idPagamento,
      dataDoPagamento: dataDoPagamento,
      valorDoSalario: valorDoSalario,
      tipo: "pagamento",
    });
    contaDestino.historico.push({
      idPagamento: idPagamento,
      dataDoPagamento: dataDoPagamento,
      valorDoSalario: valorDoSalario,
      tipo: "recebimento",
    });
    return {
      mensagem: "Pagamento realizado com sucesso!",
    };
  }
}
