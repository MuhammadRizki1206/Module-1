class Employee {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class FulltimeEmployee extends Employee {
  constructor(name, age) {
    super(name, age);
    this.salary = 0;
    this.time = 0;
  }

  addWorkingHour(hour) {
    this.time = this.time + hour;
  }

  calculateSalary() {
    if (this.time > 6) {
      this.salary = this.time * 175000;
    } else {
      this.salary = this.time * 100000;
    }
  }
}

class ParttimeEmployee extends Employee {
  constructor(name, age) {
    super(name, age);
    this.salary = 0;
    this.time = 0;
  }
  addWorkingHour(hour) {
    this.time = this.time + hour;
  }
  calculateSalary() {
    if (this.time > 6) {
      this.salary = this.time * 80000;
    } else {
      this.salary = this.time * 50000;
    }
  }
}

const fullTimeEmployee = new FulltimeEmployee("Rizki", 18);
fullTimeEmployee.addWorkingHour(8);
fullTimeEmployee.calculateSalary();
console.log(fullTimeEmployee);

const partTimeEmployee = new ParttimeEmployee("Budi", 18);
partTimeEmployee.addWorkingHour(8);
partTimeEmployee.calculateSalary();
console.log(partTimeEmployee);


//Shooting Game
class Player{
    constructor(name) {
        this.name = name
        this.health = 100
        this.power = 100
    }

    damage(power) {
        this.health -= power
    }

    useItem(item) {
        this.health += item.health
        this.power += item.power
    }

    showStatus() {
        console.log(
            this.name +
            " (health => " +
            this.health +
            ", Power => " +
            this.power +
            ")"
        )
    }
}

class ShootingGame {
    constructor(player1, player2) {
        this.player1 = player1
        this.player2 = player2
        this.currentPlayer = player1
    }

    getRandomItem() {
        return{
            health: Math.floor(Math.random() * 2) * 10,
            power: Math.floor(Math.random() * 2) * 10,
        }
    }

    start() {
        while (this.player1.health > 0 && this.player2.health > 0) {
            console.log("Current player : " + this.currentPlayer.name)
            this.player1.showStatus()
            this.player2.showStatus()
        }
    }
}
