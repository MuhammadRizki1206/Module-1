//1
let number = 3;
if (number % 2 === 0) {
  console.log(number + " -> " + "Even Number");
} else {
  console.log(number + " -> " + "Odd Number");
}

//2
let angka = 7;

if (angka <= 1) {
  console.log(angka + " bukan bilangan prima");
} else if (angka === 2) {
  console.log(angka + " adalah bilangan prima");
} else {
  let Prima = true;
  for (let i = 2; i <= Math.sqrt(angka); i++) {
    if (angka % i === 0) {
      Prima = false;
      break;
    }
  }

  if (Prima) {
    console.log(angka + " adalah bilangan prima");
  } else {
    console.log(angka + " bukan bilangan prima");
  }
}

//3
let N = 10;
let sum = 0;
let proses = 0;
for (let i = 1; i <= N; i++) {
  sum += i;
  proses += i;

  if (i < N) {
    proses += " + ";
  }
}

console.log(N + " -> " + proses + " = " + sum);

//5
let fibonacciLimit = 10;
let a = 0,
  b = 1;
let fibonacciSquare = [];

for (let i = 0; i <= fibonacciLimit; i++) {
  fibonacciSquare.push(a);
  let temp = a;
  console.log("temp = " + temp)
  a = b;
  //console.log(a + b)
  b = temp + b;
}

console.log(fibonacciLimit + " -> " + fibonacciSquare.join(" ,"));


hallo()



































