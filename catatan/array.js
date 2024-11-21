// array adalah tipe data structure, yang berarti kita bisa menyimpan berbagai data dengan tipe yang berbeda pada satu variable

let array = []; // array identik dengan kurang kotak;

let array2 = [
  //masing masing item dipisahkan oleh tanda koma
  1,
  "string",
  true,
  "Hallo",
  null,
  [1, 2, 3, [2, 4, [11]]],
]; // bisa menyimpan berbagai tipe data;

//untuk mengakses value dari array kita menggunakan indexing
console.log(array2[5][3][2][0]);

//array itu adalah tipe data yang mutable, artinya value atau itemnya dapat langsung di re-assign

const data = [2, 3, 4, [1, 2]];
console.log(data, "BEFORE");
data[1] = 11; // langsung mengubah index 1 menjadi 11
console.log(data, "AFTER");

const data2 = [1, 2];
data2.push(11); // untuk menambahkan data ke index terkahir
console.log(data2);
data2.shift(2); //menambahkan data di depan
data2.unshift(); //menhapus data di depan
data.pop(); //menhapus data dibelakang
