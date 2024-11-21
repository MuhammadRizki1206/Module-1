// -- PROBLEM SOLVING --


/*
1. Jangan terpaku sama satu standar
2. Harus pahami soal cari input dan output
3. cek faktor-faktor yg di minta untuk memenuhi soal
4. Pahami konteks soal
5. 
*/

/*
let word = "madam"
let palindrome = word.split("").reverse().join("")


if(word === palindrome) {
    console.log(word + " is a palindrome")
} else {
    console.log(word + " not a palindrome")
}

// Terjemahan
Pertama buat variabel untuk menampung string
trus untuk cek bahwa word itu kata palindrome atau bukan saya gunakan beberapa built in method
pertama saya gunakan metode split() untuk memecah string word menjadi array dari karakter2 individu
trus saya pake metode reverse() untuk membalikan urutan elemen dari array
terakhir saya gunakan metode join() untuk menggabungkan elemen2 kembali menjadi string

trus saya pake metode if else, jadi jika word sama dengan reverse maka word adalah kata palindorome
dan else adalah kebalikan dari if, jika word tidak sama dengan reverse maka word bukan kata palindrome 
*/

//Time Complexcity O(n) - linear
// -- menghitung jumlah total dari sebuah barang
// Time complexcity O(1) karena
function calculateTotalPrice(prices) {
  let total = 0;
  for (i = 0; i < prices.length; i++) {
    total += prices[i]; //Note = operasi ini dilakukan N kali, dimana N adalah panjang array
  }
  return total;
}
let prices = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100];
// console.time("time of execution calculateTotalPrice()");
// console.log("Total prices : ", calculateTotalPrice(prices));
// console.timeEnd("time of execution calculateTotalPrice()");

//space complexcity O(n)
// -- membuat array yang menyimpan angka ganjil dari 1 sampai N
// -- Time Complexcity O(n) karena ada penambahan waktu ketika N di looping
function generateOddNumber(n) {
  let oddNumbers = [];
  for (let i = 1; i <= n; i += 2) {
    oddNumbers.push(i);
  }
  return oddNumbers;
}
// console.time("time of execution generateOddNumber()")
// console.log(generateOddNumber(10))
// console.timeEnd("time of execution generateOddNumber()")

// Brute Force
// -- mencoba berbagai macam kemungkinan
// -- mencari sebuah string dalam teks
function bruteForchSearch(text, pattern) {
  for (let i = 0; i <= text.length - pattern.length; i++) {
    let found = true;
    for (let j = 0; j < pattern.length; j++) {
      if (text[i + j] !== pattern[j]) {
        found = false;
        break;
      }
    }
    if (found) return i;
  }
  return -1; //Note = jika tidak ditemukan maka cetak -1
}

let text = "Brute force is simple but inefficient";
let pattern = "the";
//console.log(bruteForchSearch(text, pattern))// outputnya harus 6

// menemukan dua angka dari elemen array yang jumlahnya sama dengan target
function bruteForceTwoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}
let numbers = [2, 7, 11, 15];
let target = 18;
//console.log(bruteForceTwoSum(numbers, target));

// menghitung jumlah kemunculan angka dalam array
// With Extra Memory
function countFrequencyWithExtraMemory(arr) {
  let frequency = {};
  for (i = 0; i < arr.length; i++) {
    if (frequency[arr[i]]) {
      frequency[arr[i]] += 1;
    } else {
      frequency[arr[i]] = 1;
    }
  }
  return frequency;
}

//let arr1 = [10,22,30,88,10,20,22,30,40,40,8,7,11,10,8]
//console.log(countFrequencyWithExtraMemory(arr1))

function countFrequencyWithoutExtraMemory(arr) {
  arr.sort();
  let count = 1;
  for (i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      count++;
    } else {
      console.log(arr[i - 1] + " muncul " + count + " kali");
    }
  }
  return arr[arr.length - 1] + " muncul " + count + " kali";
}

let arr2 = [10, 22, 30, 88, 10, 20, 22, 30, 40, 40, 8, 7, 11, 10, 8];
//console.log(countFrequencyWithoutExtraMemory(arr2))

// search algoritms
// linear search
function linearSearch(arr, target) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
let data1 = [10, 21, 30, 11, 40, 5, 90, 77, 65, 57];
//console.log(linearSearch(data1, 40));

// Binary Search
function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

let sortedData = [1, 3, 3, 5, 7, 8, 10, 19, 22, 30, 38, 44, 50];
//console.log(binarySearch(sortedData, 38));

// built in search
let data2 = [10, 5, 8, 9, 11, 90, 80];
let searchData = data2.indexOf(5);
//console.log(searchData)

// Sorting Algorithms
// -- Bubble sort
function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false; // asumsikan pada awalnya tidak ada elemen yang di tukar
    for (i = 0; i < arr.length; i++) {
      // jika elemen saat ini lebih besar dari elemen berikutnya, maka tukar posisi
      if (arr[i] > arr[i + 1]) {
        // tukar elemen
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        // [5,1] = [1,5]
        swapped = true;
      }
    }
  } while (swapped); // iterasi ulang jika ada elemen yang di tukar
  return arr; // kembaliikan array yang sudah terurut
}

let unsortedData1 = [5, 1, 4, 2, 8];
//console.log(bubbleSort(unsortedData1));

// selection sort
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}

let unsortedData2 = [64, 25, 12, 22, 11];
console.log(selectionSort(unsortedData2));
