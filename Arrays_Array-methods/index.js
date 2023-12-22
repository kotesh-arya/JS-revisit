console.clear();
let fruits = [
  "Apple",
  2,
  { name: "kotesh", age: 26 },
  function () {
    console.log("hello the element function");
    return "Finally I am returned!";
  }
];
// console.log(fruits[3]());
// console.log(fruits.slice(0));
// fruits.slice(0).concat([3232,23232,2323])
// console.log(fruits.slice(0).concat([3232, 23232, 2323]));
let arr = "kotesh";

for (let key in arr) {
  // console.log(arr[key]); // Apple, Orange, Pear
}

let ints = [1, 2, 3, 4, 5];

ints.forEach(function (item, index, array) {
  // ... do something with item
  // console.log(`I am ${item}, at ${index} index in  ${array}`);
});

let result = ints.find(function (item, index, array) {
  // ... do something with item
  return array.indexOf(item) === 2;
  // console.log(`I am ${item}, at ${index} index in  ${array}`);
});

// console.log(result);

// ARRAY METHODS - 18 DECEMBER 2023 11:55 AM

// Methods to Add/Remove elements  - 🔖️MODIFIES THE ORIGINAL ARRAY

// console.log()

// Original Effective

let arr4 = [1, 2, 3];
console.log(arr4.push(4, 5, 6));
console.log(arr4);

console.log(arr4.pop());
console.log(arr4);

console.log(arr4.shift());
console.log(arr4);

console.log(arr4.unshift("x"));
console.log(arr4);

// splice(index where operation has to be done/started, deleteCount, ...items) – at index pos deletes deleteCount elements and inserts items.

console.log(arr4.splice(2, 1, "from splice"));
console.log(arr4);

// Original Uneffective
console.log(arr4.slice(1, 3));
console.log(arr4); // original array remains unchanged by slice() -> ["x",2,"from splice",4,5]

console.log(arr4.concat("concatenated piece 1", "concatenated piece 2"));
console.log(arr4); // original array remains unchanged by concat()

// Searching Operations
let arr5 = ["a", "b", "c", "d", "e", "a"];
console.log(arr5.indexOf("b", 0));

console.log(arr5.lastIndexOf("a")); // 5  -> from the END "a" is first found at 5th index

console.log(arr5.includes("a")); //true
console.log(arr5.includes("A")); //false   (case sensitive)

console.clear();

let army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge;
  }
};

let users = [{ age: 16 }, { age: 20 }, { age: 23 }, { age: 30 }];

// let soldiers = users.filter((user) => army.canJoin(user));
let soldiers = users.filter(function canJoin(user) {
  console.log(this);
  return user.age >= this.minAge && user.age < this.maxAge;
}, army);
console.log(soldiers);

console.clear();

// Comparing arrays w.r.t their elements [Helpful method] :)))
function compareArrays(arr1, arr2) {
  return (
    arr1.length === arr2.length && // first check whether lengths are equal
    arr1.every((value, index) => value === arr2[index]) // check every value of arr1 === element of arr2 accessed by arr2[index]
  );
}

console.log(compareArrays([1, 2], [1, 2]));

// Challenges

// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each WORD AFTER EACH DASH BECOMES UPPERCASED.

// FROM SCRATCH APPROACH BY ME
function camelize(str) {
  let splitted = str.split("-");
  let camelized = "";
  for (let i = 0; i < splitted.length; i++) {
    // console.log(splitted[i]);
    if (i > 0) {
      // console.log(i);
      let splittedChars = splitted[i].split("");
      // console.log(splittedChars);
      splittedChars[0] = splittedChars[0].toUpperCase();
      let joinedChars = splittedChars.join("");
      // console.log(joinedChars);
      camelized += joinedChars;
    } else {
      camelized += splitted[i];
    }
  }
  return camelized;
}

// Js.info solution
// function camelize(str) {
//   return str
//     .split("-")
//     .map((word, index) =>
//       index > 0 ? word[0].toUpperCase() + word.slice(1) : word
//     )
//     .join("");
// }

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));

