let datas = ["João", "Matheus", "Julia", "Lucas", "Carlos"];

function analyticsData(str, arr) {
  if (!arr.includes(str)) {
    arr.push(str);
    return `Como o usuário não foi encontrado, foi inserido dentro da lista, segue a nova estrutura: ${arr}`;
  }
  return `O usuário ${str} existe na lista e está na ${arr.indexOf(
    str
  )}º posição.`;
}
console.log(analyticsData("Junior", datas));
