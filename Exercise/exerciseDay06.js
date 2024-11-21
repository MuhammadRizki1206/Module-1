class product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}
class transaction {
  constructor() {
    this.productList = [];
    this.total = 0;
  }
  addItem(product, quantity) {
    this.productList.push({ product, quantity });
    this.total += product.price * quantity;
  }
  addTotal() {
    return this.total;
  }
  checkout() {
    const transactionData = {
      product: this.productList.map((item) => ({
        name: item.product.name,
        price: item.product.price,
        quantity: item.quantity,
      })),
      total: this.total,
    };
    //transactionData.push({total: this.total})
    this.productList = [];
    this.quantity = [];
    this.total = 0;
    return transactionData;
  }
}

let product1 = new product("ayamBakar", 20000);
let product2 = new product("ketoprak", 15000);
let Transaction = new transaction();

Transaction.addItem(product1, 2);
Transaction.addItem(product2, 1);
console.log("total harga adalah", " RP.", Transaction.addTotal());
const data = Transaction.checkout();
console.log("Data transaksi", data);

//2
function calculateStudentData() {
  let totalScore = 0;
  let highestScore = student[0].Score;
  let lowestScore = student[0].Score;

  let totalAge = 0;
  let currentYear = new Date().getFullYear();
  let initialAge = currentYear - new Date(student[0].Age).getFullYear();
  let highestYear = initialAge;
  let lowestYear = initialAge;

  for (let i = 0; i < student.length; i++) {
    let student = student[i];
    let score = student.Score;
    let age = currentYear - new Date(student.Age).getFullYear();

    //hitung total skor
    totalScore += score;
    if (score > highestScore) highestScore = score;
    if (score < lowestScore) lowestScore = score;
  }

  //hitung rata-rata skor dan umur
  let averageScore = totalScore / student.length;
  let averageAge = totalAge / student.length;

  return {
    score: {
      Highest: highestScore,
      Lowest: lowestScore,
      Average: averageScore,
    },
    Age: {
      Highest: highestYear,
      Lowest: lowestYear,
      Average: averageAge,
    },
  };
}

let student = [
    { Name: "Bob", Email: "Bob123@example.com", Age: "2000-05-20", Score: 85 },
    { Name: "John", Email: "john@example.com", Age: "1998-11-15", Score: 90},
    { Name: "Jane", Email: "jane@example.com", Age: "2002-01-30", Score: 78},
]

console.log(calculateStudentData(student))