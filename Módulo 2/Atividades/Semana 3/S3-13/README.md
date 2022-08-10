# 🏁 Entrega - POO: Banco com classes

Nesta entrega vamos trabalhar construindo as clases `PessoaFisica`, `PessoaJuridica`, `Cliente` e `Transacao`, com o objetivo de simular o funcionamento de um banco, onde será feito pagamentos de salário e contas, depósitos e transferências.

Para iniciar vamos construir a classe `Cliente`

A classe `Cliente` deve possuir os seguintes parâmetros em seu constructor:

- **idCliente:** string
- **tipoCliente:** string
- **dataCriacao:** string
- **codBanco:** number
- **agencia:** number
- **conta:** number
- **saldo:** number
- **historico:** será definido apenas dentro constructor como um array vazio. Ou seja, o historico será passado apenas dentro dos colchetes {} e não nos parênteses ().
---

Agora vamos criar a classe `PessoaFisica`, está classe será uma extensão da classe `Cliente` heardando todos os seus atributos e recebendo mais alguns que são:

- **nome:** string
- **cpf:** string
- **email:** string
- **telefone:** number
- **dataDeNascimento:** string
---

Agora devemos construir a classe `PessoaJuridica` que também será um extensão da classe `Cliente` herdando todos os seus atributos e recebendo alguns novos:

- **nomeFantasia:** string
- **cnpj:** string
- **email:** string
- **telefone:** number
- **dataDaFundacao:** string
---
E, por último, vamos construir a classe `Transacao`, que será uma **classe estática**. Ou seja, não receberá **nenhum parâmetro pelo constructor** e terá **todos seus métodos estáticos**. Esta classe será responsável por realizar todas as operações de pagamentos, depósitos, transferências e registrar, no histórico das contas, essas operações por meio dos métodos abaixo:

Método estático `transferencia`:

Este método irá receber por parâmetro:

- **contaOrigem:** Class (Podendo ser uma classe PessoaJuridica ou PessoaFisica)
- **contaDestino:** Class (Podendo ser uma classe PessoaJuridica ou PessoaFisica)
- **idTransacao**: number
- **dataDeTransacao**: string
- **valorDaTransferencia**: number

O método transferencia deverá fazer o seguinte:

1. Verificar se a contaOrigem possui saldo maior ou igual ao valorDaTransferencia
  - Caso o saldo sejá maior:
    - Adicionar o objeto abaixo no historico da contaOrigem:

              {
                idTransacao: idTransacao,
                dataDeTransacao: dataDeTransacao,
                valorDaTransferencia: valorDaTransferencia,
                tipo: "pagamento",
              }

    - Adicionar, também, o objeto abaixo no historico da contaDestino:

              {
                idTransacao: idTransacao,
                dataDeTransacao: dataDeTransacao,
                valorDaTransferencia: valorDaTransferencia,
                tipo: "recebimento",
              }


    - O método, também, deverá reduzir o **valorDaTransferencia do saldo da contaOrigem** e adicionar o **valorDaTransferencia ao saldo da contaDestino**.

    - Por fim, o método deverá retornar o seguinte objeto:

              
              {
                mensagem: "Transferência realizada com sucesso!";
              }
              

  - Caso o saldo da contaOrigem seja menor que o valorDaTransferencia, o método deverá retornar o objeto:

             
                {
                  mensagem: "Saldo insuficiente para transferência!";
                }
              

Método estático `deposito`:

O método deposito irá receber por parâmetro:

- **contaDestino:** Class (Podendo ser uma classe PessoaJuridica ou PessoaFisica)
- **idDeposito**: number
- **dataDoDeposito**: string
- **valorDoDeposito**: number

O método deposito deverá fazer o seguinte:

1. Deve adicionar, ao saldo da contaDestino, o valorDoDeposito;

2. Deve adicionar, ao **saldo** da **contaDestino**, o **valorDoDeposito**;

3. Adicionar, ao **historico** da **contaDestino**, o objeto:

```javascript
{
  idDeposito: idDeposito,
  dataDoDeposito: dataDoDeposito,
  valorDoDeposito: valorDoDeposito,
  tipo: "recebimento",
}
```

4. E retornar a mensagem:

```javascript
{
  mensagem: "Depósito realizado com sucesso!";
}
```


Método estático `pagamentoSalario`:

O método pagamentoSalario irá receber por parâmetro:

- **contaOrigem:** Class (Podendo ser uma classe PessoaJuridica ou PessoaFisica)
- **contaDestino:** Class (Podendo ser uma classe PessoaJuridica ou PessoaFisica)
- **idPagamento**: number
- **dataDoPagamento**: string
- **valorDoSalario**: number

O método pagamentoSalario deverá fazer as validações abaixo:

1. Primeira validação: verificar se a **contaOrigem** é uma instância da classe **PessoaFisica** (veja a documentação do instanceof nos links de Referência ao final da entrega) e se o **valorDoSalario** é maior que 1000. Caso essa validação seja verdadeira, o objeto abaixo deverá ser retornado:
```javascript
{
  mensagem: "Seu limite máximo para este tipo de operação é de 1000. Entre em contato com o banco."
}
```

