// A new and effective way to crate objects is using constructor functions invoked with the "new" operator

// A constructor function is a special function with a name starting with a capital letter

function User(name, role) {
  this.name = name;
  this.role = role;
}

let userKotesh = new User("kotesh", "Developer"); //  { name: 'kotesh', role: 'developer' }

let userJohn = User("John", "Designer"); // { name: 'John', role: 'Designer' }
let userAliya = new User("Aliya", "Recruiter"); // { name: 'Aliya', role: 'Recruiter' }
let userDavid = new User("David", "Tester"); // { name: 'David', role: 'Tester' }
console.log(userKotesh);
console.log(userAliya);
console.log(userDavid);
console.log(userJohn); // Undefined as this constructor function is called without new keyword

// To make this call work we can use the "new.target" property inside the function body to know whether the constructor function is called with a new or not.
function Person(name, role) {
  if (!new.target) {
    //Checking whether the function is called with new or not
    return new Person(name, role); //If not called with new, then inside the function call the constructor function again with "new" now and return that result out
  }
  this.name = name;
  this.role = role;
}

let userRoadie = Person("Roadie", "Team lead");
console.log(userRoadie);

// This above "new.target" checking approach is sometimes used in libraries to make the syntax more flexible. So that people may call the function with or without new, and it still works.

// When a function is executed with new, it does the following steps:

// A new empty object is created and assigned to this.
// The function body executes. Usually it modifies this, adds new properties to it.
// The value of this is returned.

// Anatomical Example
function User(name) {
  // this = {};  (implicitly)

  // add properties to this
  this.name = name;
  this.isAdmin = false;

  // return this;  (implicitly)
}

// Much shorter than using literals every time, and also easy to read.

// REUSABLE OBJECT CREATION CODE

// By using this constructor we can encapsulate confidential object creation code inside a constructor function and immediately invoke it without giving it any name, so that the data inside this function is not accessible by any other part of the script

let userJack = new (function () {
  this.name = "Jack";
  this.role = "CEO";
})();

console.log(userJack); // here the object is created from an anonymous constructor function

// RETURN FROM CONSTRUCTORS
// Usually, constructors do not have a return statement. Their task is to write all necessary stuff into this, and it automatically becomes the result.

function Gamer(name, score) {
  this.name = name;
  this.score = score;
  return {
    name: "Nobita",
    score: 0,
  };
}

let munnaGamer = new Gamer("Munna", 333);

console.log(munnaGamer); //{ name: 'Nobita', score: 0 } the constructed object will not be returned, the object beside the return statement is only returned

function Swimmer(name, lap) {
  this.name = name;
  this.lap = lap;
  return "mowa bro"; // this primitive will not be returned as it gets ignored
  return; // <-- returns this same constructed object only
}

let wumpySwimmer = new Swimmer("Wumpy", 12);
console.log(wumpySwimmer); // { name: 'Wumpy', lap: 12 }

// ******** Omitting parentheses**********
// By the way, we can omit parentheses after new

// let user8 = new User(); // <-- no parentheses
// same as
// let user9 = new User();

// Omitting parentheses here is not considered a “good style”, but the syntax is permitted by specification.

// WE CAN ATTACH METHODS TO THE OBJECT FROM INDSIDE THE CONSTRUCTOR FUNCTION ALSO

function User63(name) {
  this.name = name;
  this.showName = function () {
    console.log(`The user name is: ${this.name}`);
  };
}

let jerseyUser = new User63("Jersey");

jerseyUser.showName();

// CHALLENGES

// Challenge 1

// Two functions – one object
// importance: 2
// Is it possible to create functions A and B so that new A() == new B()?
let obj = {};

function A(name) {
  return obj;
}

function B(name) {
  return obj;
}

let first = new A("first");
let second = new B("second");

console.log(first == second);
// As we can return a different object from the constructor function, we can simply return the same predefined external object, then their result will be the same

// Challenge 2
// Calculator Constructor with methods
function Calculator() {
  this.read = function () {
    this.a = prompt("Enter value for a", 0);
    this.b = prompt("Enter value for b", 0);
  };
  this.sum = function () {
    return +this.a + +this.b;
  };
  this.mul = function () {
    return this.a * this.b;
  };
}
let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());

// Challenge 3
// Accumulator object creation and on every invocation of the read method, increment the value
function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function () {
    this.value++;
  };
}

let accumulator = new Accumulator(1);
console.log(accumulator.value); // 1
accumulator.read();
accumulator.read();
accumulator.read();
console.log(accumulator.value); // 4


