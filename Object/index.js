let user = {
  name: "kotesh",
  role: "developer",
};

delete user.name; // delete operator to delete a property of an object
console.log(user);
console.log(user["name"]);

// We can also use multiword property names, but then they must be quoted:

let user2 = {
  name: "mowa",
  "current company": "vistara",
};
// console.log(user2.current company); This will throw an error

console.log(user2["current company"]);
// When accessing such multiword string keyed properties USE THE SQUARE-BRACKET NOTATION

// Square brackets also provide a way to OBTAIN THE PROPERTY NAME AS THE RESULT OF AN EXPRESSION – as opposed to a literal string – like from a variable as follows:

let keyVariable = "age";

let user3 = {
  [keyVariable]: 16,
};

console.log(user3["age"]); // 16
console.log(user3[keyVariable]); //16 this also works - especially when the above defined key variable gets a value from a promt or during code execution

// The dot notation cannot be used in a similar way:

let user4 = {
  name: "John",
  age: 30,
};

let key = "name";
console.log(user4.key); // undefined  - as it turns out to be   user4."name" which is incorrect way to accces a property key which is a string
console.log(user4[key]); // String keyed properties of an object shold always be accessed using the bracket notation

// Computed properties
// We can use square brackets in an object literal, when creating an object. That’s called computed properties.

let fruit = 4;

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit, So we can use the bracket notation while creating an object which a property key(string) that will be available during execution
};

console.log(bag["4"]); // 5 if fruit=4  ---> here the number 4 will be converted as a string when it is being used as a key of an object property

// We can use more complex expressions inside square brackets:

let fruit3 = "apple";
let bag3 = {
  [fruit3 + "Computers"]: 5, // bag.appleComputers = 5
};
console.log(bag3.appleComputers);
// console.log(bag3[appleComputers]); --> ReferenceError: appleComputers is not defined (makes sense)
console.log(bag3["appleComputers"]);

function createUserObj(name, age) {
  return {
    name: name, //here the key of the object and the variable-name that is the value BOTH ARE SAME
    age: age,
  };
}

let user6 = createUserObj("John", 30);
console.log(user6.name); // John

// Instead of name:name we can just write name, like this:

function makeUser(name, age) {
  return {
    name, // same as name: name
    age, // same as age: age
    // ...
  };
}

// Property names limitations, we can use anthing as a key for a property of an object

// these properties are all right
let obj = {
  for: 1,
  let: 2,
  return: 3,
};

console.log(obj.for + obj.let + obj.return);

// Other types are automatically converted to strings.

// For instance, a number 0 becomes a string "0" when used as a property key:

let obj6 = {
  0: "test", // same as "0": "test"
};

// both alerts access the same property (the number 0 is converted to string "0")
console.log(obj6["0"]); // test
console.log(obj6[0]); // test (same property)

// There’s also a special operator "in" for that.

// The syntax is:

// "key" in object

let user7 = { age: 30 };

let key3 = "age";
console.log(key3 in user7); // true, property "age" exists

let schedule = {};

function isEmpty(obj) {
  //   return key in obj ? false : true;

  for (let key in obj) {
    return false;
  }
  return true;
}
console.log(isEmpty(schedule)); //true
schedule["8:30"] = "getUP";
console.log(isEmpty(schedule)); // false

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let salarySum = 0;
for (let salary in salaries) {
  salarySum += salaries[salary];
}

console.log(salarySum);

// Multiply numeric property values by 2

// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric(obj) {
  for (let item in obj) {
    if (typeof obj[item] != "string") {
      obj[item] = obj[item] * 2;
    }
  }
}

multiplyNumeric(menu);

console.log(menu);

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    // shows the current step
    console.log(this.step);
    return this;
  },
};

ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
