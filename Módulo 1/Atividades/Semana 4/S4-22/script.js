// Exercício 1
function nextId(ids) {
  let id = "0";

  for (i = 0; i < ids.length; i++) {
    if (ids.includes(i) === false) {
      return i;
    }
    id = ids[i];
  }
  return id + 1;
}

// Exercício 2
function roundToNext5(n) {
  return Math.ceil(n / 5) * 5;
}
