class Traveler {
  constructor(name = "") {
    this._name = name;
    this._food = 1;
    this._isHealthy = true;
  }
  hunt() {
    return (this._food += 2);
  }
  eat() {
    return this._food > 0 ? this._food-- : (this._isHealthy = false);
  }
}

class Wagon {
  constructor(capacity = 0) {
    this._capacity = capacity;
    this._passageiros = [];
  }

  getAvailableSeatCount() {
    const capacity = this._capacity;
    const passageiros = this._passageiros.length;
    return capacity - passageiros;
  }
  join(traveler) {
    const capacity = this._capacity;
    const passageiros = this._passageiros;
    if (capacity > passageiros.length) return passageiros.push(traveler);
  }
  shouldQuarantine() {
    const passageiros = this._passageiros;
    const isHealty = passageiros.every(
      (traveler) => traveler._isHealthy === true
    );
    return !isHealty;
  }
  totalFood() {
    const passageiros = this._passageiros;
    const totalFood = passageiros.reduce(
      (acc, traveler) => (acc += traveler._food),
      0
    );
    return totalFood;
  }
}

class Hunter extends Traveler {
  constructor(name = "") {
    super(name);
    this._food = 2;
    this._isHealthy = true;
  }
  hunt() {
    this._food += 5;
  }
  eat() {
    if (this._food > 2) {
      return (this._food -= 2);
    }
    this._food = 0;
    this._isHealthy = false;
  }
  giveFood(traveler, numOfFoodUnits) {
    if (numOfFoodUnits <= this._food) {
      traveler._food += numOfFoodUnits;
      this._food -= numOfFoodUnits;
    }
  }
}

class Doctor extends Traveler {
  constructor(name = "") {
    super(name);
    this._food = 1;
    this._isHealthy = true;
  }
  heal(traveler) {
    return (traveler._isHealthy = true);
  }
}

// Cria uma carroça que comporta 4 pessoas
let wagon = new Wagon(4);
// Cria cinco viajantes
let henrietta = new Traveler("Henrietta");
let juan = new Traveler("Juan");
let drsmith = new Doctor("Dr. Smith");
let sarahunter = new Hunter("Sara");
let maude = new Traveler("Maude");

console.log(
  `#1: There should be 4 available seats. Actual: ${wagon.getAvailableSeatCount()}`
);

wagon.join(henrietta);
console.log(
  `#2: There should be 3 available seats. Actual: ${wagon.getAvailableSeatCount()}`
);

wagon.join(juan);
wagon.join(drsmith);
wagon.join(sarahunter);

wagon.join(maude); // Não tem espaço para ela!
console.log(
  `#3: There should be 0 available seats. Actual: ${wagon.getAvailableSeatCount()}`
);

console.log(`#4: There should be 5 total food. Actual: ${wagon.totalFood()}`);

sarahunter.hunt(); // pega mais 5 comidas
drsmith.hunt();

console.log(`#5: There should be 12 total food. Actual: ${wagon.totalFood()}`);

henrietta.eat();
sarahunter.eat();
drsmith.eat();
juan.eat();
juan.eat(); // juan agora está doente (sick)

console.log(
  `#6: Quarantine should be true. Actual: ${wagon.shouldQuarantine()}`
);
console.log(`#7: There should be 7 total food. Actual: ${wagon.totalFood()}`);

drsmith.heal(juan);
console.log(
  `#8: Quarantine should be false. Actual: ${wagon.shouldQuarantine()}`
);

sarahunter.giveFood(juan, 4);
sarahunter.eat(); // Ela só tem um, então ela come e fica doente

console.log(
  `#9: Quarantine should be true. Actual: ${wagon.shouldQuarantine()}`
);
console.log(`#10: There should be 6 total food. Actual: ${wagon.totalFood()}`);
