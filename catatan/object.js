// -- create object, add and delete object
//create object
let person = {
  name: "John Doe", // -> "name" = property, "John Doe" = value
  age: 30, // -> "age" = property, 30 = value
};
let newPerson = { ...person };

// add new property
console.log("before add property : ", person);
person.gender = "male";
console.log("after add property : ", person);
console.log("----------------------------------------------");

//modify values
console.log("before modify value : ", person);
person.age = 25;
person.name = "Jane Doe";
person.gender = "female";
console.log("aftyer modify value : ", person);
console.log("--------------------------------------------");

//delete property
console.log("before delete property : ", person);
delete person.gender;
console.log("after delete property : ", person);
console.log("-----------------------------------------------");

//cloning objejct
console.log("cloning into a new object : ", person); // Note = cloningannya harus di atas untuk mengkloning original objectnya
console.log("-----------------------------------------------");

// access property or value
console.log("origin object : ", newPerson);
console.log("access property : ", Object.keys(newPerson));
console.log("access value : ", Object.values(newPerson));
console.log("--------------------------------------------");

// looping object
for (let key in newPerson) {
  console.log(key + " : " + newPerson[key]);
}

// destructuring assigment
const { name, age } = newPerson;
console.log(name);
console.log(age);
console.log("----------------------------------------");

// nested object
const member = {
  username: "John Doe",
  isVerified: false,
  address: {
    street: "Orchard Road",
    zip: 12344,
  },
};
console.log("street : ", member.address.street);
console.log("zip : ", member.address.zip);
console.log("phone : ", member?.address.phone);
console.log("-----------------------------------------");

//keyword "this"
const car = {
  brand: "toyota",
  getBrand: function () {
    return this.brand; //Note = "this" gunanya untuk menunjuk brand
  }, //Note = syntax "this" = this.property
};

console.log(car.getBrand());
console.log("-------------------------------------------");

//case 1
const character = {
  username: "user123",
  health: 100,
  power: 100,
  attack: function () {
    return this.power - 10;
  },
  damage: function (damage) {
    return this.health - damage;
  },
};
const probabiltyDamage = Math.floor(Math.random() * 5);
console.log(
  "karakter menyerang, power berkurang sebanyak : ",
  character.attack()
);
console.log("health berkurang sebanyak : ", character.damage(probabiltyDamage));
console.log("-------------------------------------------");

//Object.assign() -> untuk menggabungkan kedua value
let target = { usernameA: "John" };
let source = { usernameB: "Bob" };
let returnedTarget = Object.assign(target, source);
console.log(returnedTarget);
console.log("-------------------------------------------");

//Object.entries -> untuk menggabungkan dua value menjadi satu array
console.log(Object.entries(returnedTarget));
console.log("-------------------------------------------");

//how to access multiple array 2D
let accessTarget = Object.entries(returnedTarget);
console.log(accessTarget); //Output =  [[ 'usernameA', 'John', ], [ 'usernameB', 'Bob' ] ]
console.log(accessTarget[1]); //Output = [ 'usernameB', 'Bob' ]
console.log(accessTarget[1][1]); //Output = Bob
console.log("-------------------------------------------");

// -- create class
//case 1
class animal {
  constructor(name, age) {
    //Note = constructor gunanya kaya function
    this.name = name;
    this.age = age;
  }
  describe() {
    if (!this.name === undefined || !this.age === undefined) {
      return this.name + " is " + this.age + " years old";
    } else {
      return "check your name or age";
    }
  }
}
let dog = new animal("Buddy", 3); //Note = New gunanya untuk memanggil objek baru
let cat = new animal("Bob", 2);
let mouse = new animal("loki", 1);
console.log(dog.describe());
console.log(cat.describe());
console.log(mouse.describe());
console.log("-------------------------------------------");

//case 2 : library management
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.isAvailable = true;
    this.stock = 10;
  }
  borrowBook() {
    if (this.isAvailable && this.stock > 0) {
      --this.stock;
      this.isAvailable = false;
      console.log("You have borrowed " + this.title + " by " + this.author);
    } else {
      console.log("Sorry, " + this.title + " is currently not available");
    }
  }
  returnBook() {
    this.isAvailable = true;
    console.log("You have returned " + this.title + " Thank You!");
  }
  checkStock() {
    console.log("Quantity of " + this.title + " : " + this.stock);
  }
}

let book = new Book("Harry Potter", "JK Rowlings");
book.borrowBook();
book.returnBook();
book.borrowBook();
book.returnBook();
book.checkStock();
console.log("-------------------------------------------");

//case3 : f&b orders
class Order {
  constructor(name) {
    this.name = name;
    this.items = [];
    this.totalAmount = 0;
  }
  addItems(itemName, price) {
    this.items.push({
      itemName: itemName,
      price: price,
    });
    this.totalAmount += price;
    console.log(this.items);
    console.log();
  }
}

//case4 -> public & private property
class User {
  name; // --> public property
  #email; // --> private property (tidak bisa di akses dari luar)
  //Note = (#) -> private
  constructor(name, email) {
    this.name = name;
    this.#email = email;
  }
  getEmail() {
    return this.#email;
  }
}

let user = new User("John Doe", "johndoe123@example.com");
console.log(user.name);
console.log(user.getEmail());
console.log("-------------------------------------------");
//console.log(user.#email) // --> jika di paksa dicetak, akan error

// setter & getter
class Person {
  constructor(name, count) {
    this.name = name;
    this.count = count;
  }
  get displayName() {
    //Note = set dan get adalah satu kesatuan function
    return this.name;
  }
  set displayName(newName) {
    //Note = set untuk menerima parameter dan get yg mengeksekusinya
    this.name = newName;
  }
  get counter() {
    return this.count - 1;
  }
  set counter(count) {
    this.count = count;
  }
}

let personObj = new Person("Bob", 10);
console.log(personObj.displayName);
console.log(personObj.counter);
// personObj.name = "Jane"
// console.log(personObj.displayName)
console.log("-------------------------------------------");

//inheritance concept =mewarisi
//parents class
class Mammal {
    constructor(name, color) {
      this.name = name;
      this.color = color;
    }
    speak() {
      return this.name + " make a noise,";
    }
  }
  
  //child class
  class Dog extends Mammal {
    constructor(name, color, breed) {
      super(name, color); // memanggil constructor dari parents
      this.breed = breed;
    }
    speak() {
      return this.name + " barks, and have a color " + this.color;
    }
    detail() {
      return {
        name: this.name,
        color: this.color,
        breed: this.breed,
      };
    }
  }
  
  //children class = cat
  class Cat extends Mammal {
    constructor(name, color, race) {
      super(name, color);
      this.race = race;
    }
    speak() {
      return this.name + " meow, and have color " + this.color;
    }
    detail() {
      return {
        name: this.name,
        color: this.color,
        race: this.race,
      };
    }
  }
  
  let myDog = new Dog("Max", "Brown", "Golden Retriever");
  console.log(myDog.speak());
  console.log(myDog.detail());
  
  let myCat = new Cat("Bob", "White", "American Shorthair");
  console.log(myCat.speak());
  console.log(myCat.detail());