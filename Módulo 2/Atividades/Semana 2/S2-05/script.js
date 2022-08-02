// https://www.codewars.com/kata/581b30af1ef8ee6aea0015b9/train/javascript/62e946eefd9c471f8ce559c4
const countWins = (winnerList, country) =>
  winnerList.filter((element) => element.country === country).length;

// https://www.codewars.com/kata/51c7d8268a35b6b8b40002f2/train/javascript
function solution(pairs) {
  let str = "";
  for (let keys in pairs) {
    str += `${keys} = ${pairs[keys]},`;
  }
  return str.slice(0, str.length - 1);
}

// https://www.codewars.com/kata/58ff1c8b13b001a5a50005b4/train/javascript
function sortAnimal(animal) {
  if (animal == null) return null;

  animal.sort((a, b) => {
    return a.numberOfLegs - b.numberOfLegs;
  });
  animal.sort((a, b) => {
    if (a.numberOfLegs === b.numberOfLegs) {
      return a.name < b.name ? -1 : 1;
    }
  });
  return animal;
}

// https://www.codewars.com/kata/5b6375f707a2664ada00002a/train/javascript
const whosOnline = (friends) => {
  const status = { online: [], offline: [], away: [] };

  for (let i = 0; i < friends.length; i++) {
    if (friends[i].status === "offline") {
      status.offline.push(friends[i].username);
    } else if (
      friends[i].status === "online" &&
      friends[i].lastActivity <= 10
    ) {
      status.online.push(friends[i].username);
    } else {
      status.away.push(friends[i].username);
    }
  }

  if (status.online.length === 0) {
    delete status.online;
  }

  if (status.offline.length === 0) {
    delete status.offline;
  }

  if (status.away.length === 0) {
    delete status.away;
  }

  return status;
};

// https://www.codewars.com/kata/56c22c5ae8b139416c00175d/train/javascript
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
