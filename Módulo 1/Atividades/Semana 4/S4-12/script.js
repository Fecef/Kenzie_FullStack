// Exercício 1
function findLongest(str) {
  let spl = str.split(" ");
  let longest = 0;

  for (let i = 0; i < spl.length; i++) {
    if (spl[i].length > longest) {
      longest = spl[i].length;
    }
  }
  return longest;
}
// Exercício 2
var health = 100;
var position = 0;
var coins = 0;

function main() {
  rollDice();
  move();
  combat();
  getCoins();
  buyHealth();
  printStatus();
}

// Exercício 3
function cookingTime(eggs) {
  let time = 5;

  if (eggs < 0) {
    console.log("Only positive numbers accepted.");
    return;
  }

  time *= Math.ceil(eggs / 8);
  return time;
}

// Exercício 4
function getCount(str) {
  let qtdeVogais = str.match(/[aeiou]/g);

  if (qtdeVogais === null) {
    return (qtdeVogais = 0);
  }

  return qtdeVogais.length;
}

// Exercício 5
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, "");
}
