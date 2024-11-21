function hallo(jenisMakanan) {
  //algoritma masak mie
  /**
   * 1. Beli mie
   * 2. Buka Bungkus mie
   * 3. panaskan air
   * 4. masukan mie kedalam air
   * 5. sajikan mienya
   *
   */
}

//function berfungsi untuk menyatukan sebuah algoritma code ke dalam, yang dimana function tersebut menerima argument
//atau input agar function lebih dinamis atau reusable

//algoritma masak mie
/**
 * 1. Beli mie
 * 2. Buka Bungkus mie
 * 3. panaskan air
 * 4. masukan mie kedalam air panas
 * 5. sajikan mienya
 *
 */
var test = 1;
console.log(test);

greeting();

function greeting() {
  console.log("hallo", "Didalam function");
  return 1; //setiap function harus ada return value, kalau tidak ada maka return valuenya by default adalah undefined
}

console.log(greeting(), "ini di luar function"); // cara memanggil function

const hasil = greeting();

console.log(hasil);

//argument function

function test1(name) {
  console.log(name);
}

test1("samlia");
test1("samirudin");
