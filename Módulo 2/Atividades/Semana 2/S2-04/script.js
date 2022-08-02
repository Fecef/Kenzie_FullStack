// https://www.codewars.com/kata/582746fa14b3892727000c4f/train/javascript
function countDevelopers(list) {
  const result = list.reduce((acc, { continent, language }) => {
    if (continent === "Europe" && language === "JavaScript") {
      acc++;
    }
    return acc;
  }, 0);

  return result;
}

// https://www.codewars.com/kata/5827acd5f524dd029d0005a4/train/javascript
function isRubyComing(list) {
  const result = list.some((element) => {
    const { language } = element;
    return language === "Ruby";
  });
  return result;
}

// https://www.codewars.com/kata/5a2cb4bff28b820c33000082/train/javascript
function whoseBicycle(diary1, diary2, diary3) {
  let acc = 0;
  let son = 0;
  const diaries = [];

  diaries.push(diary1, diary2, diary3);

  diaries.forEach((element, index) => {
    const { algebra, history, physics, geography, chemistry } = element;
    const total = algebra + history + physics + geography + chemistry;

    if (total > acc) {
      son = index;
      acc = total;
    }

    if (total === acc) {
      son = index;
      acc = total;
    }
  });

  switch (son) {
    case 0:
      return "I need to buy a bicycle for my first son.";
    case 1:
      return "I need to buy a bicycle for my second son.";
    case 2:
      return "I need to buy a bicycle for my third son.";
  }
}

// https://www.codewars.com/kata/54e8c3e89e2ae6f4900005a1/train/javascript
questions.forEach((element) => {
  element.usersAnswer = null;
});

// https://www.codewars.com/kata/5a0c5b3206d5b696940000b8/train/javascript

function ballCollector(detritus) {
  const weight = detritus.reduce((acc, element) => {
    return element === 58 ? (acc += element) : acc;
  }, 0);
  return { weight: weight };
}

// https://www.codewars.com/kata/57ed4cef7b45ef8774000014/train/javascript
function boredom(staff) {
  let boreTotal = 0;

  for (let prop in staff) {
    switch (staff[prop]) {
      case "accounts":
        boreTotal += 1;
        break;
      case "finance":
        boreTotal += 2;
        break;
      case "canteen":
        boreTotal += 10;
        break;
      case "regulation":
        boreTotal += 3;
        break;
      case "trading":
        boreTotal += 6;
        break;
      case "change":
        boreTotal += 6;
        break;
      case "IS":
        boreTotal += 8;
        break;
      case "retail":
        boreTotal += 5;
        break;
      case "cleaning":
        boreTotal += 4;
        break;
      case "pissing about":
        boreTotal += 25;
        break;
    }
  }
  if (boreTotal <= 80) {
    return "kill me now";
  } else if (boreTotal < 100) {
    return "i can handle this";
  }
  return "party time!!";
}
