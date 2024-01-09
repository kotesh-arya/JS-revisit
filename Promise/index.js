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
