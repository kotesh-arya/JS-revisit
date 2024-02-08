// handling errors in the script and avoiding them to kill the script

try {
  mowa;
} catch (err) {
  console.log(err);
}

console.log("Hello"); // this will be still executed as the script will not be died because we are handling the error by the try...catch syntax

// An errorless example: shows alert (1) and (2):

try {
  console.log("Start of try runs"); // (1) <--

  // ...no errors here

  console.log("End of try runs"); // (2) <--
} catch (err) {
  console.log("Catch is ignored, because there are no errors"); // (3)
}
// An example with an error: shows (1) and (3):

try {
  console.log("Start of try runs"); // (1) <--

  lalala; // error, variable is not defined!

  console.log("End of try (never reached)"); // (2)
} catch (err) {
  console.log(`Error has occurred!`); // (3) <--
}

// try...catch only works for runtime errors
// For try...catch to work, the code must be runnable. In other words, it should be valid JavaScript.

// It won’t work if the code is syntactically wrong, for instance it has unmatched curly braces:

// try {
//   {{{{{{{{{{{{
// } catch (err) {   // SyntaxError: Unexpected token 'catch'
//   alert("The engine can't understand this code, it's invalid");
// }
// The JavaScript engine first reads the code, and then runs it. The errors that occur on the reading phase are called “parse-time” errors and are unrecoverable (from inside that code). That’s because the engine can’t understand the code.

// So, try...catch can only handle errors that occur in valid code. Such errors are called “runtime errors” or, sometimes, “exceptions”.
// Try catch is synchronous, it won't handle errors in asynchronous code

// try {
//   setTimeout(() => {
//     nonExistingVariable; // error from inside this asynchronous code neglected by the try..catch and the script died here and further code will not run
//   }, 1000);
// } catch (err) {
//   console.log("skdjf");
// }

setTimeout(function () {

  try {
    nonExistingVariable2;

  } catch(err) {
    console.log("I got this error and the script will not die with an error", err);

  }
},1000);

console.log("hola")
// To track the errors in asynchronous code, we have to use the try...catch inside the asynchronous function by placing the code inside it.


// Error object
// When an error occurs, JavaScript generates an object containing the details about it. The object is then passed as an argument to catch:

try {
  // ...
  uselessVariable;
} catch (err) { // <-- the "error object", could use another word instead of err
  // ...
  console.log(typeof err); //object
  console.log(err.name); //ReferenceError
  console.log(err.message); //uselessVariable is not defined



//   stack
// Current call stack: a string with information about the sequence of nested calls that led to the error. Used for debugging purposes.

console.log(err.stack,"yoyo"); // ReferenceError: uselessVariable is not defined
//at Object.-----> String that tells at which execution context of the program, the error occured.
}


// ********** If we don’t need error details, catch may omit it: *********

try{
  uselessVariable;
}catch{  // <-- without (err)
//// we are not using the error object here as we are not defining an argument for it in the syntax
}


// Let’s explore a real-life use case of try...catch.


let json = '{"name":"John", "age": 30}'; // data from the server

let user = JSON.parse(json); // convert the text representation to JS object

// now user is an object with properties from the string
console.log( user.name ); // John
console.log( user.age ); //30

try {
  // code to be executed with proper error handling
} catch (error) {
  console.log("only at error case:", error)
}finally{
  console.log("I will be executed anyway !!!")
}



const myError = new SyntaxError(" it's an undefined variable");

throw myError  // Error thrown when the main script executes and the error is --> SyntaxError:  it's an undefined variable  


