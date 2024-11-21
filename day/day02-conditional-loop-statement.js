// Conditional statement
// -- single if conditional
let temperature = 30;
if (temperature > 30) {
  //console.log("it's a hot day");
}

// -- nested if conditioinal
// let isWeekend = true;
// let hasPlans = true;

// if (isWeekend) {
//   if (hasPlans) {
//     console.log("you have plans this weekend");
//   } else {
//     console.log("you can relax this weekend");
//   }
// }

// -- triple nested if conditional

// -- chaining conditions

// let hour = 14;
// if (hour >= 9 && hour <= 17) {
//   console.log("the office is open");
// } else {
//   console.log("the office is close");
// }

// switch case
// let day = "monday";

// switch (day) {
//   case "monday":
//     console.log("start of the work week");
//     break;
//   case "wednesday":
//     console.log("midweek day");
//     break;
//   case "friday":
//     console.log("end of the work week");
//     break;
//   default:
//     console.log("another day");
// }

// -- switch case combine with if else

// -- ternary operator
let time = 20;
let greeting = time < 18 ? "good day" : "good evening"; // Note -> ? = If   : = Else
//console.log(greeting);

let shift = 20;
let checkShift =
  shift >= 7 && shift < 15
    ? "moorning shift"
    : shift > 15 && shift <= 21
    ? "noon shift"
    : "night shift";
//console.log(checkShift);

//-- LOOPING STATEMENT --
// foor loop

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// let totalStep = 0;

// for (let day = 1; day <= 7; day++) {
//   let stepsToday = 5000 + day * 1000;
//   console.log("steps on day " + day + " : " + stepsToday);
//   totalStep += stepsToday;
//   // totalSteps = totalStep + stepsToday
// }

// console.log("total steps in a week : " + totalStep);
// console.log("average steps in a week : " + totalStep / 7);

// -- Nested For Loop Statement
let dayOfWeek = ["monday", "tuesday", "wednesday", "thursday", "friday"];
let subjects = ["Math", "English", "science"];

for (let i = 0; i < dayOfWeek.length; i++) {
  console.log("Schedule for " + dayOfWeek[i] + " : ");
  for (let j = 0; j < subjects.length; j++) console.log(" " + subjects[j]);
}

// for (let i = 0; i < 5; i++) {
//   console.log("Main Number : ", i);
//   if (i === 3) {
//     console.log("Ini Tiga");
//   }
//   for (let j = 0; j < 3; j++) console.log("---- Sub Number : ", j);
// }

// let randomNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < randomNumber.length; i++) {
//   let generateNumber = Math.random() * 10;
//   if (randomNumber[i] == Math.floor(generateNumber)) {
//     console.log(randomNumber[i] + " Match with " + Math.floor(generateNumber));
//   } else {
//     console.log(
//       randomNumber[i] + " Not Match With " + Math.floor(generateNumber)
//     );
//   }
// }

// // -- WHILE LOOP --
// let savings = 0;
// let month = 1;

// while (month <= 12) {
//   savings += 100;
//   console.log("savings after month " + month + " : " + savings);
//   month++;
// }

// -- Nested While Loop statement --
// let i = 1;
// while (i <= 5) {
//   let j = 1;
//   while (j <= 5) {
//     console.log(i + " x " + j + " = " + i * j);
//     j++;
//   }
//   i++;
// }

// // -- DO WHILE LOOP --
// let basketCapacity = 5;
// let fruitsPicked = 0;

// do {
//   fruitsPicked++;
//   console.log("Picked fruits number : " + fruitsPicked);
// } while (fruitsPicked < basketCapacity);

// -- Do While Ne
let rows = 10;
let stars;

do {
  stars = 10;
  do {
    process.stdout.write("*");
    stars--;
  } while (stars >= rows);
  console.log();
  rows--;
} while (rows > 0);
