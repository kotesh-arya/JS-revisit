//  Understanding the Iteration methods better by comparing them with iteration methods of Array, Map, Set

// ITERATION OVER ARRAY
let myArr = [1, 2, 3, 4, 5];
console.log(myArr[Symbol.iterator]().next().value); // 1
console.log(myArr.keys().next().value); // 0
console.log(myArr.values().next().value); // 1
console.log(myArr.entries().next().value); // [0,1]

console.log(myArr.keys()); // Object [Array Iterator] {}
// Getting an Array out of this "Array Iterator Object" :

let arrayFromArrayIterableKeys = Array.from(myArr.keys());
console.log(arrayFromArrayIterableKeys); // [ 0, 1, 2, 3, 4 ]
arrayFromArrayIterableKeys.map((element) => {
  console.log(element); // 0 then 1 then 2 then 3 then 4 on the console
});

// ITERATION OVER MAP
let myMap = new Map();

myMap.set("country", "India");
myMap.set("state", "Andhra");

// console.log(myMap);
console.log(myMap.keys()); // [Map Iterator] { 'country', 'state' }

// ITERATION OVER SET
let myLanguageSet = new Set();

myLanguageSet.add("telugu");
myLanguageSet.add("English");

// console.log(myLanguageSet);
console.log(myLanguageSet.keys()); // [Set Iterator] { 'telugu', 'English' }

// Map, Set and Array's ineration methods give the above Iterator Objects(Array Iterator/Map Iterator/Set Iterator) which
// will have the next() method to iterate over elements untill last

// Whereas iteration methods on Objects will directly return an array of keys/values/entries

let myObj = {
  name: "kotesh",
  age: 26,
  role: "Developer",
};

console.log(Object.keys(myObj)); // [ 'name', 'age', 'role' ]
console.log(Object.values(myObj)); // [ 'kotesh', 26, 'Developer' ]
console.log(Object.entries(myObj)); // [ [ 'name', 'kotesh' ], [ 'age', 26 ], [ 'role', 'Developer' ] ]

// TRANSFORMING AN OBJECT BY USING THESE ITERATION METHODS
//  Objects don't support methods like filter and map which are for Arrays

// But using these iteration methods we can modify the Objects

let pricesObj = {
  banana: 1,
  orange: 2,
  meat: 4,
};

// Step 1: Use Object.entries(pricesObj) to return a nested array of keys and values
let entriesArrayFromObj = Object.entries(pricesObj);

console.log(entriesArrayFromObj); //[ [ 'banana', 1 ], [ 'orange', 2 ], [ 'meat', 4 ] ]

// Step 2: Map over this ARRAY mow and modify

let manipulatedEntriesArray = entriesArrayFromObj.map((entry) => [
  entry[0],
  entry[1] * 2,
]);
console.log(manipulatedEntriesArray); //[ [ 'banana', 2 ], [ 'orange', 4 ], [ 'meat', 8 ] ]

let doubledPricesObj = Object.fromEntries(manipulatedEntriesArray);

console.log(doubledPricesObj, "Transformed Object"); // { banana: 2, orange: 4, meat: 8 }

// Challenges

// Sum the properties
// There is a salaries object with arbitrary number of salaries.

// Write the function sumSalaries(salaries) that returns the sum of all salaries using Object.values and the for..of loop.

// If salaries is empty, then the result must be 0.

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function sumSalaries(obj) {
  let salaryValues = Object.values(obj);
  console.log(salaryValues); // [ 100, 300, 250 ]
  let sum = 0;
  for (salary of salaryValues) {
    sum += salary;
  }
  console.log(sum); //650
}

sumSalaries(salaries);

// Count properties
// Write a function count(obj) that returns the number of properties in the object:
let user = {
  name: "John",
  age: 30,
};

function getPropertiesCount(obj) {
  console.log(Object.entries(obj).length);
}
getPropertiesCount(user); // 2
