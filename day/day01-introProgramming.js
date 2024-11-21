const { type } = require("os");

// primitive data types
let numberVar = 42;
let stringVar = "hello";
let booleanVar = true;
let nullVar = null; // yang terdefinisi
let undefinedVar; // tidak terdefinisi

// Cara cek type data

// console.log(typeof numberVar);
// console.log(typeof stringVar);
// console.log(typeof booleanVar);
// console.log(typeof nullVar);
// console.log(typeof undefinedVar);

// Collective data types
let arrayNumberVar = [1, 2, 3, 4, 5];
let arrayStringVar = ["hello", "world"];
let person = {
  name: "john doe",
  age: 30,
};

// console.log(arrayNumberVar);
// console.log(arrayStringVar);
// console.log(person);

// contoh perbedaan let, var, const

if (true) {
  var varVariable =
    "saya dapat diakses dimana aja dalam fungsi atau global scope";
  let letVariable = "saya hanya dapat diakses dalam block ini";
  const constVariable =
    "saya juga hanya dapat diakses dalam block ini dan tidak dapat di ubah";
}

// contoh mutable dan immutable

//mutable: bisa di ubah
// contoh mutable
let mutableArray = [1, 2, 3];
mutableArray.unshift(0);
//console.log(mutableArray);
mutableArray.push(4);
//console.log(mutableArray);

//immutable: data tidak bisa diubah
//contoh immutable
const immutableString = "hello";
immutableString[0] = "H";
//console.log(immutableString);

// contoh unary, binary, dan operand
let numberChar = 20;
let unary = -numberChar; // -> unary operator, memiliki satu operand
let binary = numberChar + 5; // --> binary operator, memiliki dua operand

// --- contoh operator
let sum = numberChar + 10;
let decrase = numberChar - 10;
let square = numberChar * 10;
let divide = numberChar / 10;
let modulo = numberChar % 10;
//console.log(decrase);

// contoh increment, decrement, postfix, dan prefix
let x = 5;
// console.log(x++); // postfix increment, x naik sebelum statement dieksekusi
// console.log(x);
// console.log(++x); // prefix increment, x naik sesudah statement dieksekusi
// console.log(--x);
// console.log(x--);
// console.log(x);

// contoh operator perbandingan

// = -> assigment, membandingkan kedua nilai yang sama
// == -> loose equality, membandingkan kedua nilai yamg sama
// === -> strict equality, membandingkan kedua nilai dan tipe data
// ! -> negasi/kebalikan

let isEqual = 5 == "5";
let isStrictEqual = 5 === "5";
let isNotEqual = 5 != "5";
let isStrictNotEqual = 5 !== "5";

// console.log(isEqual);
// console.log(isStrictEqual);
// console.log(isNotEqual);
// console.log(isStrictNotEqual);

// --- builtin method (string)
// slice -> mengembalikan bagian tertentu dari string berdasarkan index awal dan akhir

let str = "hello, world!";
let slicedStr = str.slice(7, 12);
let slicedstrNegative = str.slice(-1, 8);
//console.log(slicedStr);

// -- substring -> sama seperti slice
let substringStr = str.substring(7, 12);
let substringStrNegative = str.substring(-2, 8);
//console.log(substringStr);

// -- substr -> mengambil bagian dari string , tetapi parameter kedua adalah panjang bagian yang
let substrStr = str.substr(7, 5);

// -- Replace -> menggantikan bagian tertentu dari string dengan string yang baru
let replaceStr = str.replace("world", "Javascript");
//console.log(replaceStr);

//-- concat -> menggabungkan dua atau lebih string jadi satu string
let str1 = "nama";
let str2 = "saya";
let concatStr = str1.concat(", ", str2, "!");
//console.log(concatStr);

// -- trim -> menghapus spasi di awal dan di akhir string
let strWithSpaces = "    hello, world     ";
let trimmedStr = strWithSpaces.trim();
//console.log(trimmedStr);

// BUILTIN METHOD (NUMBER)
let number = 123.456;

// toFixied -> membulatkan angka ke jumlah desimal dan mengembalikan string
let roundedNumber = number.toFixed(2);
//console.log(roundedNumber);

// toString -> menggembalikan string tanpa harus membulatkan angka ke jumlah desimal
//let numberAsString = number.toString()
let numberAsString = String(number);
//console.log(numberAsString);

// --- Builtin Method (date)
let currentDate = new Date();
console.log(currentDate);
let convertString = String(currentDate); // -> untuk mencetak tanggal dan tempat yang sesuai
console.log(convertString);

//getFullYear() -> mengambil tahun
let year = currentDate.getFullYear();
console.log(year);

// getMonth() -> mengambil bulan
let month = currentDate.getMonth();
console.log(month + 1);

// getDate() -> mengambil tanggal dalam hari
let date = currentDate.getDate();
console.log(date);

// getDay() -> mengambil hari dalam minggu (0 = minggu, 6 = sabtu)
let dayOfWeek = currentDate.getDay();
console.log(dayOfWeek);

// -- Gerbang Logika

// -- Gerbang AND (&&)
// false + false = false
// false + true = false
// true + false = false
// true + true = true

// -- Gerbang OR (||)
// false + false = false
// false + true = true
// true + false = true
// true + true = true

// -- Gerbang NOT (!)
// true = false
// false = true
