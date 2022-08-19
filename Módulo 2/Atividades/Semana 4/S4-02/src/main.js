// Exercício 1
class Veiculo {
  constructor(proprietario, placa, tipoCombustivel, fabricacao) {
    this._proprietario = proprietario;
    this._placa = placa;
    this._tipoCombustivel = tipoCombustivel;
    this._fabricacao = fabricacao;
  }
}

class Automovel extends Veiculo {
  constructor(
    proprietario,
    placa,
    tipoCombustivel,
    fabricacao,
    qtdeLugares,
    qtdePortas
  ) {
    super(proprietario, placa, tipoCombustivel, fabricacao);
    this._qtdeLugares = qtdeLugares;
    this._qtdePortas = qtdePortas;
  }
  refornarInformacoes() {
    return {
      placa: this._placa,
      Ano: this._fabricacao,
      tipoCombustivel: this._tipoCombustivel,
      qtdeLugares: this._qtdeLugares,
      qtdePortas: this._qtdePortas,
      proprietario: this._proprietario,
    };
  }
}

class Caminhao extends Veiculo {
  constructor(proprietario, placa, tipoCombustivel, fabricacao, cargaMaxima) {
    super(proprietario, placa, tipoCombustivel, fabricacao);
    this._cargaMaxima = cargaMaxima;
  }
  refornarInformacoes() {
    return {
      placa: this._placa,
      Ano: this._fabricacao,
      tipoCombustivel: this._tipoCombustivel,
      cargaMaxima: this._cargaMaxima,
      proprietario: this._proprietario,
    };
  }
}

const carro = new Automovel("DSI-1550", 2006, "Flex", 5, 4, "Cleyde");
const caminhao = new Caminhao("SNK-0070", 2022, "Diesel", 4, 2, "50 toneladas");

console.log(carro.refornarInformacoes());
console.log(caminhao.refornarInformacoes());

// Exercício 2
class Agenda {
  constructor(nome) {
    this._nome = nome;
    this._contato = [];
  }

  adicionarContato(pessoa) {
    this._contato.push(pessoa);
    this._contato.sort((a, b) => {
      const nameA = a.nome.toUpperCase();
      const nameB = b.nome.toUpperCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
  }

  removerContato(pessoa) {
    const pessoaIndex = this._contato.findIndex(
      (contato) => pessoa === contato.nome
    );
    this._contato.splice(pessoaIndex, 1);
  }

  listarContatos() {
    this._contato.forEach((contato) => {
      console.log(contato);
    });
  }

  pesquisarContato(pessoa) {
    const contato = this._contato.filter((contato) => pessoa === contato.nome);
    console.log(contato);
  }

  editarContato(nome, novoNome, novoTelefone) {
    const contato = this._contato.filter((contato) => contato.nome === nome);
    contato.forEach((element) => {
      element.nome = novoNome;
      element.telefone = novoTelefone;
    });
  }
}

const agenda = new Agenda("Minha Agenda");
