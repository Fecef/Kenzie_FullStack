// Exercício 1
function contarOvelhas(num) {
  let string = "";
  let i = 1;
  while (num > i) {
    string += `${i} sheep...`;
    i++;
  }
  return string;
}
console.log(contarOvelhas(20));