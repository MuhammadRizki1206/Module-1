class Hero {
  constructor(name, type, hp) {
    this.name = name;
    this.type = type;
    this.hp = hp;
  }
}

//eudora
class Mage extends Hero {
  constructor(name, type, hp, magicPower) {
    super(name, type, hp);
    this.magicPower = magicPower;
  }
  getHeroInfo() {
    return `Mage Hero -  Name: ${this.name}, Type: ${this.type}, HP: ${this.hp}, Magic Power: ${this.magicPower}`;
    return {
      name: this.name,
      type: this.type,
      hp: this.hp,
      magicPower: this.magicPower,
    };
  }
}

//Alucard
class Wariorr extends Hero {
  constructor(name, type, hp, physicalDefense) {
    super(name, type, hp);
    this.physicalDefense = physicalDefense;
  }
  getHeroInfo() {
    return `Warrior Hero -  Name: ${this.name}, Type: ${this.type}, HP: ${this.hp}, Physical Defense: ${this.physicalDefense}`;

    return {
      name: this.name,
      type: this.type,
      hp: this.hp,
      physicalDefense: this.physicalDefense,
    };
  }
}

const mageHero = new Mage("Eudora", "Electric Mage", 1500, 500);
console.log(mageHero.getHeroInfo());

const wariorrHero = new Wariorr("Alucard", "Demon Hunter", 2700, 700);
console.log(wariorrHero.getHeroInfo());
