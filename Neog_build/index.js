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
