// -> NOTE = UBAH SEMUA INI KE DALAM FUNCTION

//1 -> Mencari angka terbesar,terkecil, dan rata-rata pada array ---------------------------------------------------------------
let numbers = [12, 5, 23, 18, 4, 45, 32]
let smallest = Math.min(...numbers); //Note = Mencari angka terkecil pada array
let biggest = Math.max(...numbers); //Note = Mencari angka terbesar pada array
let total = 0; //Note = Variabel untuk menyimpan hasil dari penjumlahan array nya

for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}

let average = total / numbers.length; //Note = Rumus mencari rata-rata

console.log("lowest :", smallest, "highest : ", biggest, "average :", average);

//2 -> mengubah array menjadi string dan menambahkan kata "and" sebelum index terakhir -----------------------------------------
let arr = ["apple", "banana", "cherry", "date"];
let and = arr.length - 1;
arr.splice(and, 0, "and"); //Note = splice() digunakan untuk menambahkan kata "and"
let result = arr.join(); //Note = join() digunakan untuk mengubah array menjadi string
console.log(result);

//3 -> Mencari angka terkecil kedua pada array ---------------------------------------------------------------------------------
const num = [4, 3, 9, 7, 1, 5];
num.sort((a, b) => a - b); //Note = sort() digunakan untuk mengurutkan array yang acak
console.log("numbers = ", num, "-> " + num[1]);

//4 -> Menjumlahkan angka pada posisi yang sama dari dua array -----------------------------------------------------------------
let arr1 = [1, 2, 3];
let arr2 = [3, 2, 1];
let result1 = arr1.map((value, index) => value + arr2[index]); //Note = map() di gunakan untuk membuat array baru dengan memanggil fungsi pada setiap array asli
console.log(arr1, "+", arr2, "=", result1);

//5 -> Menambahkan angka pada akhir array namun angka hanya boleh di tambahkan ketika belum ada pada array ----------------------
let angka = [1, 2, 3, 4];
let angkaBaru = 2;

if (angka.includes(angkaBaru)) {
  //Note = includes() digunakan untuk memeriksa apakah angka tersebut sudah ada dalam array atau belum
  console.log("Number already in array");
} else {
  angka.push(angkaBaru); //Note = push() digunakan untuk menambahkan angka baru pada akhir array
}
console.log(angka);

//8 -> Menggabungkan dua array menjadi satu array --------------------------------------------------------------------------------
let arr3 = [1, 2, 3];
let arr4 = [4, 5, 6];
let gabungan = [...arr3, ...arr4];//Note = Cara menggabungkan dua array menjadi satu array
console.log("arr1 =", arr3, "arr2 =", arr4, "->", gabungan);

//9 -> Memeriksa angka duplikat ---------------------------------------------------------------------------------------------------
let angka1 = [1, 2, 2, 2, 3, 3, 4, 5, 5];
let duplikat = [];

for (i = 0; i < angka1.length; i++) {//Note = Loop untuk mengecek angka-angka di dalam array
  if (angka1[i] === angka1[i + 1] && !duplikat.includes(angka1[i])) {//Note = Mengecek angka-angka yang sama
    //Note = includes() digunakan untuk memeriksa apakah angka itu sudah ada di dalam variabel duplikat atau belum
    duplikat.push(angka1[i]);//Note = Jika ditemukan angka yang sama maka akan di pindahkan ke variabel duplikat menggunakan push()
  }
}
console.log(duplikat);

//10 -> Mencari angka yang berbeda pada dua array ----------------------------------------------------------------------------------
let arr5 = [1, 2, 3, 4, 5];
let arr6 = [3, 4, 5, 6, 7];
let onlyArr5 = arr5.filter((item) => !arr6.includes(item)); //Note = Mencari angka yang ada pada arr5 tapi tidak ada pada arr6
let onlyArr6 = arr6.filter((item) => !arr5.includes(item)); //Note = Mencari angka yang ada pada arr6 tapi tidak ada pada arr5
let result2 = [...onlyArr5, ...onlyArr6]; //Note = Menggabungkan kedua array yang sudah di filter
console.log(result2);
