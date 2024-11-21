//1
let numbers = [12, 5, 23, 18, 4, 45, 32];
let smallest = Math.min(...numbers);
let highest = Math.max(...numbers);
let total = 0;
function findAverage() {
  for (i = 0; i < numbers.length; i++) {
    total += numbers[i];
    average = total / numbers.length;
  }
  return average;
}

console.log("lowest :", smallest, "highest :", highest, "average :", findAverage)
  

//2
function fruits() {
    let arr = ["apple", "banana", "cherry", "date"];
  let and = arr.length - 1;
  arr.splice(and, 0, "and");
  let result = arr.join();
  return result;
}
console.log(fruits());

//3
let number = [5, 3, 1, 7, 2, 6];
function findSecondSmallest() {
  number.sort((a, b) => a - b); //Note = a dan b di gunakan sebagai fungsi pembanding
  return number[1];
}
console.log("The second smallest number ->", findSecondSmallest());

//4
function addArray() {
    let arr3 = [1, 2, 3];
    let arr4 = [3, 2, 1];
  return arr3.map((angka, index) => angka + arr4[index]);//Note = "=>" adalah arrow function
}
console.log(addArray());

//5
let angka = [1, 2, 3, 4];
let angkaBaru = 1;
function num() {
  if (angka.includes(angkaBaru)) {
    return "Number already in array";
  } else {
    angka.push(angkaBaru);
  }
  return angka;
}
console.log(num());

//7
// function maximumSize() {
//     for (i = 0; i < maxSize; i++) {
//         if(number5.length = maxSize) {
//             console.log(number5)
//         } else {
//             break
//         }
//     }
//     return number5
// }
// let number5 = [1,2,3,4,5,6,7]
// let maxSize = 5
// console.log(maximumSize())


//8
function combinedArray() {
  let arr = [1, 2, 3];
  let arr2 = [4, 5, 6];
  let combined = [...arr, ...arr2];
  return combined;
}
console.log(combinedArray());

//9
let angka1 = [1, 2, 2, 2, 3, 3, 4, 5, 5];
let duplikat = [];
function duplicateNumber() {
  for (i = 0; i < angka1.length; i++) {
    if (angka1[i] === angka1[i + 1] && !duplikat.includes(angka1[i])) {
      duplikat.push(angka1[i]);
    }
  }
  return duplikat;
}
console.log(duplicateNumber());


//10
let arr5 = [1,2,3,4,5]
let arr6 = [3,4,5,6,7]
function findDifference() {
    let onlyArr5 = arr5.filter((angka) => !arr6.includes(angka))
    let onlyArr6 = arr6.filter((angka) => !arr5.includes(angka))
    let result = [...onlyArr5, ...onlyArr6]
    return result
}
console.log(findDifference())