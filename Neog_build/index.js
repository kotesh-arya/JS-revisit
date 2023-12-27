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
