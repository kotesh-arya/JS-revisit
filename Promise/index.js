// let samplePromise = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(console.log("I am a fake delayed response"));
//   }, 1000);
// });

function executePromiseResolving(shouldResolve) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(console.log("Resolved from a simulation of network call"));
      } else {
        const error = new Error(
          "Simulated network call failed (Hehe! I built this error, LOL)"
        );
        reject(error);
      }
    }, 2000);
  });
}

// executePromiseResolving(false);

async function myAsyncFunction() {
  try {
    // Your asynchronous code that may throw an error
    const result = await executePromiseResolving(false);
    console.log(result, "***");
  } catch (error) {
    console.error(error, "ERROR HERE");
  }
}

// Call the async function
myAsyncFunction();

// SIMPLE AND CRISP UNDERSTANDING OF PROMISE OBJECT

const latentPromise = new Promise(function (resolve, reject) {
  const a = 3;
  const b = 4;
  setTimeout(() => {
    resolve(a + b);
  }, 3000);
});
console.log(latentPromise); //at first this will be -> Promise {state: pending, value: undefined}

latentPromise.then((whateverPromiseResolves) => {
  console.log(latentPromise); // after 3s this will be -> Promise {state: fulfilled, value: "YO"}
});

// General use case  -->  A function returning a Promise

function fetchData() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve({ name: "kotesh", role: "developer" });
    }, 2000);
  });
}

console.log(fetchData()); // Promise {pending} as we are not waiting for 2s and just invoking the function that is returning a pending promise

// To wait untill the promise gets resolved as per the time mentioned for resolving, inside the executor function

// We use .then(CB) and then the callback inside this .then() will be able to access the resolved promise after the time mentioned

// So, always use then to get the final success result of a promise

fetchData().then((result) => {
  console.log(result); //  { name: 'kotesh', role: 'developer' }  - data of RESOLVED PROMISE after mentioned time in the executor function.
});

function rejectedPiece() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        undeclaredariable;
      } catch (error) {
        reject(new Error(error));
      }
    }, 6000);
  });
}

rejectedPiece().catch((error) => {
  console.error(error);
});
