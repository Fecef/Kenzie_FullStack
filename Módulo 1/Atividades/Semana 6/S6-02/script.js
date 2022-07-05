// Exercício 1
function Hero(name) {
  this.name = name || "Hero";
  this.position = "00";
  this.health = 100;
  this.damage = 5;
  this.experience = 0;
}

// Exercício 2
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

// Exercício 3
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
