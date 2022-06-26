// Exercício 1
function fakeBin(x) {
  x = x.replaceAll(/[0-4]/g, "0");
  x = x.replaceAll(/[5-9]/g, "1");

  return console.log(x);
}
