// let date = 400;
// let year = date / 365;
// let roundedYear = Math.floor(year);
// let month = (date - roundedYear * 365) / 30;
// let roundedMonth = Math.floor(month);
// let day = date - roundedYear * 365 - 30 * roundedMonth;

// // console.log(roundedYear, "YEAR");
// // console.log(roundedMonth, "MONTH");
// // console.log(day, "DAY");
// console.log(
//   date +
//     " days" +
//     " -> " +
//     roundedYear +
//     " year " +
//     roundedMonth +
//     " month " +
//     day +
//     " days"
// );

// let date = 1000;
// let year = date / 365;
// let roundedYear = Math.floor(year);
// let sisaHari1 = date - roundedYear * 365;
// let month = sisaHari1 / 30;
// let roundedMonth = Math.floor(month);
// let day = sisaHari1 - month * 30;
// console.log(
//   date +
//     " days " +
//     " -> " +
//     roundedYear +
//     " year " +
//     roundedMonth +
//     " month " +
//     day +
//     " day "
// );

// let number = 9;

// if (number % 2 === 0) {
//   console.log("ini bilangan genap");
// } else {
//   console.log("ini bilangan ganjil");
// }

// for (let i = 2; i <= angka / 2; i++) {
//   if (angka % i === 0) {
//     isPrime = false;
//     break;
//   }
// }
// if (isPrime) {
//   console.log("Bilangan Prima");
// } else {
//   console.log("Bukan Bilangan Prima");
// }
// if (number % 1 === 0) {
//   if (number % number === 0) {
//     console.log("Bilangan prima");
//   }
// } else {
//   console.log("Bukan Bilangan Prima");
// }

// let angka = 21;

// if (angka <= 1) {
//   console.log(angka + " bukan bilangan prima");
// } else if (angka === 2) {
//   console.log(angka + " adalah bilangan prima");
// } else {
//   let Prima = true;
//   for (let i = 2; i <= Math.sqrt(angka); i++) {
//     if (angka % i === 0) {
//       Prima = false;
//       break;
//     }
//   }

//   if (Prima) {
//     console.log(angka + " adalah bilangan prima");
//   } else {
//     console.log(angka + " bukan bilangan prima");
//   }
// }

// let N = 5;
// let sum = 0;
// let proses = " "
// for (let i = 1; i <= N; i++) {
//   sum += i;
//   proses += i

//   if(i < N) {
//     proses += " + "
//   }
//   //sum = sum + i
// }

// console.log("Proses : " + proses + " = " + N)
// console.log("Sum dari angka 1 ke " + N + " is " + sum);

// let N = 4;
// let fact = 1

// for (let i = N; i > 0; i--) {
//   //fact = i * (i - 1);
//   fact *= i
//   //console.log(i)
//   console.log(N + "! -> " + fact);
// }

// const numbers = [3, 5, 1, 8, 2];
// let smallest = Math.min(...numbers);
//   let biggest = Math.max(...numbers);

// if (numbers.length === 0) {
//   console.log("Array tidak boleh kosong.");
// } else {
//   let total = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     total += numbers[i];
//   }

//   const average = total / numbers.length;
//   //console.log("Rata-rata adalah:", average);

//   console.log(
//     "smallest : " + smallest + " biggest : " + biggest + " average : " + average
//   );
// }

//1 -> Mencari angka terbesar,terkecil, dan rata-rata pada array
let numbers = [3, 5, 1, 8, 2];
let smallest = Math.min(...numbers); //Note = Mencari angka terkecil pada array
let biggest = Math.max(...numbers); //Note = Mencari angka terbesar pada array
let total = 0;

for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}

let average = total / numbers.length; //Note = Rumus mencari rata-rata

console.log("lowest :", smallest, "highest : ", biggest, "average :", average);

//2 -> mengubah array menjadi string dan menambahkan kata "and" sebelum index terakhir
let arr = ["apple", "banana", "cherry", "date"];
let and = arr.length - 1;
arr.splice(and, 0, "and"); //Note = splice() digunakan untuk menambahkan kata "and"
let result = arr.join(); //Note = join() digunakan untuk mengubah array menjadi string
console.log(result);

//3 -> Mencari angka terkecil kedua pada array
const num = [4, 3, 9, 7, 1, 5];
num.sort((a, b) => a - b); //Note = sort() digunakan untuk mengurutkan array yang acak
console.log("numbers = ", num, "-> " + num[1]);

//4 -> Menjumlahkan angka pada posisi yang sama dari dua array
let arr1 = [1, 2, 3];
let arr2 = [3, 2, 1];
let result1 = arr1.map((value, index) => value + arr2[index]); //Note = map() di gunakan untuk membuat array baru dengan memanggil fungsi pada setiap array asli
console.log(arr1, "+", arr2, "=", result1);

//5 -> Menambahkan angka pada akhir array namun angka hanya boleh di tambahkan ketika belum ada pada array
let angka = [1, 2, 3, 4];
let angkaBaru = 2;

if (angka.includes(angkaBaru)) {
  //Note = includes() digunakan untuk memeriksa apakah angka tersebut sudah ada dalam array atau belum
  console.log("Number already in array");
} else {
  angka.push(angkaBaru); //Note = push() digunakan untuk menambahkan angka baru pada akhir array
}
console.log(angka);

//8 -> Menggabungkan dua array menjadi satu array
let arr3 = [1, 2, 3];
let arr4 = [4, 5, 6];
let gabungan = [...arr3, ...arr4];
console.log("arr1 =", arr3, "arr2 =", arr4, "->", gabungan);

//9 -> Memeriksa angka duplikat
let angka1 = [1, 2, 2, 2, 3, 3, 4, 5, 5];
let duplikat = [];

for (i = 0; i < angka1.length; i++) {
  if (angka1[i] === angka1[i + 1] && !duplikat.includes(angka1[i])) {
    duplikat.push(angka1[i]);
  }
}
console.log(duplikat);

//10 -> Mencari angka yang berbeda pada dua array
let arr5 = [1, 2, 3, 4, 5];
let arr6 = [3, 4, 5, 6, 7];
let onlyArr5 = arr5.filter((item) => !arr6.includes(item)); //Note = Mencari angka yang ada pada arr5 tapi tidak ada pada arr6
let onlyArr6 = arr6.filter((item) => !arr5.includes(item)); //Note = Mencari angka yang ada pada arr6 tapi tidak ada pada arr5
let result2 = [...onlyArr5, ...onlyArr6]; //Note = Menggabungkan kedua array yang sudah di filter
console.log(result2);
