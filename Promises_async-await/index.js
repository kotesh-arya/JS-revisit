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
// console.log(samplePromise); // Promise {<Pending>}
samplePromise.then((result) => {
  console.log(result); //ASYNCHRONOUS FUNCTION EXECUTED SUCCESSFULLY AFTER 2S
  console.log(samplePromise); //Promise { 'ASYNCHRONOUS FUNCTION EXECUTED SUCCESSFULLY AFTER 2S' }
});

// The consumer functions of the promise object  ->> then() and catch() and finally()

// The .then(cb1 for resolved case, cb2 for rejeced case) is a consumer function

// can have 2 arguments where we can pass 2 callback funcitons
// where first callback gets executed when the promise is resolved
// The second callback function gets executed when promise id rejected

// The .catch(cb) is another consumer function which holds can have a single callback function which gets executed when the promise is rejected with an error.

// Cleanup: finally() : RUNS WHEN PROMISE IS SETTLED (either resolved or rejected)

new Promise((resolve, reject) => {
  /* do something that takes time, and then call resolve or maybe reject */
})
  // runs when the promise is settled, doesn't matter successfully or not
  .finally(() => "code to stop loading indicator ")
  // so the loading indicator is always stopped before we go on
  .then(
    (result) => "show result from cb1 of then()",
    (err) => "show error from cb2 of them()"
  );

// This finally is exactly similar to the one in the try catch construct, which is the party finisher where it will execute the code inside it no matter whether the promise is resolved or rejected :)) and Think of it as a party finisher. No matter was a party good or bad, how many friends were in it, we still need (or at least should) do a cleanup after it.

// MORE ABOUT THE EXECUTOR FUNCTION

// 1. The executor function is called automatically and immediately by the new Promise () invocation

// 2. This executor function recieves 2 arguments which are resolve and reject functions

// 3. Once the processing of the code inside the executor is done, then the executor calls the resolve function by passing data|result into it
// But if there's any error while the code inside the executor function is getting executed, then the reject() has to be called by passing a valid error into it

fetch("https://api.publicapis.org/ntries") //This returns a promise object
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) =>
    console.error(
      "ERROR HANDLED HERE BY SAVING THE SCRIPT FROM DYING AND LATER ASYNC FUNCIONS ARE EXECUTED WITHOUT ANY INTERRUPTION:",
      err
    )
  )
  .finally(() => {
    console.log(
      "I am from FINALLY BLOCK and am gonna execute anyway either promise resolved or rejected 😉️"
    );
  });

console.log(fetch("https://api.publicapis.org/ntries"), "obviously pending!!"); //Promise { <pending> }  as we are accessing before the ececutor function is executing

// NOTE : THERE CAN ONLY BE A SINGLE RESULT OR AN ERROR FROM THE WHOLE EXECUTOR FUNCTION

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("executor funciton successfully completed");
    reject(new Error("cannot execute, please try again!!")); // ignored
    resolve("again acknowledging the succeeding of the executor function"); // ignored
  }, 4000);
});

promise.then((result) => console.log(result)); // "executor funciton successfully completed"

// Also the resolve and reject functions accept only one value to be passed as an argument and ignore the rest if we try to pass them :)))
