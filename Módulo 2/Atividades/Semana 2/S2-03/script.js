const itemArray = [
  {
    id: 1,
    product: "Pão",
    price: 5.8,
    quantity: 3,
    section: "Padaria",
  },
  {
    id: 2,
    product: "Leite",
    price: 3.0,
    quantity: 1,
    section: "Derivados de Leite",
  },
  {
    id: 3,
    product: "Carne",
    price: 10.0,
    quantity: 2,
    section: "Carne",
  },
  {
    id: 4,
    product: "Tomate",
    price: 4.0,
    quantity: 5,
    section: "Hortifruti",
  },
];

// 1 - Alterar o valor da propriedade price quando o id é maior que 2.
function changePrice(array) {
  const result = array.map((element) => {
    let { id, price } = element;
    if (id > 2) price = 20;
    return { ...element, price };
  });
  return result;
}
changePrice(itemArray);

// 1 - Retornar apenas os itens que possuem id <= 2.
// 2 - Retornar o valor da variável result.
const lessThanTwo = (array) => {
  const result = array.filter((element) => {
    const { id } = element;
    return id <= 2;
  });
  return result;
};
lessThanTwo(itemArray);

// 1 - Retornar apenas o item onde product === 'Leite'.
// 2 - Retornar o valor da variável result.
const findProduct = (array) => {
  const result = array.find((element) => {
    const { product } = element;
    return product === "Leite";
  });
  return result;
};
findProduct(itemArray);

// 1 - Incrementar a variável acc, com o resultado de price*quantity.
// 2 - Retornar o valor armazenado em acc.
// 3 - Retornar o valor de totalList.
function reduceArr(array) {
  const totalList = array.reduce((acc, { price, quantity }) => {
    acc += price * quantity;
    return acc;
  }, 0);
  return totalList;
}
reduceArr(itemArray);

// 1 - Crie um filtro onde o resultado traz apenas os itens que tem o price maior que 3.
function challange(array) {
  const result = array.filter((element) => {
    let { price } = element;
    if (price > 3) return element;
  });
  return result;
}
challange(itemArray);

// 2 - Altere o valor do item leite para 4.
function changeMilk(array) {
  const result = array.map((element) => {
    let { product, price } = element;
    if (product === "Leite") price = 4;
    return { ...element, price };
  });
  return result;
}
changeMilk(itemArray);

// 3 - Faça o total de todos os itens da section 'Padaria'.
const totalPadaria = (array) => {
  let result = array.reduce((acc, { quantity, section }) => {
    if (section === "Padaria") {
      acc += quantity;
    }
    return acc;
  }, 0);
  return result;
};
totalPadaria(itemArray);
