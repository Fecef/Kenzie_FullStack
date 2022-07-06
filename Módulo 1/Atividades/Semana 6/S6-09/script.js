const carros = [
  {
    modelo: "Ka",
    marca: "Ford",
    ano: "2000",
    cor: "Branco",
    completo: false,
    acessorios: ["Vidro Elétrico"],
    preco: "R$ 6.799,33",
  },
  {
    modelo: "Gol",
    marca: "VW",
    ano: "1996",
    cor: "Preto",
    completo: false,
    acessorios: ["Trava"],
    preco: "R$ 12.199,13",
  },
  {
    modelo: "Palio",
    marca: "Fiat",
    ano: "1995",
    cor: "Verde",
    completo: false,
    acessorios: [],
    preco: "R$ 11.099,11",
  },
  {
    modelo: "Monza",
    marca: "Chevrolet",
    ano: "1993",
    cor: "Vinho",
    completo: false,
    acessorios: [],
    preco: "R$ 14.578,25",
  },
  {
    modelo: "Saveiro",
    marca: "VW",
    ano: "2013",
    cor: "Prata",
    completo: false,
    acessorios: [],
    preco: "R$ 28.399,13",
  },
  {
    modelo: "Gol",
    marca: "VW",
    ano: "1996",
    cor: "Preto",
    completo: true,
    acessorios: ["Alarme", "Trava", "Ar", "Vidro Elétrico"],
    preco: "R$ 14.350,45",
  },
  {
    modelo: "Gol",
    marca: "VW",
    ano: "2013",
    cor: "Preto",
    completo: true,
    acessorios: ["Alarme", "Trava", "Ar", "Vidro Elétrico"],
    preco: "R$ 22.109,21",
  },
  {
    modelo: "Montana",
    marca: "Chevrolet",
    ano: "2011",
    cor: "Azul",
    completo: false,
    acessorios: [],
    preco: "R$ 15.999,13",
  },
  {
    modelo: "Stilo",
    marca: "Fiat",
    ano: "2000",
    cor: "Preto",
    completo: false,
    acessorios: [],
    preco: "R$ 17.251,36",
  },
];

// Exercício 1
function listaCarros(obj) {
  return obj.length;
}
console.log(listaCarros(carros));

// Exercício 2
function totalPreco(obj) {
  let total = 0;
  for (let i = 0; i < obj.length; i++) {
    let precoArray = obj[i].preco.substring(2).split(",");
    let precoNum = Number(precoArray[0]);
    total += precoNum;
  }
  return `A soma do preço de todos veículos é R$ ${total.toFixed(3)},00`;
}
console.log(totalPreco(carros));

// Exercício 3
function carroMarcas(obj, marca) {
  let arr = [];
  for (let i = 0; i < obj.length; i++) {
    if (obj[i].marca === marca) {
      arr.push(obj[i]);
    }
  }
  return arr;
}
console.log(carroMarcas(carros, "VW"));

// Exercício 4
function filtrarPorAcessorio(obj, acess) {
  let arr = [];
  for (let i = 0; i < obj.length; i++) {
    if (obj[i].acessorios.includes(acess)) {
      arr.push(obj[i]);
    }
  }
  return arr;
}
console.log(filtrarPorAcessorio(carros, "Alarme"));

// Exercício 5
function eCarroCompleto(obj) {
  let arr = [];
  for (let i = 0; i < obj.length; i++) {
    if (obj[i].completo) {
      arr.push(obj[i]);
    }
  }
  return arr;
}
console.log(eCarroCompleto(carros));

// Exercício 6
function adicionarCarro(modelo, marca, ano, cor, completo, acessorios, preco) {
  carros.push({
    modelo: modelo,
    marca: marca,
    ano: ano,
    cor: cor,
    completo: completo,
    acessorios: acessorios,
    preco: preco,
  });
  return carros;
}
console.log(
  adicionarCarro(
    "Prisma",
    "Chevrolet",
    "2011",
    "Verlmelho",
    true,
    ["Vidro Eleétrico", "Ar-Condicionado", "Direção Hidráulica"],
    "R$ 25.000"
  )
);

// Exercício 7
function removeCarro(obj, indice) {
  let newObj = obj.filter(function (value, index) {
    return index !== indice;
  });

  return newObj;
}
console.log(removeCarro(carros, 8));

// Exercício 8
function contarCarrosNovos(obj) {
  let newObj = obj.filter(function (value) {
    let anoCarro = 2022 - value.ano;
    return anoCarro < 10;
  });
  return newObj.length;
}
console.log(contarCarrosNovos(carros));

// Exercício 9
function contarCarrosVelhos(obj) {
  let newObj = obj.filter(function (value) {
    let anoCarro = 2022 - value.ano;
    return anoCarro > 10;
  });
  return newObj.length;
}
console.log(contarCarrosVelhos(carros));

// Exercício 10
function insereDono(obj, posicao, pessoa) {
  obj[posicao].dono = pessoa;
  return obj;
}
console.log(insereDono(carros, 5, "Felipe"));
