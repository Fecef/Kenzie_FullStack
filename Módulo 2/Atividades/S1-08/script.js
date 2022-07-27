// Método Map ---------

const arrayMap = [1, 2, 3, 4, 5]; //esse é o array que você terá que iterar

// função callback
// Ela apenas imprime o elemento na posição do index e de que array ele veio
function callbackMap(element, index, array) {
  return `Número ${element} no index: ${index}, veio desse array: ${array}`;
}

function map(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    result.push(callback(element, i, array));
  }
  return result;
}

console.table(map(arrayMap, callbackMap));

//Método Filter ---------

const arrayFilter = [1, 2, 3, 4, 5]; //esse é o array que você terá que iterar

// função callback
// Ela apenas imprime o elemento que for maior que 2
function callbackFilter(element, index, array) {
  if (element > 2 && index && array.length > 2) {
    return true;
  }
}

function filter(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const biggerThanTwo = callback(element, i, array);

    if (biggerThanTwo) {
      result.push(element);
    }
  }
  return result;
}

console.log(filter(arrayFilter, callbackFilter));

//Método Reduce ---------

const arrayReduce = [1, 2, 3, 4, 5]; //esse é o array que você terá que iterar

// função callback
// Ela apenas soma os valores, como um acumulador mesmo
function callbackReduce(acumulator, valorAtual) {
  return acumulator + valorAtual;
}

function reduce(array, callback, initialValue = 0) {
  let result = initialValue;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    result += element;
  }
  return result;
}

console.log(reduce(arrayReduce, callbackReduce));
console.log(reduce(arrayReduce, callbackReduce, 50));
