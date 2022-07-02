// Exercício 1
function binRota(arr) {
  let novoArr = [];
  for (let i = 0; i < arr.length; i++) {
    i % 2 !== 0 ? arr[i].reverse() : false;
    for (let j = 0; j < arr[i].length; j++) {
      novoArr.push(arr[i][j]);
    }
  }
  return novoArr;
}

// Exercício 2
function calorie(member) {
  let formulaMen = 10 * member[4] + 6.25 * member[3] - 5 * member[2] + 5;
  let formulaWoman = 10 * member[4] + 6.25 * member[3] - 5 * member[2] - 161;
  let rmr = 0;

  member[1] === "m" ? (rmr = formulaMen) : (rmr = formulaWoman);

  switch (member[5]) {
    case "little activity":
      rmr *= 1.2;
      break;
    case "moderately active":
      rmr *= 1.55;
      break;
    case "very active":
      rmr *= 1.7;
      break;
    case "extremely active":
      rmr *= 1.9;
      break;
  }
  rmr = Math.round(rmr * 100) / 100;
  rmr = rmr.toFixed(2);

  return `${member[0]}´s daily calorie requirement is ${rmr} kcal.`;
}

// Exercício 3
function pairs(ar) {
  ar.length % 2 !== 0 ? ar.pop() : false;
  let maxEven = ar.length / 2;

  for (let i = 0; i < ar.length; i += 2) {
    if (ar[i] - ar[i + 1] === -1 || ar[i] - ar[i + 1] === 1) {
      continue;
    }
    maxEven--;
  }

  return maxEven;
}
