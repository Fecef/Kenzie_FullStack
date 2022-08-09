// https://www.codewars.com/kata/5827bc50f524dd029d0005f2/train/javascript
function getFirstPython(list) {
  console.log(list);
  for (let key in list) {
    if (list[key].language === "Python") {
      return `${list[key].firstName}, ${list[key].country}`;
    }
  }
  return "There will be no Python developers";
}
// https://www.codewars.com/kata/582887f7d04efdaae3000090/train/javascript
function findSenior(list) {
  list.sort((a, b) => b.age - a.age);
  return (result = list.filter(
    (developer, _, array) => array[0].age === developer.age
  ));
}

// https://www.codewars.com/kata/58291fea7ff3f640980000f9/train/javascript
function allContinents(list) {
  const continents = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  const newList = list.map((developer) => developer.continent);
  return continents.every((element) => newList.includes(element));
}

// https://www.codewars.com/kata/582ba36cc1901399a70005fc/train/javascript
function getAverageAge(list) {
  const totalAge = list.reduce((acc, developer) => acc + developer.age, 0);
  const averageAge = totalAge / list.length;
  return Math.round(averageAge);
}

// https://www.codewars.com/kata/5828713ed04efde70e000346/train/javascript
function countLanguages(list) {
  const result = {};

  list.forEach((developer) => {
    const { language } = developer;

    result[`${language}`] == undefined
      ? (result[`${language}`] = 1)
      : result[`${language}`]++;
  });

  return result;
}
