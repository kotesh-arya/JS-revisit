// Binding an isolated function with an Object using .bind method

function sample() {
  console.log(`${this.firstName}`);
}

let user = {
  firstName: "John",
};
// sample();

let bindedSampleFunc = sample.bind(user);

bindedSampleFunc();

// Now let's invoke a funciton inside an object before binding and after explicitly binding

let user2 = {
  firstName: "John",
  sayHi() {
    console.log(`Hello, ${this.firstName}!`);
  },
};
user2.sayHi(); //Here we are invoking the function as the method of user2 so this invokation will have access to the user2 Object
console.log(user2.sayHi); // [Function: sayHi]

// console.log(sayHi, "BEFORE BINDING"); // we cannot even access it, cause it is a property of user-Object [ReferenceError: Cannot access 'sayHi' before initialization]

let sayHi = user2.sayHi.bind(user2); // (*BINDING user2.sayHi's body to USER2-OBJECT EXPLICITLY)

// can run it without an object cause we explicity BINDED it with the user object
console.log(sayHi, "AFTER BINDING");
sayHi(); // Hello, John!
sayHi(); // Hello, John!
sayHi(); // Hello, John!      SAME RESULT AS WE HAVE EXPLICITLY BINDED THE FUNCTION sayHi to the user2 Object

setTimeout(sayHi, 1000); // Hello, John! after one second

// More simpler example to show how binding works
let person = {
  name: "kotesh",
  role: "Developer",
  showDetails() {
    console.log(`${this.role} is ${this.name}`);
  },
};

// This works
person.showDetails();

// showDetails(); // ReferenceError: showDetails is not defined  as we are not accessing it as the method of the person object

// To make this thing work we need to create a binded version of showDetails
let bindedShowDetails = person.showDetails.bind(person);

bindedShowDetails(); // Developer is kotesh  - Works!!

// The bindedShowDetails is a “bound” function, that can be called alone or passed to setTimeout – doesn’t matter, the context will be constant (person object).

// If an object has many methods and we plan to actively pass it around, then we could bind them all in a loop:

let gamerObj = {
  name: "kotesh",
  role: "Defender",
  score: 200,
  livesLeft: 3,
  getDetails() {
    console.log(`Player Name:${this.name} as ${this.role}`);
  },
  getScore() {
    console.log(`Player Score:${this.score}`);
  },
  getLivesLeft() {
    console.log(`Lives left:${this.livesLeft}`);
  },
};

// getDetails(); //  ReferenceError: getDetails is not defined
// getScore(); // ReferenceError: getScore is not defined
// getLivesLeft(); // ReferenceError: getLivesLeft is not defined

// // let's explicitly bind these functions one by one with the gamerObject

// let getDetails = gamerObj.getDetails.bind(gamerObj);
// let getScore = gamerObj.getScore.bind(gamerObj);
// let getLivesLeft = gamerObj.getLivesLeft.bind(gamerObj);

// // Let's call these binded functions

// getDetails(); // Player Name:kotesh as Defender
// getScore(); // Player Score:200
// getLivesLeft(); //  Lives left:3
// // These function bodies have the access of the gamerObject as we binded them both

// let's bind these functions to the gamerObj using a for in loop

for (let key in gamerObj) {
  if (typeof gamerObj[key] == "function") {
    gamerObj[key] = gamerObj[key].bind(gamerObj);
    // console.log(gamerObj[key]); //here it works :)
  }
}
console.log(getDetails); // ReferenceError: getDetails is not defined :(