// Challege 2

// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

// The function should not modify the array. It should return the new array.

let arr6 = [5, 3, 8, 1];
function filterRange(arr, first, later) {
  return arr.filter((item) => item >= first && item <= later);
}
let filtered = filterRange(arr6, 1, 4);
console.log(filtered);

//  Challenge 3

// Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

// The function should only modify the array. IT SHOULD NOT RETURN ANYTHING

let copyArr6 = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b) {
  // let sorted = arr.sort((a, b) => a - b); // [1,3,5,8]
  // console.log(sorted);
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1); // plucking one element at a time using slice as it modifies the original array  [simple logic]
    }
  }
}
filterRangeInPlace(copyArr6, 1, 4);
console.log(copyArr6);

// Challenge 4. Sort in decreasing order

let arr0 = [5, 2, 1, -10, 8];

arr0.sort((a, b) => b - a);
// console.log(arr0);
console.clear();

//  Challenge 5 - Sort without changing the original array
let languages = ["HTML", "JavaScript", "CSS"];
console.log(languages.slice().sort());
console.log(languages, "original array");

function Calculator(name) {
  //  a {} is created implicitly which is referred by "this"
  (this.name = "calculator"),
    (this.age = 1),
    (this.calculate = (str) => {
      let splitted = str.split(" ");
      // let result = eval(
      // Number(splitted[0]) + splitted[1] + Number(splitted[2])  // OTHER WAY
      // );
      let result = this[splitted[1]](Number(splitted[0]), Number(splitted[2]));
      return result;
    }),
    (this.addMethod = (operation, func) => {
      this[operation] = func;
    });
  // that { ...properties here } with populated properties is finally returned
}

let calc = new Calculator("kotesh");
let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
console.log(powerCalc.calculate("2 ** 3"));

// Challenge 6

// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

// For instance:

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users2 = [john, pete, mary];

// let userNames = users2.map((user) => user.name);

// console.log(userNames);

// Challenge 7

// You have an array of user objects, each one has name, surname and id.

// Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

// For instance:

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users2 = [john, pete, mary];
// let usersMapped = users2.map((user, index) => {
//   return { fullName: user.name + user.surname, id: index + 1 };
// });
// console.log( usersMapped[0].fullName);

// Challenge 8

// Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

// For instance:

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let people = [pete, john, mary];
// function sortByAge(arr) {
//   arr.sort((a, b) => {
//     return a.age - b.age;
//   });
// }
// sortByAge(people);
// console.log(people[0].name);
// console.log(people[1].name);
// console.log(people[2].name);

// Challenge 9 - SKIPPED INTENTIONALLY AS IT SOUNDED LIKE BULLSHIT

// Challenge 10

// Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

// The formula for the average is (age1 + age2 + ... + ageN) / N.

// For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arrX = [john, pete, mary];

function getAverageAge(users) {
  let result = 0;
  users.forEach((person) => {
    result += person.age;
  });
  return result / users.length;
}
console.log(getAverageAge(arrX));

// Challenge 11

// Let arr be an array.

// Create a function unique(arr) that should return an array with unique items of arr.

// For instance:

function unique(arr) {
  /* your code */
  let uniqueArr = [];
  for (let name of arr) {
    if (!uniqueArr.includes(name)) {
      uniqueArr.push(name);
    }
  }
  return uniqueArr;
}

let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O"
];
console.log(unique(strings));

// Challenge 12

// Let’s say we received an array of users in the form {id:..., name:..., age:... }.

// Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.

// For example:

let usersO = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 }
];
function groupById(users) {
  // let resultObj = {};
  // for (let i = 0; i < users.length; i++) {
  //   resultObj[users[i].id] = users[i];
  // }
  // return resultObj;
  return users.reduce((acc, current) => {
    acc[current.id] = current;
    return acc;
  }, {});
}
let usersById = groupById(usersO);
console.log(usersById);


