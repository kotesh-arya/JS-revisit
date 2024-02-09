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

  } catch (err) {
    console.log("I got this error and the script will not die with an error", err);

  }
}, 1000);

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

  console.log(err.stack, "yoyo"); // ReferenceError: uselessVariable is not defined
  //at Object.-----> String that tells at which execution context of the program, the error occured.
}


// ********** If we don’t need error details, catch may omit it: *********

try {
  uselessVariable;
} catch {  // <-- without (err)
  //// we are not using the error object here as we are not defining an argument for it in the syntax
}


// Let’s explore a real-life use case of try...catch.


let json = '{"name":"John", "age": 30}'; // data from the server

let user = JSON.parse(json); // convert the text representation to JS object

// now user is an object with properties from the string
console.log(user.name); // John
console.log(user.age); //30

try {
  // code to be executed with proper error handling
} catch (error) {
  console.log("only at error case:", error)
} finally {
  console.log("I will be executed anyway !!!")
}



const myError = new SyntaxError(" it's an undefined variable");

// throw myError  [this has to be commented to let the below lines of code in global scope work]  // Error thrown when the main script executes and the error is --> SyntaxError:  it's an undefined variable  


// above is throwing our own errors

// throw OPERATOR generates a error with whatever object we pass baside it

// we can pass a primitive like string/number beside it also

// throw "mowa"; 


// Creating an error object using standard built-in constructors like Error, SynaxError, ReferenceError etc.


let myError2 = new Error("Generic error");

let mySyntaxError = new SyntaxError("missed a semicolon ';' ");

let myReferenceError = new ReferenceError("cannot access a varibale mowaName");


console.log(myError2)  // Error: Generic error 
console.log(myError2.name)  // Error
console.log(myError2.message)  // Generic error 

console.log(mySyntaxError)  // SyntaxError: missed a semicolon ';' 
console.log(mySyntaxError.name)  // SyntaxError
console.log(mySyntaxError.message)  // missed a semicolon ';'


console.log(myReferenceError)  // ReferenceError: cannot access a varibale mowaName
console.log(myReferenceError.name)   // ReferenceError
console.log(myReferenceError.message)  // cannot access a varibale mowaName


// let's throw our own error if the decoded json object misses a property

let json2 = '{"age":26}';

try {
  let user = JSON.parse(json2);
  if (!user.name) {
    throw new SyntaxError("the data is missing name property");
  }
  console.log(user.name)
} catch (err) {
  console.log(err);  // SyntaxError: the data is missing name property [error is being handled and the rest of the script will continue running]
}


// try…catch…finally


try {
  // ... try to execute the code ...
} catch (err) {
  // ... handle errors ...
} finally {
  // ... EXECUTE ALWAYS ...
}


try {
  console.log( 'try' );
  if (confirm('Make an error?')) BAD_CODE();
} catch (err) {
  console.log( 'catch' );
} finally {
  console.log( 'finally' );
}


// In the above example the code in the finally block will always execute, in both success and error cases :))


// TO BE CLEAR --> the finally block is used when we initialize something in the try block and that have to finished/finalized irrespective of the outcome of the code (success/error)


// The finally clause is a great place to finish the measurements no matter what.


// Here finally guarantees that the time will be measured correctly in both situations – in case of a successful execution of fib and in case of an error in it:

// let num =  35;  // triggers the error case
 let num = 1;// triggers the success case 
let diff, result;

function fib(n) {
  if (n < 0 || Math.trunc(n) != n) {
    throw new Error("Must not be negative, and also an integer.");
  }
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

let start = Date.now();  /// started the time counting   ---- 

try {
  result = fib(num);
} catch (err) {
  result = 0;
} finally {
  diff = Date.now() - start;  // counts the time in both the cases  --- 
}

console.log(result || "error occurred");  //SUCCESS-CASE : 9227465  || ERROR-CASE - "error occurred" 

console.log( `execution took ${diff}ms` ); //SUCCESS-CASE : 490ms  || ERROR-CASE - 0ms



// The finally clause works for any exit from try...catch. That includes an explicit return.

// In the example below, there’s a return in try. In this case, finally is executed just before the control returns to the outer code.

function func() {

  try {
    return 1;

  } catch (err) {
    /* ... */
  } finally {
    console.log( 'finally' );
  }
}

console.log( func() ); // finally and then 1


// Till now we learnt about catching errors by wrapping the code in a try block, then what about errors that are in the global scope ????????????

// Unfortunately JS specification has no solution for this but the environments like browser and the nodejs have their own methods that can handle these global errors

// for nodejs it is process.on("uncaughtException")
// Simulate an uncaught exception by accessing an undefined variable

process.on("uncaughtException", (err)=>{
  console.log("error occindi mowaaaa", err)
});  //this should go on the extreme top of the code, so that any uncaught exception in global scope of the below code is handled and the sript below the error will be continued with execution without dying :))))
console.log(undefinedVariable);

console.log("I will execute happily, as the global error is handled by the process.on method :)))");



// On browser to catch unhaldles exception in the gobal scope,  we use window.onerror

//  and assign a funciton expression to this property, 

// when an unhandles error/exception occurs in the global scope, this funciton will triggered
// and the  function is provided with the following parameters that we can use to get the complete details of the error
// parameters : message, url, line, col, error


// try this is browser only 
// window.onerror = function (message, url, line, col, error) {
//   console.log("error ikkada is :", error);
// };
// ofahfkjlsadnflk;

// Simulate a runtime error