const grades = [9, 10, 8, 2, 1, 9, 0, 6, 7, 3, 8];
const media = 8;

// Faça uma função aboveAverageGrades que recebe um array de notas como parâmetro e retorna um array que possui apenas as notas acima da média
function aboveAverageGrades() {
  let aboveAverage = [];
  aboveAverage = grades.filter(function (nota) {
    return nota >= 8;
  });
  return aboveAverage;
}
aboveAverageGrades();

// Faça uma função averageGrades que recebe um array de notas como parâmetro e retorna um array que possui apenas as notas na média.
function averageGrades() {
  let average = [];
  average = grades.filter(function (nota) {
    return nota === 8;
  });
  return average;
}
averageGrades();

// Faça uma função belowAverageGrades que recebe um array de notas como parâmetro e retorna um array que possui apenas as notas abaixo da média.
function belowAverageGrades() {
  let belowAverage = [];
  belowAverage = grades.filter(function (nota) {
    return nota < 8;
  });
  return belowAverage;
}
belowAverageGrades();

// Faça uma função sumOfAllGrades que recebe um array de notas como parâmetro e retorna a soma total das notas.
function sumOfAllGrades() {
  let sum = 0;
  sum = grades.reduce((a, b) => a + b);
  return sum;
}
sumOfAllGrades();

// Faça uma função averageOfGrades que recebe um array de notas como parâmetro e retorna a média de todas as notas.
function averageOfGrades() {
  let averageAllGrades = 0;
  let total = 0;
  total = sumOfAllGrades();
  averageAllGrades = total / grades.length;
  return averageAllGrades;
}
averageOfGrades();

// Faça uma função maxGrade que recebe um array de notas como parâmetro e retorne a maior nota.
function maxGrade() {
  let max = 0;
  grades.forEach((nota) => {
    if (nota > max) {
      max = nota;
      return nota;
    }
  });
  return max;
}
maxGrade();

// Faça uma função minGrade que recebe um array de notas como parâmetro e retorne a menor nota.
function minGrade() {
  let min = maxGrade();
  grades.forEach((nota) => {
    if (nota < min) {
      min = nota;
      return min;
    }
  });
  return min;
}
minGrade();
