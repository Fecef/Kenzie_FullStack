// Exercício 1
function largestPairSum(numbers) {
  let maior1 = 0;
  let maior2 = 0;

  numbers.sort(function (a, b) {
    if (a > b) return 1;
    if (b > a) return -1;
    return 0;
  });

  maior1 = numbers[numbers.length - 1];
  maior2 = numbers[numbers.length - 2];

  return maior1 + maior2;
}

// Exercício 2
sampleArray.forEach(function (x) {
  counts[x] = (counts[x] || 0) + 1;
});
