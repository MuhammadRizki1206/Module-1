//1
function majority(nums) {
  let major = nums[0]; // Inisialisasi kandidat mayoritas dengan elemen pertama
  let count = 1; // Inisialisasi hitungan kandidat mayoritas

  for (let i = 1; i < nums.length; i++) {
    // Iterasi dimulai dari elemen kedua
    if (nums[i] === major) {
      count++; // Jika elemen saat ini sama dengan kandidat mayoritas, tingkatkan hitungan
    } else if (count === 0) {
      major = nums[i]; // Jika hitungan mencapai 0, ganti kandidat mayoritas dengan elemen saat ini
      count = 1; // Mulai hitungan untuk kandidat mayoritas yang baru
    } else {
      count--; // Jika elemen saat ini berbeda dengan kandidat mayoritas, kurangi hitungan
    }
  }
  return major; // Kembalikan kandidat mayoritas
}

//console.log(majority([3, 1, 3])); // Menampilkan hasil fungsi

//2
function romanToInt(s) {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    M: 1000,
  };

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    //jika simbol saat ini lebih kecil dari simbol berikutnya, kita kurangi
    if (i < s.length - 1 && romanMap[s[i]] < romanMap[s[i + 1]]) {
      total -= romanMap[s[i]];
    } else {
      //jika tidak, tambahkan nilainya
      total += romanMap[s[i]];
    }
  }
  return total;
}
//console.log(romanToInt("MCMXCIV"))

// task 3
function generate(numRows) {
  let pascalTriangle = [];

  for (i = 0; i < numRows; i++) {
    let row = [];
    row.push(1);
    for (j = 1; j < i; j++) {
      row.push(pascalTriangle[i - 1][j - 1] + pascalTriangle[i - 1][j]);
    }
    if (i > 0) {
      row.push(1);
    }
    pascalTriangle.push(row);
  }
  return pascalTriangle;
}

//console.log(generate(4))

//task 4
function maxProfit(prices) {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (i = 1; i < prices.length; i++) {
    //kalau kita menemukan harga yg lebih rendah, update minPricenya
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else {
        //kalau harga saat ini lebih tinggi, kita hitung potensi profit
      const profit = prices[i] - minPrice;
      //update maxProfit jika profit lebih besar
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }
  return maxProfit;
}
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
