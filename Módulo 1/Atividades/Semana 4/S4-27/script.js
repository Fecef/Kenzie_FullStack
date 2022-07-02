// Exercício 1
function pipeFix(numbers) {
  let novoArr = [];
  for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
    novoArr.push(i);
  }
  return novoArr;
}

// Exercício 2
function match(candidate, job) {
  let wiggle = 0;
  wiggle = candidate.minSalary * 0.1 + job.maxSalary;

  if (candidate.minSalary == null || job.maxSalary == null) {
    throw "Invalid input.";
  } else if (candidate.minSalary <= wiggle) {
    return true;
  }
  return false;
}
// Exercício 3
function crap(x, bags, cap) {
  cap = cap * bags;
  for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < x[i].length; j++) {
      if (x[i].includes("D")) {
        return "Dog!!";
      } else if (x[i][j] === "@") {
        x[i][j] = "_";
        cap--;
      }
    }
  }
  if (cap < 0) {
    return "Cr@p";
  }
  return "Clean";
}
