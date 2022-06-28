// Exercício 1
function removeChar(str) {
  return str.substr(1, str.length - 2);
}

// Exercício 2
function solution(str) {
  let string = "";
  for (i = str.length - 1; i >= 0; i--) {
    string += str[i];
  }
  return string;
}

// Exercício 3
function numberToString(num) {
  return num.toString();
}
