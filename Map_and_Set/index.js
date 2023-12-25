//  Map is also a collection of keyed data items like object but Map can accept key of any data type

let sampleMap = new Map();

console.log(sampleMap);

sampleMap.set("first", "string keyed property");

sampleMap.set(2, "numeric keyed property");

sampleMap.set(true, "boolean keyed property");

console.log(sampleMap);

// Iterating over a Map using 3 different in-build methods

let recipeMap = new Map([
  ["cucumber", 500],
  ["tomatoes", 350],
  ["onion", 50],
]);
console.log(recipeMap);

for (let key of recipeMap.keys()) {
  console.log(key);
}

for (let value of recipeMap.values()) {
  console.log(value);
}

for (let entry of recipeMap.entries()) {
  console.log(entry);
}

recipeMap.forEach((key, value) => {
  console.log(`${key} : ${value}`);
});

let sampleObj = {
  name: "kotesh",
  age: 26,
  role: "developer",
};

let entriesArrOfTheObject = Object.entries(sampleObj);
console.log(entriesArrOfTheObject);

let mapFromObject = new Map(entriesArrOfTheObject);

console.log(mapFromObject);

//  Set is another special type of collection which stored values which don't repeat

let mySet = new Set();
console.log("MY SET:-", mySet);

// It's main feature is :- It won't ALLOW / MAINTAIN DUPLICATES, every value is unique
mySet.add("mowa");
mySet.add("mowa");
mySet.add("mowa");
mySet.add("mowa");

console.log("MY SET:-", mySet); //  Set(1) { 'mowa' }
console.log(Array.from(mySet)); // [ 'mowa' ]

// Here even if the value passed is a complex object and if it is passed again
//  It won't be added, as set() can detect the duplication very efficiently

// A set's functionality can be recreated by using a find() method on insertion of every element but the issue is
// The performance will be worst as the find method will wall over the whole array to check the pre existence of an element which if going to be pushed

//  But set is much optimized internally for this UNIQUENESS CHECK process

// Iteration over Set()

// It has inbuilt forEach and as it contains only values, a for...of loop can also be used

// Adding some more different items
mySet.add("java");
mySet.add("kova");
mySet.add("lava");

for (let value of mySet) {
  console.log(value); // mowa java kova lava
}

mySet.forEach((value, valueRepeat, mySet) => {
  console.log(`${value}  ${valueRepeat}`);
});

// Here valueRepeat argument is used to make this call back funciton compatiable with the call back function
// of map as it has 3 arguments(value, key, myMap), so that set can replace map and vice versa
