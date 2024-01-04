// Q6 Write program to take a month as an input from the user and find out whether the month has 31 days or not.

function checkMonth(input) {
  let monthWithRequiredDays = [
    "January",
    "March",
    "May",
    "July",
    "August",
    "October",
    "December",
  ];
  for (let i = 0; i < monthWithRequiredDays.length; i++) {
    if (input.toLowerCase() === monthWithRequiredDays[i].toLowerCase()) {
      console.log("from if block");
      return "It's a month with 31 days";
    }
  }
  return "It's NOT a month with 31 days";
}

console.log(checkMonth("july"));

// Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".

// Your output should look something like this 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17 .....

function generateFizzBuzz() {
  let result = [];
  for (let i = 1; i <= 100; i++) {
    // console.log(i);
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }
  console.log(result);
}

generateFizzBuzz();

// Print the following star pattern :-

// *
// * *
// * * *
// * * * *
// * * * * *

function printStar(n) {
  let line = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i + 1; j++) {
      line += " * ";
    }
    console.log(line);
    line = "";
  }
}
printStar(5);

// Write a program to take a number input from user and print multiplication table 12 times for that number.

function printTable(n) {
  // let line = "";
  for (let i = 1; i <= 12; i++) {
    // line += `${n * i}`;
    console.log(`${n * i}`);
  }
}

printTable(2);

// Print a Fibonacci series

function printFibonacci() {
  let line = [];
  for (let i = 0; i < 15; i++) {
    if (i > 1) {
      line[i] = line[i - 1] + line[i - 2];
    } else {
      line[i] = i;
    }
  }
  console.log(line);
}
printFibonacci();

// Write a program to take an input from a user and find its Factorial. Example: Factorial of 5 is 120

function getFactorial(n) {
  let result = 1;
  for (let i = n; i > 0; i--) {
    result = result * i;
  }
  console.log(result, "result");
}
getFactorial(5);

// Write a Program to take a number input from user and find if the number is Prime or not.

// a whole number greater than 1 that cannot be exactly divided by any whole number other than itself and 1 (e.g. 2, 3, 5, 7, 11):

function checkPrime(n) {
  let factorialCount = 0;

  for (let i = 1; i <= 9; i++) {
    if (n % i === 0) {
      factorialCount++;
    }
  }
  if (factorialCount > 2) {
    console.log("NON-PRIME");
  } else {
    console.log("PRIME");
  }
}
checkPrime(7); // PTIME

// Write a program to take a day as an input and determine whether it is a weekday or weekend. Example: Tuesday is weekday.

function evaluateDay(day) {
  if (!day.includes("day")) {
    console.log("kindly enter a valid day");
  } else {
    if (day.toLowerCase() === "sunday" || day.toLowerCase() === "saturday") {
      console.log(`${day} is Weekend`);
    } else {
      console.log(`${day} is a Weekday`);
    }
  }
}

evaluateDay("sunday");

// FUNCTIONS
// challenge 1
function getHexagonArea(s) {
  let area = s * s * Math.sqrt(3) * (3 / 2);
  return area.toFixed(2);
}
console.log(getHexagonArea(10));

// challenge 2
// Return min among the parameters of a function
function findMin(...rest) {
  // console.log(Math.min(...rest));
  let min = 0;
  rest.reduce((acc, curr) => {
    console.log("acc:", acc, "curr:", curr);
    console.log(min);
    if (curr > acc) {
      min = acc;
      return acc;
    } else {
      min = curr;
      return curr;
    }
  });
  return min;
}

console.log("THE MINIMUM VALUE", findMin(3, 5, 9, 1, 10, 22, 3, 0)); // 0  - Wahh! this reduce worked perfectly, remember to always return a value from the function which will be the accumulator for the next function iteration

// challenge 3
// Return max among the parameters of a function
function findMax(...rest) {
  // console.log(Math.min(...rest));
  let max;
  rest.reduce((acc, curr) => {
    console.log("acc:", acc, "curr:", curr);
    console.log(max);
    if (curr > acc) {
      max = curr;
      return curr;
    } else {
      max = acc;
      return acc;
    }
  });
  return max;
}

console.log(findMax(32, 5, 9, 1));

// Challenge 4
// Return the type of triangle by given side lengths
function getTriangleType(a, b, c) {
  if (((a + b + c) / a) % 3 === 0) {
    // Equilateral - all sides are of same length
    console.log("its Equilateral Triangle");
  } else if (a === b || b === c || a === c) {
    // Isoceles - any two sides are equal
    console.log("its  Isoceles Triangle");
  } else {
    // Scalene - all sides are of different length
    console.log("its Scalene Triangle");
  }
}
getTriangleType(4, 3, 2); // WORKS BUT THNK ABOUT OPTIMIZING

// MEDIUM LEVEL

//  Challenge 1
// Given an array and an item, your function should return the index at which the item is present.
// Example:
// Input: indexOf([1,6,3,5,8,9], 3)

function indexOf(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
}

console.log(indexOf([1, 6, 3, 5, 8, 9], 3));

//  Challenge 2
// Given an array and two numbers, your function should replace all entries of first number in an array with the second number.
// Example:
// Input: replace([1,5,3,5,6,8], 5, 10) ––> Output: [1,10,3,10,6,8]

function replace(arr, first, second) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === first) {
      arr[i] = second;
    }
  }
  return arr;
}
console.log(replace([1, 5, 3, 5, 6, 8], 5, 10));

//  Challenge 3
// Given two arrays, your function should return single merged array.
// Example:
// Input: mergeArray([1,3,5], [2,4,6]) ––> Output: [1,3,5,2,4,6]

