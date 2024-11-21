//1
function createTriangle(height) {
  let number = 1;
  for (let i = 1; i <= height; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += (number < 10 ? "0" : "") + number + " ";
      number++;
    }
    console.log(row.trim());
  }
}

createTriangle(4);

//3
let weight = 105;
let height = 1.72;

function hitungBMI(weight, height) {
  let BMI = weight / (height * height);

  if (BMI < 18.5) {
    return "less weight";
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    return "ideal";
  } else if (BMI >= 25.0 && BMI <= 29.9) {
    return "overweight";
  } else if (BMI >= 30.0 && BMI <= 39.9) {
    return "very overweight";
  } else {
    return "obesity";
  }
}

console.log(hitungBMI(weight, height));

//4
function filterNumber(array) {
  return array.filter(function (number) {
    return number % 2 === 0;
  });
}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumber = filterNumber(numbers);
console.log("Sebelum Di Filter " + numbers);
console.log(evenNumber);

function fizzBuzz(n) {
  for (i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("Fizz Buzz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else {
      console.log(i);
    }
  }
}
//fizzBuzz(20)

//5 
function splitStringToArray(str) {
  let result = []
  let word = ""
  for (let i = 0; i <= str.length; i++) {
    if(str[i] === " " || i === str.length) {
      result[result.length] = word
      word = ""
    } else {
      word += str[i]
    }
  }
  return result
}
const str = "Hello World"
console.log(splitStringToArray(str))



