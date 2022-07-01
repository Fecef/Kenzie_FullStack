let garden = [
  [0, 0, 0, "G"],
  [0, 0, "G", 0],
  [0, "G", 0, 0],
  ["G", 0, 0, 0],
];

function trimTheGrass(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === "G") {
        arr[i][j] = 0;
      }
    }
  }

  return `Tarefa concluída.\n ${arr}`;
}
console.log(trimTheGrass(garden));
