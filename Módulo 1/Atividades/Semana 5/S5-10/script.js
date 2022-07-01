let texto = "pneumoultramicroscopicossilicovulcanoconiótico";

function uppercase() {
  return texto.toUpperCase();
}
console.log(uppercase());

function oPorY() {
  return texto.replaceAll("o", "y");
}
console.log(oPorY());

function removeRepeatedChar() {
  let arr = texto.split("");
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr[j] = "";
      }
    }
  }
  return arr.join("");
}
console.log(removeRepeatedChar());

function inverterString() {
  let textoArray = texto.split("").reverse().join("");
  return textoArray;
}
console.log(inverterString());

function letraInicioMaiusculo() {
  let textoArray = texto.split(" ");
  return textoArray[0].charAt(0).toUpperCase() + textoArray[0].slice(1);
}
console.log(letraInicioMaiusculo());
