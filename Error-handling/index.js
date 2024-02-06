// handling errors in the script and avoiding them to kill the script

try {
  mowa;
} catch (err) {
  console.log(err);
}

console.log("Hello"); // this will be still executed as the script will not be died because we are handling the error by the try...catch syntax



// An errorless example: shows alert (1) and (2):

try {

  console.log('Start of try runs');  // (1) <--

  // ...no errors here

  console.log('End of try runs');   // (2) <--

} catch (err) {

  console.log('Catch is ignored, because there are no errors'); // (3)

}
// An example with an error: shows (1) and (3):

try {

  console.log('Start of try runs');  // (1) <--

  lalala; // error, variable is not defined!

  console.log('End of try (never reached)');  // (2)

} catch (err) {

  console.log(`Error has occurred!`); // (3) <--

}

// try...catch only works for runtime errors
// For try...catch to work, the code must be runnable. In other words, it should be valid JavaScript.

// It won’t work if the code is syntactically wrong, for instance it has unmatched curly braces:

try {
  {{{{{{{{{{{{
} catch (err) {
  alert("The engine can't understand this code, it's invalid");
}
// The JavaScript engine first reads the code, and then runs it. The errors that occur on the reading phase are called “parse-time” errors and are unrecoverable (from inside that code). That’s because the engine can’t understand the code.

// So, try...catch can only handle errors that occur in valid code. Such errors are called “runtime errors” or, sometimes, “exceptions”.