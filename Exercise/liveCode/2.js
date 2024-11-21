class Employee {
  constructor(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }
}

class Manager extends Employee {
  constructor(name, age, salary, teamSize) {
    super(name, age, salary);
    this.teamSize = teamSize;
  }
  calculateBonus() {
    return this.salary * this.teamSize;
  }
  getDetails() {
    return `Manager - Name: ${this.name}, Age: ${this.age}, Salary: ${this.salary}, Team size: ${this.teamSize}`;
    return {
      name: this.name,
      age: this.age,
      salary: this.salary,
      teamSize: this.teamSize,
    };
  }
}

class Developer extends Employee {
  constructor(name, age, salary) {
    super(name, age, salary);
    this.programmingLanguage = "";
  }
  addLanguage(programmingLanguage) {
    this.programmingLanguage = programmingLanguage + ", " + programmingLanguage
  }

  getDetails() {
    return `Developer - Name: ${this.name}, Age: ${this.age}, Salary: ${this.salary}, Progamming Languages: ${this.programmingLanguage}`;
  }
}

const manager = new Manager("Alice", 35, 8000, 5)
const developer = new Developer("rizki", 21, 3000);

developer.addLanguage("Phyton");
developer.addLanguage("JavaScript");

console.log(manager.getDetails());
console.log(developer.getDetails());
console.log(`Bonus for ${manager.name}: ${manager.calculateBonus()}`)
