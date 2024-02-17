// calling a callback function inside a higher-order function with a delay and make it asynchronous


function sample() {
  console.log("from an async function")
}
function parent(cb) {
  setTimeout(cb, 1000)
}

parent(sample);

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
      const result1 = 'Result from asyncFunction1';
      callback(result1);
  }, 1000);
}

function asyncFunction2(data, callback) {
  setTimeout(() => {
      const result2 = 'Result from asyncFunction2 using ' + data;
      callback(result2);
  }, 1000);
}

function asyncFunction3(data, callback) {
  setTimeout(() => {
      const result3 = 'Result from asyncFunction3 using ' + data;
      callback(result3);
  }, 1000);
}

// Nested callbacks forming the "pyramid of doom"
asyncFunction1(function(result1) {
  asyncFunction2(result1, function(result2) {
      asyncFunction3(result2, function(result3) {
          console.log(result3); // Output the final result
      });
  });
});
