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
