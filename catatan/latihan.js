// var lengthOfLastWord = function (s) {
//   let a = s.split(" "); // untuk menjadikan string ke array
//   console.log(a);

//   const newArray = [];
//   for (i = 0; i < a.length; i++) {
//     console.log(a[i], `ini adalah data ke-${i}`);
//     if (a[i] !== "") {
//       newArray.push(a[i]);
//     }
//   }

//   let lastWord = newArray.length - 1; // value dari index paling terakhir
//   return newArray[lastWord].length;
// };

// //console.log(lengthOfLastWord("Hello World"));
// // console.log(lengthOfLastWord("luffy is still joyboy"));
// console.log(lengthOfLastWord("   fly me   to   the moon  "));

//input adalah sebuah string
//algoritma
/**
 * 1. Bagaimana memisahkan masing masing kata
 * 2. Bagaiman mendapatkan kata terkahir
 * 3. Bagaimana mendapatakan jumlah kata terakhir
 *
 */

// function lastWorld(s) {
//   return s.split(" ").filter((a) => a != "")[s.split(" ").filter((a) => a != "").length - 1].length;
// }

// console.log(lastWorld("   fly me   to   the moon  "));

// function addUniqueElement(arr, newElement) {
//     if (arr.indexOf(newElement) === -1) {
//         arr.push(newElement)
//     }
//     return arr
// }

// const newElement = 7
// const arr = [1,2,3,4]
// console.log(addUniqueElement(arr,newElement))

function sumOfDuplicates(arr) {
    let sum = 0
    let seen = {}

    for(let i = 0; i < arr.length; i++) {
        if(seen[arr[i]]) {
            seen[arr[i]]++
            console.log(seen)
        } else {
            seen[arr[i]] = 1
        }
    }
    for (let key in seen) {
        console.log(key)
        if(seen[key] > 1) {
            sum += Number(key) * seen[key]
        }
    }
    return sum
}
let arr = [10,20,40,10,50,30,10,60,10]
console.log(sumOfDuplicates(arr))