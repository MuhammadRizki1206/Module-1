/*
1  Write a code to find area of rectangle.
  ○ Example : length = 5, width = 3
  ○ Output : 15
2  Write a code to find perimeter of rectangle.
  ○ Example : length = 5, width = 3
  ○ Output : 16
3  Write a code to find diameter, circumference and area of a circle.
  ○ Example : radius = 5
  ○ Output : diameter = 10, circumference = 31.4159, area = 78.539
4  Write a code to find angles of triangle if two angles are given.
  ○ Example : a = 80, b = 65
  ○ Output : 35
5  Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30
   days).
  ○ Example : 400 days → 1 year, 1 month, 5 days
  ○ Example: 366 days → 1 year, 0 month, 1 day
6  Write a code to get difference between dates in days.
  ○ Example : date1 = 2022-01-20, date2 = 2022-01-22
  ○ Output : 2
*/

//1
let rectangleLength = 5;
let rectangleWidth = 3;
let rectangleArea = rectangleLength * rectangleWidth;
console.log(rectangleArea);

//2
let length = 5;
let width = 3;
let perimeter = 2 * (length + width);
console.log(perimeter);

//3
//diameter
let radius = 5;
let diameter = radius * 2;
console.log(diameter);
//circumference
let phi = 3.14159;
let diameter1 = 10;
let circumference = phi * diameter1;
console.log(circumference);
//area
let phi1 = 3.14159;
let radius1 = 5;
let area = phi1 * radius1 * radius1;
console.log(area);

//4
let a = 80;
let b = 65;
let sudut = 180 - (a + b);
console.log(sudut);

//5
let date = 400;
let year = date / 365;
let roundedYear = Math.floor(year);
let month = (date - roundedYear * 365) / 30;
let roundedMonth = Math.floor(month);
let day = date - roundedYear * 365 - 30 * roundedMonth;

// console.log(roundedYear, "YEAR");
// console.log(roundedMonth, "MONTH");
// console.log(day, "DAY");
console.log(
  date +
    " days" +
    " -> " +
    roundedYear +
    " year " +
    roundedMonth +
    " month " +
    day +
    " days"
);

//6
let tanggal1 = "2022-01-20";
let tanggal2 = "2022-01-22";

let tgl1 = new Date(tanggal1);
let tgl2 = new Date(tanggal2);
let differenceInTime = tgl2 - tgl1;
let differenceInDays = (differenceInTime / (1000 * 3600 * 24)) | 0
console.log("difference between dates : ", differenceInDays)

// let currenDate = new Date()
// console.log(String(currenDate))
