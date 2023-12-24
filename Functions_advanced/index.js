// Recursion ❤️
// Iterative Approach
function pow(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}
console.log(pow(2, 4));

// Recursive approach

function recursicePow(x, n) {
  if (n === 1) {
    return x;
  } else {
    return x * recursicePow(x, n - 1);
  }
}
console.log(recursicePow(2, 4));
