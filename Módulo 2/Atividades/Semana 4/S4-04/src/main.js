// Exercício 1
class Carrinho {
  constructor() {
    this._valorTotal = 0;
    this._qtdeProdutos = 0;
    this._valorFrete = 50;
    this._itensCarrinho = [
      { nome: "Caderno", preco: 10, disponivel: true },
      { nome: "Estojo", preco: 30, disponivel: false },
      { nome: "Mochila", preco: 70, disponivel: true },
      { nome: "Lapiseira", preco: 5, disponivel: true },
      { nome: "Fichario", preco: 50, disponivel: true },
      { nome: "Borracha", preco: 3, disponivel: false },
      { nome: "Lancheira", preco: 20, disponivel: true },
    ];

    this._valorTotal = this._itensCarrinho.reduce((a, b) => a + b.preco, 0);
    this._qtdeProdutos = this._itensCarrinho.length;
  }
  calculaPrecoPromocional() {
    const total = this._itensCarrinho
      .filter((product) => product.disponivel === true)
      .reduce((a, b) => a + b.preco, 0);

    if (total > 150) this._valorFrete = 0;
  }
  verificarDisponibilidade() {
    const result = this._itensCarrinho.filter(
      (product) => product.disponivel === false
    );
    console.log(result);
  }
}

// Exercício 2
class Estoque {
  constructor(qtdeMinEstoque, qtdeMaxEstoque) {
    this._qtdeMinEstoque = qtdeMinEstoque;
    this._qtdeMaxEstoque = qtdeMaxEstoque;
    this._itensEstoque = {
      eletronicos: [
        { id: 1, nome: "Tv", preco: 1200, estoque: 80 },
        { id: 2, nome: "Computadores", preco: 3000, estoque: 100 },
        { id: 3, nome: "Celulares", preco: 800, estoque: 54 },
        { id: 4, nome: "Fones", preco: 5, estoque: 41 },
        { id: 5, nome: "Webcam", preco: 50, estoque: 36 },
        { id: 6, nome: "Mouse", preco: 3, estoque: 354 },
        { id: 7, nome: "Tablet", preco: 20, estoque: 150 },
        { id: 8, nome: "Mousepads", preco: 2, estoque: 1000 },
        { id: 9, nome: "Headsets", preco: 35, estoque: 80 },
        { id: 10, nome: "Impressoras", preco: 1, estoque: 50 },
        { id: 12, nome: "No-breaks", preco: 14, estoque: 36 },
        { id: 13, nome: "Memória ram", preco: 3, estoque: 12 },
      ],
      materialEscolar: [
        { id: 1, nome: "Caderno", preco: 10, estoque: 80 },
        { id: 2, nome: "Estojo", preco: 30, estoque: 100 },
        { id: 3, nome: "Mochila", preco: 70, estoque: 54 },
        { id: 4, nome: "Lapiseira", preco: 5, estoque: 32 },
        { id: 5, nome: "Fichario", preco: 50, estoque: 20 },
        { id: 6, nome: "Borracha", preco: 3, estoque: 85 },
        { id: 7, nome: "Lancheira", preco: 20, estoque: 100 },
        { id: 8, nome: "Caneta", preco: 2, estoque: 1000 },
        { id: 9, nome: "Cola branca", preco: 35, estoque: 250 },
        { id: 10, nome: "Borracha", preco: 1, estoque: 400 },
        { id: 11, nome: "Lápis de cor", preco: 14, estoque: 63 },
        { id: 12, nome: "Apontador", preco: 3, estoque: 5 },
      ],
      automotivo: [],
      cozinha: [
        { id: 1, nome: "Panela", preco: 10, estoque: 80 },
        { id: 2, nome: "Cafeteira", preco: 30, estoque: 100 },
        { id: 3, nome: "Louça", preco: 70, estoque: 54 },
        { id: 4, nome: "Copos", preco: 5, estoque: 32 },
        { id: 5, nome: "Fogão", preco: 50, estoque: 20 },
        { id: 6, nome: "Geladeira", preco: 1, estoque: 400 },
        { id: 7, nome: "Abridor de garrafa", preco: 14, estoque: 63 },
        { id: 8, nome: "Forno elétrico", preco: 3, estoque: 5 },
      ],
      petShop: [{ id: 1, nome: "Tapete Higiênico", preco: 10, estoque: 80 }],
    };
  }

  verificaEstoque(categoria) {
    const result = this._itensEstoque[categoria].filter(
      (product) => product.estoque <= this._qtdeMinEstoque
    );
    console.log(result);
  }

  adicionarItem(item, categoria) {
    const estoque = this._itensEstoque[categoria];
    const id = estoque.length + 2;
    const hasAlready = estoque.some((product) => product.nome === item.nome);
    item = { id: id, ...item };

    if (hasAlready) {
      const index = estoque.findIndex((product) => product.nome === item.nome);
      return (estoque[index].estoque = item.estoque);
    }
    return estoque.push(item);
  }

  removeItem(id, categoria) {
    const estoque = this._itensEstoque[categoria];
    const index = estoque.findIndex((product) => product.id === id);
    return estoque.splice(index, 1);
  }

  pesquisarItem(id, categoria) {
    const estoque = this._itensEstoque[categoria];
    const index = estoque.findIndex((product) => product.id === id);
    return index === -1 ? false : estoque[index];
  }

  atualizarEstoque(id, categoria, estoque) {
    const product = this.pesquisarItem(id, categoria);
    if (product.estoque < this._qtdeMinEstoque || product === false) {
      return false;
    }
    return (product.estoque = estoque);
  }
}