function mergeArray(arr1, arr2) {
  return [...arr1, ...arr2];
}
console.log(mergeArray([1, 3, 5], [2, 4, 6]));

//  Challenge 4
// Given a string and an index, your function should return the character present at that index in the string.
// Example:
// Input: charAt("KoteshArya", 4) ––> Output: s

function charAt(text, num) {
  for (let i = 0; i < text.length; i++) {
    if (i === num) {
      return text[i];
    }
  }
  return -1;
}

console.log(charAt("KoteshArya", 6));

//  Challenge 5
// Given two dates, your function should return which one comes before the other.
// Example:
// Input: minDate('02/05/2021', '24/01/2021') ––> Output: 24/01/2021
function minDate(date1, date2) {
  let splittedDate1 = date1.split("/");
  console.log(splittedDate1);
  let splittedDate2 = date2.split("/");
  console.log(splittedDate2);
  if (
    splittedDate1.every((value, index) => {
      +value < +splittedDate2[index];
    })
  ) {
    return date1;
  } else {
    return date2;
  }
}
console.log(minDate("02/05/2021", "24/01/2021")); // 24/01/2021
// Optimize this with out using arr.every() method

// fetch("https://exam.ankush.wiki/challenges")
//   .then((response) => response.json())
//   .then((data) => {
//     // console.log(data);
//     responseData = data;
//     // let result = data.data.forEach((obj) => {
//     //   const name = obj.name.toLowerCase();
//     //   console.log(name);
//     //   return name;
//     // });

//     let result = data.data.map((obj) => {
//       const name = obj.name.toLowerCase();
//       const versionCount = name.split(" ").filter((word) => word === "version")
//         .length;
//       return {
//         id: obj.id,
//         versionCount: versionCount
//       };
//     });
//   let count = 0;
//   for(let i=0;i< result.length; i++){
//     count += result[i].versionCount
//   }
//     console.log(count);
//   });
// async function postData(url = '', data = {}) {
//   try {
//     const response = await fetch(`https://exam.ankush.wiki/challenges`, {
//       method: 'POST',
//       credentials: 'include',
//       body: JSON.stringify(data),
//       headers: {
//         'Content-type': 'application/json',
//       },
//     });
//     return response;
//   } catch (error) {
//     alert('something went wrong');
//     console.error(error);
//   }
// }

// async function postUrl() {
//   try {
//     const response = await postData("https://exam.ankush.wiki/challenges", { count: 55 });
//     const response1 = await response.json();
//     console.log('Successfully posted. Response:', response1);
//   } catch (error) {
//     console.error('Error posting data:', error);
//   }
// }
// postUrl();

// fetch("https://exam.ankush.wiki/challenges")
//   // The first then block handles the response from the server
//   .then((response) => response.json())
//   // The second then block handles the parsed JSON data from the response
//   .then((data) => {
//     // The variable `responseData` is assigned the parsed JSON data
//     responseData = data;

//     // The forEach method is used to iterate over each object in the data array
//     let result = data.data.forEach((obj) => {
//       // For each object, the `name` property is accessed and converted to lowercase
//       const name = obj.name.toLowerCase();

//       // The lowercase name is then logged to the console
//       console.log(name);

//       // Note: The return statement here doesn't affect the outer result variable
//       // It is used within the context of the forEach method but doesn't impact the overall result of the fetch operation.
//       return name;
//     });
//   });

// Functions Advanced

// Challenge 1

// Write a function which generates a secret code from a given string, by shifting characters of alphabet by N places. Example:
// Input: encodeString("hercules", 2) ––> Output: pgqiecor

function encodeString(text, shiftCount) {
  let charsArr = Array.from(text);
  let result = "";
  for (let i = 0; i < charsArr.length; i++) {
    let unicode = charsArr[i].charCodeAt() + 2;
    result += String.fromCharCode(unicode);
  }
  console.log(result);
}

encodeString("hercules", 2);

// CHallenge 2

// Given a sentence, return a sentence with first letter of all words as capital.
// Example:
// Input: toSentenceCase('we are Humans') ––> Output: We Are Humans

function toSentenceCase(sentence) {
  let splitted = sentence.split(" ");
  let resultWordsArray = [];
  for (let i = 0; i < splitted.length; i++) {
    let updatedWord = splitted[i][0].toUpperCase() + splitted[i].slice(1);
    resultWordsArray.push(updatedWord);
  }
  console.log(resultWordsArray.join(" "));
}
toSentenceCase("we are Humans");

// Challenge 3

// Given an array of numbers, your function should return an array in the ascending order.
// Example:
// Input: sortArray([100,83,32,9,45,61]) ––> Output: [9,32,45,61,83,100]

function sortArray(arr) {
  return arr.sort((a, b) => a - b);
}

console.log(sortArray([100, 83, 32, 9, 45, 61]));

// Challenge 4

// Given a sentence, your function should reverse the order of characters in each word, keeping same sequence of words.
// Example:
// Input: reverseCharactersOfWord('we are Humans') –––> Output: ew era snamuH

function reverseCharactersOfWord(sentence) {
  let splitted = sentence.split(" ");
  let resultWordsArray = [];
  for (let i = 0; i < splitted.length; i++) {
    let updatedWord = splitted[i][0].toUpperCase() + splitted[i].slice(1);
    let reversedWordCharsArr = [];
    for (let j = splitted[i].length; j >= 0; j--) {
      reversedWordCharsArr.push(splitted[i][j]);
    }
    resultWordsArray.push(reversedWordCharsArr.join(""));
  }
  console.log(resultWordsArray.join(" "));
}
reverseCharactersOfWord("we are Humans");
