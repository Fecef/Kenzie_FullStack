function aliasGen(name1, name2) {
  // Filtrando nomes inválidos.
  if (/\d/.test(name1[0]) || /\d/.test(name2[0])) {
    return "Your name must start with a letter from A - Z.";
  }
  // Transformando primeiras letras em maiúsculas.
  name1 = name1.replace(name1[0], name1[0].toUpperCase());
  if (name2.charAt(0) !== "n") {
    name2 = name2.replace(name2[0], name2[0].toUpperCase());
  }
  // Comparando as letras inciais e reescrevendo.
  for (let keys in firstName) {
    if (name1.charAt(0) === firstName[keys].charAt(0)) {
      name1 = name1.replace(name1, firstName[keys]);
    }

    if (name2.charAt(0) === surname[keys].charAt(0)) {
      name2 = name2.replace(name2, surname[keys]);
    }
  }
  return name1 + " " + name2;
}

// Exercício 2
function greet(language) {
  let welcome = {
    english: "Welcome",
    czech: "Vitejte",
    danish: "Velkomst",
    dutch: "Welkom",
    estonian: "Tere tulemast",
    finnish: "Tervetuloa",
    flemish: "Welgekomen",
    french: "Bienvenue",
    german: "Willkommen",
    irish: "Failte",
    italian: "Benvenuto",
    latvian: "Gaidits",
    lithuanian: "Laukiamas",
    polish: "Witamy",
    spanish: "Bienvenido",
    swedish: "Valkommen",
    welsh: "Croeso",
    IP_ADDRESS_INVALID: "Welcome",
    IP_ADDRESS_NOT_FOUND: "Welcome",
    IP_ADDRESS_REQUIRED: "Welcome",
  };
  return welcome[language];
}

// Exercício 3
function well(x) {
  let g = 0;
  for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < x[i].length; j++) {
      if (typeof x[i][j] === "string") {
        if (x[i][j].charAt(0) === "g" || x[i][j].charAt(0) === "G") {
          g++;
        }
      }
    }
  }
  if (g >= 3) {
    return "I smell a series!";
  } else if (g >= 1) {
    return "Publish!";
  }
  return "Fail!";
}

// Exercício 4
function getFirstPython(list) {
  console.log(list);
  for (let key in list) {
    if (list[key].language === "Python") {
      return `${list[key].firstName}, ${list[key].country}`;
    }
  }
  return "There will be no Python developers";
}

// Exercício 5
function killer(suspectInfo, dead) {
  let count = 0;

  for (let key in suspectInfo) {
    for (let i = 0; i < dead.length; i++) {
      if (suspectInfo[key].includes(dead[i])) {
        count++;
      }
      if (count === dead.length) {
        return key;
      }
    }
  }
}
