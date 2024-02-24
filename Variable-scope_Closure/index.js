// "use strict";

// CLOSURES
//  --> A function passed as an argument to a parent function and called inside the parent function, will have the access to the variables of the particular parent function -- IT FORMS A CLOSURE WITH THE VARIABLE ENVIRONMENT OF THE PARENT-FUNCTION inside which it is called.
function child(parentName) {
  console.log(`${parentName}`);
}

function firstParent(cb) {
  let name = "John";
  cb(name);
}

function secondParent(cb) {
  let name = "Laila";
  cb(name);
}

firstParent(child); // John - variable from first parent function environment
secondParent(child); // Laila - variable from first parent function environment

// Challenges

// Challenge 1

// Does a function pickup latest changes?
// importance: 5
// The function sayHi uses an external variable name. When the function runs, which value is it going to use?

let personName = "John";

function sayHi() {
  console.log("Hi, " + personName);
}

personName = "Pete";

sayHi(); //"Hi, Pete" - THe function call of sayHi will create an Inner Lexical Environment and has a reference to it's outer lexical environment, which is the Global Lexical Environment and inside this the latest value for the property personName is "Pete". So, pete will be picked

// A function gets outer variables with latest values/from the latest assigned value

// Challenge 2

// Which variable is considered in case if a same variable declared in inner and outer scopes ??

function makeWorker() {
  let name = "Pete";

  return function () {
    console.log(name);
  };
}

let name = "John";

// create a function
let work = makeWorker();

// call it
work(); // It will show "Pete" as the nested function got the variable "name" in it's first external environent(makeWorker()'s inner lexical environment) only

// Challenge 3

// Are counters independent?
// importance: 5
// Here we make two counters: counter and counter2 using the same makeCounter function.

// Are they independent? What is the second counter going to show? 0,1 or 2,3 or something else?

function makeCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}

let counter = makeCounter(); // here the count is 0 when a function is being returned
console.log(counter()); // 0
console.log(counter()); // 1

let counter2 = makeCounter(); // here also the count is 0 when a function is being returned
console.log(counter2()); // 0 // accessing the newly created lexical environment with a counter variable with a value 0

console.log(counter2()); // 1 // incremented to 1

// Even If they are returned from the makeCounter function, individually
// They are accessing the count variable inside the same lexical  which has the initial value of 0

// So, for every version counter-functions (counter1, counter2,... counterN)
// Each counter version will have a Lexical environment with a count variable of value 0

// Challenge 4

// Counter object
// importance: 5
// Here a counter object is made with the help of the constructor function.

// Will it work? What will it show?

function Counter() {
  let count = 0;

  this.up = function () {
    return ++count;
  };
  this.down = function () {
    return --count;
  };
}

let counterFromConstructor = new Counter();

console.log(counterFromConstructor.up()); // ? 1
console.log(counterFromConstructor.up()); // ? 2
console.log(counterFromConstructor.down()); // 1

//As these methods are modifying a same variable inside the Lexical Environment It's value will be Incremented/Decremented correspondingly

// Challenge 5

// Function in if
// importance: 5
// Look at the code. What will be the result of the call at the last line?

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    console.log(`${phrase},Mister ${user}`);
  }
}
sayHi();

//Hello John
// Hello from the Global Lexical Environment and John from the lexical environment of the if block

// Challenge 6

// Sum with closures
// importance: 4
// Write function sum that works like this: sum(a)(b) = a+b.

// Yes, exactly this way, using double parentheses (not a mistype).

// For instance:

function sum(first) {
  return function (second) {
    console.log(first + second);
  };
}

sum(1)(2);
sum(5)(-1);

// Challenge 7

// Is variable visible?
// importance: 4
// What will be the result of this code?

let x = 1;

function func() {
  console.log(x); // ?  ReferenceError: Cannot access 'x' before initialization

  let x = 2;
}

func();
// P.S. There’s a pitfall in this task. The solution is not obvious.

// In this example we can observe the peculiar difference between a “non-existing” and “uninitialized” variable.

// As you may have read in the article Variable scope, closure, a variable starts in the “uninitialized” state from the moment when the execution enters a code block (or a function). And it stays uninitalized until the corresponding let statement.



// // Challenge 8

// Make a set of “ready to use” filters:

// inBetween(a, b) – between a and b or equal to them (inclusively).
// inArray([...]) – in the given array.
// The usage must be like this:

// arr.filter(inBetween(3,6)) – selects only values between 3 and 6.
// arr.filter(inArray([1,2,3])) – selects only elements matching with one of the members of [1,2,3].
// For instance:

/* .. your code for inBetween and inArray */
let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(leftLimit, rightLimit){

}

alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

alert( arr.filter(inArray([1, 2, 10])) ); // 1,2




// SCOPE SAMPLE TRY OUT


(function run() {
  console.log("outer function runs only once of course!");

  for (var i = 0; i < 5; i++) {
    setTimeout(function logValue() {
      console.log(i); //5
    }, 100);
  }
})();

(function run() {
  for (let i = 0; i < 5; i++) {
    setTimeout(function log() {
      console.log(i); //0 1 2 3 4
    }, 100);
  }
})();

// for (var i = 0; i < 5; i++) {
//   console.log("*");
// }
// console.log(i);

// // Assume these are asynchronous operations that just logs i value
// console.log(i);
// console.log(i);
// console.log(i);
// console.log(i);
// console.log(i);

// from this point our Asynchronous functions starts executing with this i value 5
