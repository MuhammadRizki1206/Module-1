//1 -- Convert excel
function convertExcel(letter) {
  let result = 0;

  for (i = 0; i < letter.length; i++) {
    let char = letter[i];
    let charCode = char.charCodeAt(0) - "A".charCodeAt(0) + 1;
    result = result * 26 + charCode;
  }
  return result;
}
//console.log(convertExcel("AAA"))

//2
function singleNumber(num) {
  num.sort((a, b) => a - b);

  for (i = 0; i < num.length; i++) {
    if (i === 0 && num[i] !== num[i + 1]) {
      return num[i];
    } else if (i === num.length - 1 && num[i] !== num[i - 1]) {
      return num[i];
    } else if (num[i] !== num[i - 1] && num[i] !== num[i + 1]) {
      return num[i];
    }
  }
}
//console.log(singleNumber([4,1,2,1,2]))

//3
function anagram(s, t) {
  let reverse = s.split("").sort().join("");
  let reverse1 = t.split("").sort().join("");
  if (reverse === reverse1) {
    return true;
  } else {
    return false;
  }
}
//console.log(anagram("anagram", "nagaram"))

//4 -- Climbing Stairs
function climbingStairs(n) {
  let ways = [1, 2];

  for (let i = 2; i < n; i++) {
    ways[i] = ways[i - 1] + ways[i - 2];
  }
  return ways[n - 1];
}
//console.log(climbingStairs(10))

//Contoh
//1
function excelColumnToNumber(columnTitle) {
  let result = 0;
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i = 0; i < columnTitle.length; i++) {
    let currentValue = alphabet.indexOf(columnTitle[i]) + 1;
    result = result * 26 + currentValue;
  }
  return result;
}

// console.log(excelColumnToNumber("A"))
// console.log(excelColumnToNumber("Z"))
// console.log(excelColumnToNumber("AA"))
// console.log(excelColumnToNumber("AB"))

//2
function findUniqueElement(nums) {
  let totalUnique = [];
  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count++;
      }
    }
    if (count === 1) {
      totalUnique.push(nums[i]);
    }
  }
  if (totalUnique.length === 1) {
    return totalUnique[0];
  }
  return totalUnique;
}
// console.log(findUniqueElement([2,2,1]))
// console.log(findUniqueElement([4,1,2,1,2]))
// console.log(findUniqueElement([1]))
// console.log(findUniqueElement([2,3,1]))

//3
function checkAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  countS = {};
  countT = {};

  for (i = 0; i < s.length; i++) {
    let charS = s[i];
    let charT = t[i];

    // menghitung karakter pada s
    if (countS[charS]) {
      countS[charS]++;
    } else {
      countS[charS] = 1;
    }

    //menghitung karakter pada t
    if (countT[charT]) {
      countT[charT]++;
    } else {
      countT[charT] = 1;
    }
  }

  //membandingkan jumlah kemunculan setiap karakter di kedua objek
  for (let key in countS) {
    if (countS[key] !== countT[key]) {
      return false;
    }
  }
  return true;
}

const source1 = "anagram";
const target1 = "nagaram";

const source2 = "cat";
const target2 = "rat";
// console.log(checkAnagram(source1, target1))
// console.log(checkAnagram(source2, target2))

//4
function climbStairs(n) {
  if (n === 1) {
    return 1;
  } else if (n === 2) {
    return 2;
  }

  let oneStepBefore = 2; // cara mencapai n-1
  let twoStepBefore = 1; // cara mencapai n-2
  let totalStep = 0;

  for (i = 3; i <= n; i++) {
    totalStep = oneStepBefore + twoStepBefore;
    twoStepBefore = oneStepBefore;
    oneStepBefore = totalStep;
  }
  return totalStep;
}

console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));
console.log(climbStairs(5));
