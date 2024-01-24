"use strict";
//  Property getters and setters

// Mainly there are two types of properties for objects
//  1. Data properties -  which we have been using till now
//  2. Accessor properties - which are operated(created and accessed) using functions
// but look like regular properties to external code

// Getters and setters

// These accessor properties are represented by getter and setter methods
// Inside the object literal they are represented by "get" and "set" infront of the function bodies

let obj = {
  firstName: "kotesh",
  lastName: "mudila",
  get fullName() {
    // getter, the code executed on getting obj.propName
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    // setter, the code executed on setting obj.propName = value
    [this.firstName, this.lastName] = value.split(" ");
  },
};
// The getter works when obj.fullName is read, the setter – when it is assigned.

console.log(obj.fullName); // "kotesh mudila" // we dont' need to call the obj.fullName() here as, there is get infront of the function declaration and it will take care of all the process to invoke the function and return the result

// But if we try to call it, then an error will be thrown
// obj.fullName(); //  TypeError: obj.fullName is not a function, the get changed it as a property LOL

obj.fullName = "mowa bro"; // we will set this normally and care should be taken inside the setter function

console.log(obj.fullName); // "mowa bro"

// Usage

// For instance, we have a user object with name and surname:

let user = {
  name: "John",
  surname: "Smith",
};
// Now we want to add a fullName property, that should be "John Smith". Of course, we don’t want to copy-paste existing information, so we can implement it as an accessor:

let user2 = {
  name: "John",
  surname: "Smith",
  get fullName() {
    return `${this.name} ${this.surname}`;
  },
};

console.log(user2.fullName); // John Smith

// From the outside, an accessor property looks like a regular one.
//  That’s the idea of accessor properties.
//  We don’t call user.fullName as a function
//  we read it normally: the getter runs behind the scenes.

// Now if an object's property do not have a setter function, then we cannot assign a value to a property with a name of the getter function

let user8 = {
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

// user8.fullName = "jack snyder"; //[In STRICT MODE] - TypeError: Cannot set property fullName of #<Object> which has only a getter
// In non-strict - it will be silent

// DESCRIPTORS FOR ACCESSOR PROPERTIES

// Accessor type of properties have a tweaked set of descriptors
// 1. get - a function WITHOUT ARGUMENTS that gets invoked when a property is read
// 2. set - a funcition WITH A SINGLE ARGUMENT that gets invoked when we set value to a property
// 3. enumerable -  same as data property [true - will show in loopings, otherwise won't]
// 4. configurable - same as data property [true - we can delete the property and change the enumerable to true/false, otherwise we cannot do them ]

// Let's create an accessor property "fullName" using defineProperty method

let obj4 = {
  name: "kotesh",
  surname: "mudila",
};

Object.defineProperty(obj4, "fullName", {
  get() {
    return `${this.name} ${this.surname}`;
  },
  set(value) {
    [this.name, this.surname] = value.split(" ");
  },
});

console.log(obj4.fullName); // "kotesh mudila"

obj4.fullName = "mowa bro";

console.log(obj4.fullName); // "mowa bro"

// CAUTION - A PROPERTY CAN EITHER BE A DATA PROPERTY WITH A VALUE OR AN ACCESSOR PROPERTY WITH GERTTER AND SETTER METHODS, BUT IT CANNOT BE BOTH

// THIS BELOW EXMPLE IS WRONG

let person = {
  name: "arya",
  age: 36,
};

// Object.defineProperty(person, "nameWithAge", {
//   get() {
//     return `${this.name} with ${this.age} years`;
//   },
//   value: `${this.name} with ${this.age} years`,
// }); // TypeError: Invalid property descriptor. Cannot both specify accessors and a value or writable attribute, [In STRICT MODE]

//  USECASE - I - Smarter getters/setters
// Getters/setters can be used as wrappers over “real” property values to gain more control over operations on the properties.

let person3 = {
  get fullName() {
    return `${this.name}`;
  },
  set fullName(value) {
    if (value.length < 4) {
      console.log("The fullname is too short");
      return;
    }
    this.name = value;
  },
};

// person3.fullName = "sam"; // The fullname is too short
person3.fullName = "samurai";
console.log(person3.fullName); // "samurai"

// USECASE - II - Using for compatibility
// One of the great uses of accessors is that they allow to take control over a “regular” data property at any moment by replacing it with a getter and a setter and tweak its behavior.

// Imagine we started implementing user objects using data properties name and age:

function User(name, age) {
  this.name = name;
  this.age = age;
}

let john4 = new User("John4", 25);

console.log(john4.age); // 25
// …But sooner or later, things may change. Instead of age we may decide to store birthday, because it’s more precise and convenient:

function User5(name, birthday) {
  this.name = name;
  this.birthday = birthday;
}

let john5 = new User5("John5", new Date(1992, 6, 1));
// Now what to do with the old code that still uses age property?

// We can try to find all such places and fix them, but that takes time and can be hard to do if that code is used by many other people. And besides, age is a nice thing to have in user, right?

// Let’s keep it.

// Adding a getter for age solves the problem:

function User6(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  // age is calculated from the current date and birthday
  Object.defineProperty(this, "age", {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    },
  });
}

let john3 = new User6("John3", new Date(1992, 6, 1));

console.log(john3.birthday); // birthday is available
console.log(john3.age); // ...as well as the age
// Now the old code works too and we’ve got a nice additional property.
