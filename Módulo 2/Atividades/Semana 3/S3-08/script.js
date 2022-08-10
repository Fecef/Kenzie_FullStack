class Villager {
  constructor(name) {
    this.name = name;
    this._health = 50;
    this.defense = 0;
    this.attack = 0;
    this.isAlive = true;
  }

  get health() {
    return this._health;
  }

  set health(value) {
    if (this.health - value <= 0) {
      this._health = 0;
      this.isAlive = false;
    } else {
      this._health -= value;
    }
  }

  normalAttack = (target) => {
    if (target.health === 0) {
      return `${target.name} ja esta morto!!`;
    }
    if (this.attack - target.defense > 0) {
      target.health -= this.attack - target.defense;
    }

    if (target.health > 0) {
      return `${target.name} ficou com ${target.health} de vida`;
    }

    return `${target.name} morreu!!`;
  };
}

class Knight extends Villager {
  constructor(name) {
    super(name);
    this.defense = 10;
    this._health = 100;
    this.attack = 15;
  }
}

class Mage extends Villager {
  constructor(name) {
    super(name);
    this.attack = 10;
    this.mana = 100;
  }

  fireBallAttack(target) {
    const manaCost = 25;
    const damage = 30;
    if (target.health === 0) {
      return `${target.name} ja esta morto!!`;
    }
    if (this.mana > 30) {
      this.mana -= manaCost;
      return target.health - damage;
    }
    return "Mana insuficiente.";
  }
}
