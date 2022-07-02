// Exercício 1
function getPlanetName(id) {
  var name;
  switch (id) {
    case 1:
      name = "Mercury";
      break;
    case 2:
      name = "Venus";
      break;
    case 3:
      name = "Earth";
      break;
    case 4:
      name = "Mars";
      break;
    case 5:
      name = "Jupiter";
      break;
    case 6:
      name = "Saturn";
      break;
    case 7:
      name = "Uranus";
      break;
    case 8:
      name = "Neptune";
      break;
  }
}
return name;

// Exercício 2
function removeChar(str) {
  return str.slice(1, str.length - 1);
}

// Exercício 3
function solution(str) {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  return reverseStr;
}

// Exercício 4
function numberToString(num) {
  return num.toString();
}

// Exercício 5
function printArray(array) {
  return array.join(",");
}

// Exercício 6
function derive(coefficient, exponent) {
  return `${coefficient * exponent}x^${exponent - 1}`;
}
