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

// Criar uma carroça que comporta 2 pessoas
const wagon = new Wagon(2);
// Criar três viajantes
const henrietta = new Traveler("Henrietta");
const juan = new Traveler("Juan");
const maude = new Traveler("Maude");

console.log(`${wagon.getAvailableSeatCount()} should be 2`);

wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);

wagon.join(juan);
wagon.join(maude); // Não tem espaço para ela!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);

henrietta.hunt(); // pega mais comida
juan.eat();
juan.eat(); // juan agora está com fome (doente)

console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);
