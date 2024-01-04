// Recursion and execution context

// Finding power of an element x raised to n

// Iterative Approach
function pow(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result = result * x;
  }
  return result;
}

console.log(pow(2, 3));

// Recursive approach

function powAgain(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * powAgain(x, n - 1);
  }
}

console.log(powAgain(2, 3));

// Recursive Traversal

let company = {
  sales: [
    {
      name: "John",
      salary: 1000,
    },
    {
      name: "Alice",
      salary: 1600,
    },
  ],

  development: {
    sites: [
      {
        name: "Peter",
        salary: 2000,
      },
      {
        name: "Alex",
        salary: 1800,
      },
    ],

    internals: [
      {
        name: "Jack",
        salary: 1300,
      },
    ],
  },
};

// Get the sum of salaries of employess from all the departments

function sumSalaries(department) {
  if (Array.isArray(department)) {
    return department.reduce((acc, curr) => acc + curr.salary, 0);
  } else {
    let sum = 0;
    for (const key in department) {
      console.log(department[key]);
      sum = sum + sumSalaries(department[key]);
    }
    return sum;
  }
}
console.log(sumSalaries(company), "final sum");

// CHALLENGS

// CHALLENGE 1

// Sum all numbers till the given one
// importance: 5
// Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.

// For instance:

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

// Recursive variant
function sumTo(n) {
  if (n == 1) {
    return 1;
  } else {
    return n + sumTo(n - 1);
  }
}

// console.log(sumTo(100000)); // Invoking More than 10,000 execution contexts will throw->  RangeError: Maximum call stack size exceeded

// Iterative Variant
function iterativeSumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(iterativeSumTo(1000000)); //this is capable of any known number as there will be only one execution context just the looping iterations increase

// CHALLENGE 2
// Calculate factorial

function getFactorial(n) {
  if (n == 1) {
    return 1;
  } else {
    return n * getFactorial(n - 1);
  }
}
console.log(getFactorial(3), "hihi");

// CHALLENGE 3

// Fibonacci numbers
// The sequence of Fibonacci numbers has the formula Fn = Fn-1 + Fn-2. In other words, the next number is a sum of the two preceding ones.

// First two numbers are 1, then 2(1+1), then 3(1+2), 5(2+3) and so on: 1, 1, 2, 3, 5, 8, 13, 21....

// Fibonacci numbers are related to the Golden ratio and many natural phenomena around us.

// Write a function fib(n) that returns the n-th Fibonacci number.

// An example of work:

function fib(n) {
  // 1, 1, 2, 3, 5, 8, 13, 21
  // 1, 2, 3, 4, 5, 6, 7, 8
  if (n <= 2) {
    return 1;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}

console.log(fib(7));
// alert(fib(7)); // 13
// alert(fib(77)); // 5527939700884757 // Will be very slow :(
// P.S. The function should be fast. The call to fib(77) should take no more than a fraction of a second.

//  Iterative Approach PENDING

// CHALLENGE 4
//   Output a single-linked list
// importance: 5
// Let’s say we have a single-linked list

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};
// Write a function printList(list) that outputs list items one-by-one.

// Recursive approach
function printList(list) {
  console.log(list.value);
  if (list.next === null) {
    return;
  } else {
    return printList(list.next);
  }
}
// printList(list);

// Iterative approach
function printListUsingLoop(list) {
  while (list) {
    console.log(list.value);
    list = list.next;
  }
}
// printListUsingLoop(list);

// CHALLENGE 5
// Output a single-linked list in the reverse order

function printListReverse(list) {
  if (list.next === null) {
    console.log(list.value);
    return;
  } else {
    printListReverse(list.next);
    console.log(list.value);
    return;
  }
}
// printListReverse(list);

function printListReverseUsingLoop(list) {
  let valuesArray = [];
  while (list) {
    valuesArray.push(list.value);
    list = list.next;
  }
  console.log(valuesArray);
  for (let i = valuesArray.length; i > 0; i--) {
    console.log(i);
  }
}
printListReverseUsingLoop(list);
