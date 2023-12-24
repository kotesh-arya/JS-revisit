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
