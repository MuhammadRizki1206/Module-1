//pop -> menghapus elemen terakhir dari sebuah array
let fruits = ["apple", "banana", "orange"];
fruits.pop();
//console.log("after pop ",  fruits)

//push -> menambahkan satu atau lebih dari elemen terakhir
fruits.push("grapes");
//onsole.log("after push last element", fruits)

//shift -> menghapus satu element pertama dari array
fruits.shift();
//console.log("after shift first element", fruits)

//unshift -> menambahkan satu element pertama dari array
fruits.unshift("mango");
//console.log("after unshift first element", fruits)

//untuk mengubah nilai dalam index tertentu
let year = [2000, 2001, 2002];
year[1] = 2024;

//join -> menggabungkan semua element dari array
let fruitsString = fruits.join(", ");
//console.log("after joining fruits : ", fruitsString)

//concat -> menggabungkan dua atau lebih array menjadi satu array baru
let moreFruits = ["pineapple", "watermelon"];
let combined = fruits.concat(moreFruits);
//console.log("After concating 'fruits' with 'more fruits' : ", combined )

//splice -> menambahkan atau menghapus element di tengah array
combined.splice(1, 1, "peach");
//console.log("after spliced : ", fruits)

//map -> membuat array baru dengan hasil dari memanggil array sebelumnya
let mappedCapitalizeFruit = combined.map((item) => item.toUpperCase()); //note = (item) bisa di ganti apa saja
//console.log("after map : ",mappedCapitalizeFruit )

//forEach ->  memanggil array tanpa mamnggil array baru
combined.forEach((fruits) => fruits);
//console.log(combined)

//case 1
const listName = [
  {
    name: "Rizki",
    age: 18,
  },
  {
    name: "Gono",
    age: 17,
  },
];

let fullListName = listName.map((item) => item);
console.log("full data : ", fullListName)
let listOfNames = listName.map((item) => item.name);
console.log("list of names : ", listOfNames)
let listOfAge = listName.map((item) => item.age);
console.log("list of age : ", listOfAge)

//for of -> looping khusus untuk array
let randomNumber = [1, 2, 3, 4, 5, 6];
let randomFruits = ["watermelon", "mango", "dragon fruits"];
for (let index of randomFruits) {
  //console.log(index)
}

// --FUNCTI0N--

// function declaration -> fungsi yang di deklarasikan dengan kata kunci 'function'
function greet(name) {
  return "Hello ," + name; //note = (name) -> parameter
}
//console.log(greet("John Doe")); //note = (John Doe) -> argumen

function dailyShift(shift) {
  if (shift >= 9 && shift < 15) {
    return "Morning Shift";
  } else if (shift >= 15 && shift < 21) {
    return "Noon Shift";
  } else {
    return "Night Shift";
  }
}

//console.log(dailyShift(15));

function sumBetweenVariabel(x, y) {
  return x + y;
}

//console.log(sumBetweenVariabel(2, 2));

// ---rest parameter (...parameter)
function sumTotal(...number) {
  //note = kalo (...number) di ganti bakalan jadi (a,b,c,d)
  return number.reduce((acc, curr) => acc + curr, 0); // note = acc dan curr bisa di ganti apa saja
}
//console.log(sumTotal(1, 2, 3, 4));

// --- Nested Function
function outerFunction(x) {
  //Note = innerFunction bisa di akses jika outerFuntion sudah di akses duluan
  function innerFunction(y, z) {
    return x * y * z;
  }
  return innerFunction;
}

let addNumber = outerFunction(5); //Note = 5 -> x
//console.log(addNumber(3, 2)); //Note = 3 -> y

// ---closure function
function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count
  };
}
let counter = createCounter();
//console.log(counter())


 // --- recursive funciton
 function factorial(n) {
    if(n === 0) {
        return 1
    } else {
        return n * factorial(n - 1)//Note = Factorial menyimpan semua hasil dari perkaliannya
    }
 }

// console.log(factorial(5))