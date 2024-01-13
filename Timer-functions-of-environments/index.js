// These methods are not a part of JavaScript specification. But most environments have the internal scheduler and all the environments provide these functions as methods of the Global object of the particular environment

// SetTimeout function with a function as first argument
// RECOMMENDED TO USE
// setTimeout(
//   (arg1, arg2) => {
//     console.log(arg1 + arg2);
//   },
//   1000,
//   3,
//   3
// );
// NOTE: As we are NOT calling the callback function seperately outside. Thus we need to pass the arguments of the function as 3rd and 4th value for the setTimeout function.

// SetTimeout function with a string representation as first argument
// NOT RECOMMENDED TO USE

// setTimeout('console.log("hello")', 1000);
// TypeError [ERR_INVALID_ARG_TYPE]: The "callback" argument must be of type function. Received type string ('console.log("hello")')

// Clearing this setTimeout function

// In the code below, we schedule the function and then cancel it (changed our mind). As a result, nothing happens:

let timerId = setTimeout(() => console.log("never happens"), 1000);
// console.log(timerId); // timer identifier

clearTimeout(timerId);
// console.log(timerId);

// setInterval
// The setInterval method has the same syntax as setTimeout:

// let timerId2 = setInterval(
//   (name) => {
//     // console.log(`${name}from set Time out`);
//     console.log(Date.now());
//     let date = new Date(Date.now());
//     console.log(date.getHours(), date.getMinutes(), date.getSeconds());
//   },
//   1000,
//   "kotesh"
// );

// // setTimeout(() => {
// //   clearInterval(timerId2);
// // }, 2000);

// Calcualting the execution time of a function using time method of console object
console.time("function executed in");
function sample(a, b) {
  console.log(a + b);
}
sample(3, 7);
console.timeEnd("function executed in");

// Replicating a setInterval with the best alternative of a nested setTimeout
// setInterval(() => console.log("tick"), 3000);
// In a setInterval,  the inner function execution will consume the interval we given to the setTimeout

// But incase of nested setTimeout the time delay will be started after the first function is completely executed and it wont eat up the time interval
// let funcCounter = 0;
// let timerId6 = setTimeout(function sample() {
//   funcCounter += 1;
//   console.log(funcCounter);
//   timerId6 = setTimeout(sample, 3000);
// }, 2000);

// Zero delay setTImeout

setTimeout(() => {
  console.log("world"); // Will be printed next, as this will be exexuted by the scheduler of the browser/other environment
}, 0);
setTimeout(() => {
  console.log("world2");
}); // Does the same job as the setTimeout with 0 passed as an argument

console.log("hello"); //Will be printed first and this is synchronous code

// In browser environment
// In the browser, there’s a limitation of how often nested timers can run. The HTML Living Standard says: “after five nested timers, the interval is forced to be at least 4 milliseconds.”.
let start = Date.now();
let times = [];

setTimeout(function run() {
  times.push(Date.now() - start); // remember delay from the previous call

  if (start + 100 < Date.now()) console.log(times);
  // show the delays after 100ms  [1,1,1,1,6,10,14,18,23,27,43,47,51,56,60,65,82,87,91,95,100,104] (IN BROWSER)
  else setTimeout(run); // else re-schedule
});

// First timers run immediately (just as written in the spec), and then we see 9, 15, 20, 24.... The 4+ ms obligatory delay between invocations comes into play.

// The similar thing happens if we use setInterval instead of setTimeout: setInterval(f) runs f few times with zero-delay, and afterwards with 4+ ms delay.

// CHALLENGES

// Challenge 1
// Output every second
// importance: 5
// Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to.

// Make two variants of the solution.

// Using nested setTimeout.

function printNumbers(from, to) {
  let timerId;

  timerId = setTimeout(function Func() {
    if (to >= from) {
      console.log(from++);
      timerId = setTimeout(Func, 1000);
    } else {
      clearTimeout(timerId);
    }
  }, 1000);
}

printNumbers(3, 8);

// Using setInterval.

function printNumbersAgain(from, to) {
  let timerId;

  timerId = setInterval(() => {
    if (from >= to) {
      clearInterval(timerId);
    }
    console.log(from++);
  }, 1000);
}

printNumbersAgain(10, 15);
