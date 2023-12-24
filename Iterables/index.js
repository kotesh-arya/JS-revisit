let range = {
  from: 1,
  to: 5,
};

// 1. call to for..of initially calls this
range[Symbol.iterator] = function () {
  // ...it returns the iterator object:
  // 2. Onward, for..of works only with the iterator object below, asking it for next values
  return {
    current: this.from,
    last: this.to,

    // 3. next() is called on each iteration by the for..of loop
    next() {
      // 4. it should return the value as an object {done:.., value :...}
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    },
  };
};

// now it works!
for (let num of range) {
  console.log(num); // 1, then 2, 3, 4, 5
}

//  Calling an iterator explicitly

let str = "kotesh";

let iteratorObj = str[Symbol.iterator]();

console.log(iteratorObj.next());
console.log(iteratorObj.next());
console.log(iteratorObj.next());
console.log(iteratorObj.next());
console.log(iteratorObj.next());
console.log(iteratorObj.next());
console.log(iteratorObj.next());

// In case of a for...of loop t
//  1. Accessing the "Iterator Object"
//  2. Calling the next() method of it as many times the characters remains unlooped

// These above two steps will be executed automatically for an iterable




// Both iterables and array-likes are eligible of being iterated but they don't have methods
// like push() and pop()

// But if we want to make them supported for push and pop we can pass them into the Array.from()

let arrFromIterable = Array.from(range);
console.log(
  arrFromIterable,
  "This is an array finally and capable of push and pop"
);
console.log(arrFromIterable.pop(), "popped element");


