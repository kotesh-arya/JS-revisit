// Prototypal inhetitance :
// When ever we try to access a property inside an object then if that property is not existed in that object, then it will search that property inside the prototype of that object and it will continue till that property found or the prototype chain is ended

// The inheriting of property from the prototype of an object is called as Prototypal inheritence

let animal = {
  eats: true,
  swims: true,
  flies: false,
  walk() {
    console.log("Animal walk");
  },
};

let lion = {
  hunts: true,
  __proto__: animal, //  First way of setting prototype for an object
};
let rabbit = {
  jumps: true,
};
rabbit.__proto__ = animal; // Second way of setting prototype for an object
let deer = {
  runs: true,
};
Object.setPrototypeOf(deer, animal); //Third way of setting prototype for an object

let heyna = {
  __proto__: animal,
};
console.log(lion.eats); // true
console.log(rabbit.flies); // false
console.log(deer.swims); // true
heyna.walk(); //"Animal walk"

let longEars = {
  earLength: 100,
  __proto__: rabbit,
};

longEars.walk(); // first search in longEats ---prototype-->
//  in rabbit  --prototype--> animal [FOUND THE METHOD!]

// Now if we read something from longEar, and it’s missing, JavaScript will look for it in rabbit, and then in animal.

// But there are two important limitations for this prototypal chain linking

// 1. The references can’t go in circles. JavaScript will throw an error if we try to assign __proto__ in a circle.

let father = { name: "Jack daniel" };
let son = {};

father.__proto__ = son;
// son.__proto__ = father; //TypeError: Cyclic __proto__ value

// 2. The vale of __proto__ can be an object or null. Other types are ignored

//  WRITING/ASSIGNING OF PROPERTIES WILL NOT USE THE PROTOTYPE
// Cause the property/method will be created on the current object only

// Write/delete operations work directly with the object.

// In the example below, we assign its own walk method to rabbit:

let animal2 = {
  eats: true,
  walk() {
    /* this method won't be used by rabbit */
  },
};

let rabbit2 = {
  __proto__: animal2,
};

rabbit2.walk = function () {
  console.log("Rabbit2! Bounce-bounce!");
};

rabbit2.walk(); // Rabbit! Bounce-bounce!

// Accessor properties are an exception, as assignment is handled by a setter function. So writing to such a property is actually the same as calling a function.

// For that reason admin.fullName works correctly in the code below:

let user = {
  name: "John",
  surname: "Smith",

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },

  get fullName() {
    return `${this.name} ${this.surname}`;
  },
};

let admin = {
  __proto__: user,
  isAdmin: true,
};
// getter in the user prototype triggers!
console.log(admin.fullName); // John Smith (*)

// setter in the user prototype triggers!
admin.fullName = "Alice Cooper"; // (**)

console.log(admin.fullName); // Alice Cooper, state of admin modified
console.log(admin.name); //Alice
console.log(admin.surname); // Cooper

console.log(user.fullName); // John Smith [as user object have the getter function that returns the direct values of name and surname]
console.log(user.name); //John   original direct value
console.log(user.surname); //  Smith  original direct value

// for…in loop
// The for..in loop iterates over inherited properties too.

let animal3 = {
  eats: true,
};

let rabbit3 = {
  jumps: true,
  __proto__: animal3,
};

for (let key in rabbit3) {
  console.log(key); //jumps and then eats
}

// But in Object.keys method, these inherited properties won't showup

console.log(Object.keys(rabbit3)); // [ 'jumps' ]

let ultraProMax = {
  name: "mowa bro",
};
let ultraPro = {
  age: 24,
  __proto__: ultraProMax,
};
let pro = {
  role: "manager",
  __proto__: ultraPro,
};

for (let key in pro) {
  console.log(key, "all properties available for pro object"); // role then age  then name
}

// Properties shown from bottom to top of the Prototype chain

// SETTING PROTOTYPE FOR OBJECTS CREATED using a CONSTRUCTOR function

// using F.prototype  '// here F is the constructor function name
// Remember, new objects can be created with a constructor function, like new F().
let user3 = {
  race: "human",
};
function Admin(name) {
  this.name = name;
}

Admin.prototype = user3;

let admin1 = new Admin("kotesh");

console.log(admin1.race); // human  - from the prototype object

