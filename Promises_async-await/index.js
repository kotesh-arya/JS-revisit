// calling a callback function inside a higher-order function with a delay and make it asynchronous

function sample() {
  console.log("from an async function");
}
function parent(cb) {
  setTimeout(cb, 1000);
}

// parent(sample);

// the cb function is initiated now but it will be finished later

// function generateScript(src) {
//   let scriptElement = document.createElement("script");
//   scriptElement.src = src;
//   document.head.append(scriptElement);
// }

// generateScript("./sample.js");

// function loadScript(src, callback) {
//     let script = document.createElement('script');
//     script.src = src;
//     script.onload = () => callback(script);
//     document.head.append(script);
//   }

//   loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
//   console.log(`Cool, the script ${script.src} is loaded`); -->  "Cool, the script https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js is loaded"
//   console.log( _ ); // _ is a function declared in the loaded script
// });

// It’s called a “callback-based” style of asynchronous programming.
// A function that does something asynchronously should provide a callback argument where we put the function to run after it’s complete.

// Callback in callback

// Let's put the second loadScript call inside the callback, like this:

// loadScript('/my/script.js', function (script) {

//   alert(`Cool, the ${script.src} is loaded, let's load one more`);

//   loadScript('/my/script2.js', function (script) {
//     alert(`Cool, the second script is loaded`);
//   });

// });

// What if we want one more script…?

// loadScript('/my/script.js', function (script) {

//   loadScript('/my/script2.js', function (script) {

//     loadScript('/my/script3.js', function (script) {
//       // ...continue after all scripts are loaded
//     });

//   });

// });

// Pyramid of Dooom using Simulated asynchronous functions with callbacks
function asyncFunction1(callback) {
  setTimeout(() => {
    const result1 = "Result from asyncFunction1";
    callback(result1);
  }, 1000);
}

function asyncFunction2(data, callback) {
  setTimeout(() => {
    const result2 = "Result from asyncFunction2 using " + data;
    callback(result2);
  }, 1000);
}

function asyncFunction3(data, callback) {
  setTimeout(() => {
    const result3 = "Result from asyncFunction3 using " + data;
    callback(result3);
  }, 1000);
}

// Nested callbacks forming the "pyramid of doom"
// asyncFunction1(function (result1) {
//   asyncFunction2(result1, function (result2) {
//     asyncFunction3(result2, function (result3) {
//       console.log(result3); // Output the final result
//     });
//   });
// });

// Blocking the main thread
function timeTakingFunc() {
  for (let index = 0; index < 1000000000; index++) {
    const element = index;
    console.log(element);
  }
}
// timeTakingFunc();

// Simulated asynchronous functions with callbacks
function askMomForToy(callback) {
  // Wait for 1 second, then give the toy
  setTimeout(() => {
    const toy = "Teddy bear";
    callback(toy);
  }, 1000);
}

function askDadForToy(toy, callback) {
  // Wait for 1 second, then give the gift only if toy exists
  setTimeout(() => {
    let gift;
    if (toy) {
      gift = "Remote-controlled car";
      callback(gift);
    }
  }, 1000);
}

function askGrandmaForToy(gift, callback) {
  // Wait for 1 second, then give the present only if gift exists
  setTimeout(() => {
    let present;
    if (gift) {
      present = "Dollhouse";
      callback(present);
    }
  }, 1000);
}

function askGrandpaForToy(present, callback) {
  setTimeout(() => {
    let surprise;
    if (present) {
      surprise = "Naruto - Action figure";
      callback(surprise);
    }
  });
}

// Nested callbacks forming the "pyramid of doom"
// askMomForToy(function (toy) {
//   askDadForToy(toy, function (gift) {
//     console.log("toy--->", toy);
//     askGrandmaForToy(gift, function (present) {
//       console.log("gift--->", gift);
//       askGrandpaForToy(present, function (surprise) {
//         console.log("present--->", present);
//         console.log("Received:", surprise); // Output the final surprise
//       });
//     });
//   });
// });

// A rough conclusion of callback hell
// The execution of the callback funciton is dependent on the execution of the higher-order function it is being passed into.

function first(cb) {
  setTimeout(() => {
    console.log("first callback executed");
    cb();
  }, 1000);
}

function second(cb) {
  setTimeout(() => {
    console.log("second callback executed");
    cb();
  }, 1000);
}

function third() {
  setTimeout(() => {
    console.log("third callback executed");
  }, 1000);
}

// I was thinking to call in this way
// first(second(third())); Error: cb is not a function  ❌️ here I am passin the function-invocation and not a function body,

// ✅️ This is how the dependent funciton invocation has to be done by passing function bodies which will be served as callbacks :)

// first(function () {
//   second(function () {
//     third();
//   });
// });

// FINAL UNDERSTANDING OF CALLBACK HELL

// Anatomy of Promise

// It's an object
// Can be created using the Promise constructor function

let myPromise = new Promise((resolve, reject) => {
  // setTimeout(() => {
  // let error =  new Error("I am an error bro!!");
  // reject(error);
  // resolve(console.log("Data fecthed!!"));
  // }, 2000);
});
// console.log(myPromise);

let samplePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("ASYNCHRONOUS FUNCTION EXECUTED SUCCESSFULLY AFTER 2S");
  }, 2000);
});
console.log(samplePromise); // Promise {<Pending>}
samplePromise.then((result) => {
  console.log(result); //ASYNCHRONOUS FUNCTION EXECUTED SUCCESSFULLY AFTER 2S
  console.log(samplePromise); //Promise { 'ASYNCHRONOUS FUNCTION EXECUTED SUCCESSFULLY AFTER 2S' }
});


// The .then(cb1 for resolved case, cb2 for rejeced case) is a consumer function

// can have 2 arguments where we can pass 2 callback funcitons
// where first callback gets executed when the promise is resolved
// The second callback function gets executed when promise id rejected


// The .catch(cb) is another consumer function which holds can have a single callback function which gets executed when the promise is rejected with an error.



