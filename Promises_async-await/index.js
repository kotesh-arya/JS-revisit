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
  setTimeout(() => {
    resolve("I am the data");
  }, 3000);
})
  // runs when the promise is settled, doesn't matter successfully or not
  .finally(() => "code to stop loading indicator ")
  // so the loading indicator is always stopped before we go on
  .then(
    (result) => console.log("show result from cb1 of then()"),
    (err) => console.log("show error from cb2 of them()")
  );

// This finally is exactly similar to the one in the try catch construct, which is the party finisher where it will execute the code inside it no matter whether the promise is resolved or rejected :)) and Think of it as a party finisher. No matter was a party good or bad, how many friends were in it, we still need (or at least should) do a cleanup after it.

// Few key points about finally
// 1.It will not get the OUTCOME of the previous handler as it do not accept arguments,the outcome is PASSED-THROUGH instead to the next suitable handler.
// 2.It's just an must be executed step that carries forward the previous handlers result to it's next handler
// 3.IF SOMETHING IS RETURNED FROM A finally block, then IT WILL BE SILENTLY IGNORED WITHOUT SHOWING ANY ERROR :(

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

// let's transform this callback based approach into a promise based

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

first(function () {
  second(function () {
    third();
  });
});

function firstCopy() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("first");
      resolve();
    }, 1000);
  });
}

function secondCopy() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Second");
      resolve();
    }, 1000);
  });
}

function thirdCopy() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Third");
      resolve();
    }, 1000);
  });
}

firstCopy()
  .then(() => secondCopy())
  .then(() => thirdCopy());

// Tasks

// Re-resolve a promise?
// What’s the output of the code below?

let promise5 = new Promise(function (resolve, reject) {
  resolve(101);

  setTimeout(() => resolve(201), 1000);
});

promise5.then((result) => console.log(result)); // 1 will be printed as only a single resolve or reject will be executed from the executor function and rest of them will be ignored.

// Delay with a promise
// The built-in function setTimeout uses callbacks. Create a promise-based alternative.

// The function delay(ms) should return a promise. That promise should resolve after ms milliseconds, so that we can add .then to it, like this:

function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("resolved with data from our so called setTimeout alternative");
    }, ms);
  });
}

delay(6000).then((result) => console.log(result));

// Promise chaining

let chainablePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  });
});

chainablePromise
  .then((result) => {
    console.log(result); //1
    return result * 2;
  })
  .then((result) => {
    console.log(result); // 2
    return result * 2;
  })
  .then((result) => {
    console.log(result); // 4
    return result * 2;
  })
  .then((result) => {
    console.log(result); // 5
    return result * 2;
  });

//  Newbie mistake is they will assume using the .then on same promise repeating it again [chainablePromise.then; chainablePromise.then(); chainablePromise.then(); chainablePromise.then()] will chain things
// But thats not the case, here only once the promise should be used and .then() should be accessed on that and on that .then() method we should contimue on

chainablePromise.then((result) => {
  console.log(result); //1
  return result * 2;
});

chainablePromise.then((result) => {
  console.log(result); // 2
  return result * 2;
});

chainablePromise.then((result) => {
  console.log(result); // 4
  return result * 2;
});

chainablePromise.then((result) => {
  console.log(result); // 8
  return result * 2;
});

let shortPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("data fetched");
  }, 1000);
});

shortPromise
  .then(() => {
    console.log("1one");
  })
  .then(() => {
    console.log("2two");
  })
  .then(() => {
    console.log("3three");
  })
  .then(() => {
    console.log("4four");
  })
  .then(() => {
    console.log("5five");
  })
  .then(() => {
    console.log("6six");
  });

// 1one
// 2two
// 3three
// 4four
// 5five
// 6six

// function body from inside each .then() will be executed one after another in an order. similar to the previous callbacks behaviour

new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
})
  .then(function (result) {
    console.log(result); // 1

    return new Promise((resolve, reject) => {
      // (*)
      setTimeout(() => resolve(result * 2), 1000);
    });
  })
  .then(function (result) {
    // (**)

    console.log(result); // 2

    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000);
    });
  })
  .then(function (result) {
    console.log(result); // 4
  });
// Here the first .then shows 1 and returns new Promise(…) in the line (*). After one second it resolves, and the result (the argument of resolve, here it’s result * 2) is passed on to the handler of the second .then. That handler is in the line (**), it shows 2 and does the same thing.

// So the output is the same as in the previous example: 1 → 2 → 4, but now with 1 second delay between alert calls.
