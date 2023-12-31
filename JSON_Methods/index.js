// JavaScript provides methods:

// JSON.stringify to convert objects into JSON.
// JSON.parse to convert JSON back into an object.

let student = {
  name: "John",
  age: 30,
  isAdmin: false,
  courses: ["html", "css", "js"],
  spouse: null,
};

let studentInString = JSON.stringify(student);
console.log(studentInString); // Object to stringified - The resulting json string is called a JSON-encoded or serialized or stringified or marshalled object. We are ready to send it over the wire or put into a plain data store.

let strigifyToJson = JSON.parse(studentInString);
console.log(strigifyToJson); //stringified to object

// JSON.stringify can be applied to primitives as well.

// a number in JSON is just a number
console.log(JSON.stringify(1)); // 1

// a string in JSON is still a string, but double-quoted
console.log(JSON.stringify("test")); // "test"

console.log(JSON.stringify(true)); // true

console.log(JSON.stringify([1, 2, 3])); // [1,2,3]

// JSON is data-only language-independent specification, so some JavaScript-specific object properties are skipped by JSON.stringify.

// Namely:

// Function properties (methods).
// Symbolic keys and values.
// Properties that store undefined.

let user = {
  sayHi() {
    // ignored
    alert("Hello");
  },
  [Symbol("id")]: 123, // ignored
  something: undefined, // ignored
};

console.log(JSON.stringify(user)); //{} EMPTY OBJECT

//  Nested objects are supported and converted automatically

let meetup = {
  title: "Conference",
  room: {
    number: 23,
    participants: ["john", "ann"],
  },
};

console.log(JSON.stringify(meetup));

// During nested objects the important limitation: there must be no circular references.

let room = {
  number: 23,
};

let meetup2 = {
  title: "Conference",
  participants: ["john", "ann"],
};

meetup2.place = room; // meetup references room
room.occupiedBy = meetup2; // room references meetup

JSON.stringify(meetup2);  // TypeError: Converting circular structure to JSON
