// Function created using normal syntax
function normalFunc() {
  console.log("hiee");
}

console.log(normalFunc); // [Function: normalFunc]  --> Normal function definitions will have a name.

normalFunc();

// Function created using the new Function syntax
let myFunc = new Function("a", "b", 'console.log("hello")');

console.log(myFunc); // [Function: anonymous] ---> functions created with this syntax will be anonymous functions, they dont have any name
myFunc();

let addFunction = new Function("a", "b", "return a+b");

console.log(addFunction(2, 3)); // 5
console.log(addFunction(5, 5)); // 10
console.log(addFunction(1, 1)); // 2

// The main difference here is this way of functions will be created from a string being passed DURING RUNTIME

// With this Awesome way of creating functions from a string, we can create functions from a string data recieved from a server and then execute it.

let str = `console.log('received code from a server dynamically')`;

let func = new Function(str);
func();

// Now what about the closure for this type of functions ??

// As we already know that for normal nested function, the lexical environment of the parent function is considered for forming a closure and [[Environment]] property of the inner function will refer to the Inner lecical environment of the parent function

// But functions created using this syntax, inside a parent function, will refer to to the Global lexical Environment when we access the [[Environment]] property of this inner function created using the new Function() syntax

function parent() {
  let variableInTheClosure = "LOL";
  let child = new Function(`console.log(variableInTheClosure)`);
  return child;
}
let childFunc = parent();
// childFunc(); // ReferenceError: variableInTheClosure is not defined

// Regular behaviour
function getFunc() {
  let value = "test with normal function statement";

  let func = function () {
    console.log(value);
  };

  return func;
}

getFunc()();

// WE CAN USE AN ARRAY TO PASS MULTIPLE PARAMETERS FOR THE FUNCTION
let anotherFunc = new Function(["a", "b"], "console.log(a+b)");
anotherFunc(8, 8);



// Summary
// Functions created with new Function, have [[Environment]] referencing the global Lexical Environment, not the outer one. Hence, they cannot use outer variables. But that’s actually good, because it insures us from errors. Passing parameters explicitly is a much better method architecturally and causes no problems with minifiers.

