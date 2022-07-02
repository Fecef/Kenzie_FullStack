// Exercício 1
function abbrevName(name) {
  let nameArray = [];
  nameArray = name.split(" ");

  for (let i = 0; i < nameArray.length; i++) {
    nameArray[i] = nameArray[i][0];
  }
  return nameArray.join(".").toUpperCase();
}

// Exercício 2
function removeEveryOther(arr) {
  return arr.filter(function (value, index) {
    return index % 2 === 0;
  });
}

// Exercício 3
function fireFight(s) {
  s = s.split(" ");
  for (let i = 0; i < s.length; i++) {
    s[i] === "Fire" ? (s[i] = "~~") : false;
  }
  return s.join(" ");
}
    