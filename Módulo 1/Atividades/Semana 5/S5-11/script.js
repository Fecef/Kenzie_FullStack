// Exercício 1
const bigBoss = [
  ["Nome", "Boss"],
  ["Idade", 89],
  ["Cidade", "Rio de Janeiro"],
  ["Estado", "RJ"],
  ["Ano de Nascimento", 1933],
];

let password = "";

function generatePassword(data1, data2) {
  return (password = data1 + data2);
}
console.log(generatePassword(bigBoss[0][1], bigBoss[2][1]));

// Exercício 2
function reversePassword() {
  password = password.split("").reverse().join("");
  return password;
}
console.log(reversePassword());

// Exercício 3
function camelPassword() {
  let arrayPassword = password.split("");
  for (let i = 0; i < password.length; i++) {
    if (i % 2 === 0) {
      arrayPassword[i] = arrayPassword[i].toUpperCase();
    }
  }
  password = arrayPassword.join("");
  return password;
}
console.log(camelPassword());
