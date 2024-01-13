function slow(x) {
  // there can be a heavy CPU-intensive job here
  console.log(`Called with ${x}`);
  return x;
}

function cachingDecorator(func) {
  let cache = new Map();

  return function (x) {
    if (cache.has(x)) {
      // if there's such key in cache
      return cache.get(x); // read the result from it
    }

    let result = func(x); // otherwise call func
    console.log(func);
    cache.set(x, result); // and cache (remember) the result
    return result;
  };
}

slow = cachingDecorator(slow);

console.log(slow);
slow(3);

// console.log(slow(1)); // slow(1) is cached and the result returned
// console.log("Again: " + slow(1)); // slow(1) result returned from cache

// console.log(slow(2)); // slow(2) is cached and the result returned
// console.log("Again: " + slow(2));

// --------------------------------------------------
// Challenges
// Challenge 1

// Spy decorator
// importance: 5
// Create a decorator spy(func) that should return a wrapper that saves all calls to function in its calls property.

// Every call is saved as an array of arguments.

// For instance:

//  work.calls = [1,2]

// function argToString(args) {
//   return args[0] + args[1];
// }
function work(a, b) {
  console.log(a + b); // work is an arbitrary function or method
}
// console.log(work.calls, "hihi");

function spy(workFunc) {
  return function () {
    if (work.calls.includes(arguments)) {
      return;
    }
    work.calls.push(Array.from(arguments));
    let result = workFunc(...arguments);
    return result;
  };
}
work = spy(work);
work.calls = []; //Setting a property to the work function with new body

work(1, 2); // 3
work(4, 5); // 9
work(41, 1);
console.log(work.calls, "at lasttt");
for (let args of work.calls) {
  console.log("call:" + args.join()); // "call:1,2", "call:4,5"
}

// Challenge 2

// Delaying decorator
// importance: 5
// Create a decorator delay(f, ms) that delays each call of f by ms milliseconds.

function f(x) {
  console.log(x);
}

function delay(func, delay) {
  return function () {
    setTimeout(func, delay, arguments[0]);
  };
}

let f1000 = delay(f, 1000);
let f1500 = delay(f, 3000);

// f1000("test"); // shows "test" after 1000ms
// f1500("test"); // shows "test" after 3000ms

// Challenge 3
// Debounce decorator
function f1(text) {
  console.log(text);
}

function debounce(func, debounceDelay) {
  let timerId;
  return function () {
    console.log("Iam called");
    clearTimeout(timerId);
    timerId = setTimeout(func, debounceDelay, arguments[0]);
  };
}

debouncedFunc = debounce(f1, 4000);

const userInput = document.getElementById("user-input");

userInput.addEventListener("input", (e) => {
  debouncedFunc(e.target.value);
});