// Native Prototypes for the built-in constructors - Object, Array, Function and Date

// The prototype object for the Object constructor function

let obj = { name: "first" };
console.log(obj.toString()); // "[object Object]"

// But there is no method inside the obj with the name of toString :(
// Where is that method coming from ???

// It if coming from the Object.prototype object which has all the methods

// creating an object using {} - object literals means invoking the new Object()

let constructorCreatedObject = new Object();
console.log(constructorCreatedObject); // { }

//  and MAINLY the Object constructor function always have a property "prototype" which contains a numerous helpful functions methods

// So,  the obj acesses the property/method from the Object.prototype

console.log(Object.prototype); // { constructor : Object, toString: {}, an object with many such helpful methods - these methods are called as built-in methods}

// Now
console.log(obj.__proto__); //{ constructor : Object, toString: {}, an object with many such helpful methods - these methods are called as built-in methods}

console.log(obj.__proto__ === Object.prototype); //true
console.log(obj.toString === Object.prototype.toString); //true
console.log(obj.__proto__.toString === Object.prototype.toString); //true

// The prototype object for the Array constructor function

let arr = [1, 2, 3, 4];
console.log(arr.join("")); //"1234"
// This join method is inherited from the Array.prototype object
console.log(arr.__proto__ === Array.prototype); // true

console.log(arr.join === Array.prototype.join); // true
console.log(arr.__proto__.join === Array.prototype.join); // true

// The prototype object for the Function constructor function

function sample(a, b) {}

console.log(sample.length); // 2 - the number of parameters in the functions definition, NOT ARGUMENTS

// this length property is inherited from the Function.prototype object
console.log(sample.length, "first"); // 2
console.log(Function.prototype.length, "second"); //0
// LENGTH IS A PROPERTY WITH DIFFERENT VALUES, IT'S NOT A FUNCTION WITH A BODY TO COMPARED WITH
console.log(sample.__proto__ === Function.prototype);

console.log(sample.length === Function.prototype.length, "why??"); // true, but showing false [LENGTH IS A PROPERTY WITH DIFFERENT VALUES, IT'S NOT A FUNCTION WITH A BODY TO COMPARED WITH]
console.log(sample.__proto__.length === Function.prototype.length); // true

// So, where does primitives get methods from EVEN IF THEY ARE NOT OBJECTS AT ALL ??
//We already know that then we acess a method on the primitive data-type, AUTO-BOXING happpens , where a wrapper object is created, which had the exact value of the primitive and many useful methods inside it where constructor objects for primitive types are

// string data-types - new String()
// number data-types - new Number()
// boolean data-types - new Boolean()

console.log("kotesh".toUpperCase()); // "KOTESH"

// Finally, null & undefined do not have any wrapper object that provides methods :))) bass

// Let's manipulate the in-built prototype objects by adding new methods into them

String.prototype.addStarToText = function () {
  console.log(this);
  console.log(typeof this);
  return this + "*";
};

console.log("HELLO".addStarToText()); // " HELLO* "

// Now this addStarToText method is inherited and available to every string we write from now on :)))

// BUT MODIFYING A NATIVE PROTOTYPE OBJECT BY ADDING OUR OWN METHODS INTO IT IS A BAD IDEA
// as prototypes are available globally, there can be clashes if two libraries add a method with a same name into the native prototype object

// But in MODERN JAVASCRIPT, there is onlt one case we are going to modify the native prototypes by adding our own methods into them and it's called - POLYFILLING

// If a browser not support not supports a latest method in the javascript specification
// then we can write our own method with the same functionality as  A REPLACEMENT FOR THAT NON-SUPPORTED METHOD in the browser.

if (!String.prototype.addDash) {
  // If there is no addDash method inside the native prototype object
  // Then add it!
  String.prototype.addDash = function () {
    return "---" + this + "---";
  };
}

console.log("mowa".addDash()); //" ---mowa--- "

// As these methods are present inside the native prototype we can borrow them into our normal objects

let obj3 = {
  0: "Hello!",
  1: "World",
  length: 2,
};

obj3.__proto__ = Array.prototype; // borrowing/ setting the Array.prototype object as the [[prototype]] for this obj3 object

console.log(obj3.join(","));

// ONE LAST REMINDER--- No object should inherit from two different objects
