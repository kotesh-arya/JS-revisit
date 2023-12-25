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

//  Challenges

// Challenge 1

// Filter unique array members

// Let arr be an array.

// Create a function unique(arr) that should return an array with unique items of arr.

function unique(arr) {
  /* your code */
  // console.log(arr, "array from parameter");
  let uniqueElementSet = new Set();

  for (const value of arr) {
    uniqueElementSet.add(value);
  }
  let transformedArrayFromSet = Array.from(uniqueElementSet);
  return transformedArrayFromSet;
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(unique(values));
console.clear();
// Challenge 2

// Anagrams are words that have the same number of same letters, but in different order.

// For instance:

// nap - pan
// ear - are - era
// cheaters - hectares - teachers

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
function aclean(arr) {
  let nonAnagramMap = new Map();
  for (const word of arr) {
    let splitted = word.toLowerCase().split("");
    console.log(splitted.sort().join(""), word);
    nonAnagramMap.set(splitted.sort().join(), word);
  }
  console.log(nonAnagramMap.values(), "non anagram Map");
  let nonAnagrams = Array.from(nonAnagramMap.values());
  return (nonAnagrams);
  // return arr.split();
}
console.log(aclean(arr), "result***********");

// Challenge 3
// We’d like to get an array of map.keys() in a variable and
//  then apply array-specific methods to it, e.g. .push.

// But that doesn’t work here:

// FIX THIS!!

let map = new Map();

map.set("name", "John");
console.log(map);
let keys = map.keys();

console.log(keys);
// keys.push("more"); // TypeError: keys.push is not a function

// The reason for error is map.keys() returns an Mapiterable object which is an iterable but
//  technically an array to have push and pop methods

//  To be able to add the "more" into the keys , the returnes Mapiterable from map.keys() should
//  be transformed into an Array using Array.from()

let arrayFromMapIterable = Array.from(keys);

console.log(arrayFromMapIterable);
arrayFromMapIterable.push("more");
console.log(arrayFromMapIterable); //after pushing
