// Exercício 1
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  if (mpg * fuelLeft >= distanceToPump) {
    return true;
  }
  return false;
};

// Exercício 2
function updateLight(current) {
  switch (current) {
    case "green":
      return "yellow";
    case "yellow":
      return "red";
    default:
      return "green";
  }
}

// Exercício 3
function remainder(n, m) {
  let result = 0;
  n > m ? (result = n % m) : (result = m % n);
  return result;
}

// Exercício 4
function lovefunc(flower1, flower2) {
  return flower1 + (flower2 % 2) === 0 ? false : true;
}