2. Segunda validação: verificar se o **saldo da contaOrigem** é menor que o **valorDoSalario**. Caso essa validação seja verdadeira, o objeto abaixo deverá ser retornado:

```javascript
{
  mensagem: "Saldo insuficiente para realizar o pagamento!"
}
```

3. Caso nenhuma dessas validações sejam verdadeiras, seu método deverá fazer o seguinte:
  - Adicionar o **valorDoSalario ao saldo da contaDestino** e remover o **valorDoSalario do saldo da contaOrigem**;

  - Adicionar, ao **historico da contaDestino**, o objeto abaixo:

```javascript
{
  idPagamento: idPagamento,
  dataDoPagamento: dataDoPagamento,
  valorDoSalario: valorDoSalario,
  tipo: "recebimento",
}
```

  - E, por fim, o método deverá retornar a o objeto abaixo:
```javascript
{
  mensagem: "Pagamento realizado com sucesso!"
}
```


 

## Teste

Insira o seguinte código no final do seu programa para verificar se ele está funcionando apropriadamente. **Atenção** (Não modifique este código!

```javascript
const testes = () => {
  const Lennon = new PessoaJuridica("01", "Vip", "16/05/2022", 156, 2798, 987654321, 1000, "Lennon", "1011121314", "lennon@email.com.br", 1234567890, "16/05/2022");

  const Joao = new PessoaFisica("02", "Comum", "16/03/2022", 156, 2798, 91919292, 100, "João", "2345678901", "joao@kenzie.com.br", "90919293", "01/01/2019");

  const Maria = new PessoaFisica("03", "Vip", "16/03/2022", 156, 2798, 10121416, 5000, "Maria", "3456789012", "maria@kenzie.com.br", "90919293", "01/01/2019");

  console.log(Lennon.saldo); // Deve retornar 1000
  console.log(Lennon.nomeFantasia); // Deve retornar "Lennon"
  console.log(Lennon.historico); // Deve retornar []
  console.log(Joao.nome); // Deve retornar "João"
  console.log(Joao.saldo); // Deve retornar 100
  console.log(Maria.idCliente); // Deve retornar "03"
  console.log(Maria.tipoCliente); // Deve retornar "Vip"

  console.log(Transacao.transferencia(Joao, Maria, 1, "25/07/2022", 200)); // Deve retornar {mensagem: "Saldo insuficiente para transferência!"}

  console.log(Transacao.transferencia(Lennon, Joao, 2, "20/07/2022", 500)); // Deve retornar {mensagem: "Transferência realizada com sucesso!"}

  console.log(Lennon.saldo); // Deve retornar 500
  console.log(Joao.saldo); // Deve retornar 600

  console.log(Transacao.deposito(Lennon, 3, "02/07/2022", 650)); // Deve retornar {mensagem: "Depósito realizado com sucesso!"}

  console.log(Lennon.historico[1]); // Deve retornar {idDeposito: 3, dataDoDeposito: "02/07/2022", valorDoDeposito: 650, tipo: "recebimento"}

  console.log(Lennon.saldo); // Deve retornar 1150

  console.log(Transacao.pagamentoSalario(Maria, Joao, 4, "22/07/2022", 1100)); // Deve retornar {mensagem: "Seu limite máximo para este tipo de operação é de 1000. Entre em contato com o banco."}

  console.log(Transacao.pagamentoSalario(Joao, Maria, 5, "23/07/2022", 700)); // Deve retornar {mensagem: "Saldo insuficiente para realizar o pagamento!"}

  console.log(Transacao.pagamentoSalario(Maria, Joao, 6, "22/12/2022", 900)); // Deve retornar {mensagem: "Pagamento realizado com sucesso!"}

  console.log(Lennon.historico); // Deve retornar [{idTransacao: 2, dataDeTransacao: "20/07/2022", valorDaTransferencia: 500, tipo: "pagamento"}, {idDeposito: 3, dataDoDeposito: '02/07/2022', valorDoDeposito: 650, tipo: 'recebimento'}]

  console.log(Joao.historico); // Deve retornar [{idTransacao: 2, dataDeTransacao: "20/07/2022", valorDaTransferencia: 500, tipo: "recebimento"}, {idPagamento: 6, dataDoPagamento: '22/12/2022', valorDoSalario: 900, tipo: 'recebimento'}]

  console.log(Maria.saldo); // Deve retornar 4100
  console.log(Maria.historico); // Deve retornar [{idPagamento: 6, dataDoPagamento: "22/12/2022", valorDoSalario: 900, tipo: "pagamento"}]

  console.log(Joao.historico[1]); // Deve retornar {idPagamento: 6, dataDoPagamento: "22/12/2022", valorDoSalario: 900, tipo: "recebimento"}
}

testes()
```

## Referências
[Documentação do instanceof](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/instanceof)


## Envio

Faça o push do código para o seu repositório GitHub e implemente-o GitHub pages. Coloque seu repositório como **Privado** e adicione em **Configurações > Colaboradores e Times**, o time **team-m2-correcoes**. No Canvas, por favor, envie sua url do GitHub Pages: (ex: https://nomedeusuario.github.io/oregon-trail-inheritance) e envie o link do seu repositório nos comentários.
