// Functions as Objects
// The name property to access the name of a function
function sample() {
  console.log("hello");
}
console.log(sample.name);

// The length property to access the number of parameters of a function in it's declaration

function sample2(a, b, c, d, e) {
  console.log("bye");
}

console.log(sample2.length); // 5   - the number of parameters in the function definition

// Custom properties for the function object

function sample3() {
  console.log("tata");
  sample3.counter++;
}

sample3.counter = 0;

sample3();
sample3();
sample3();

console.log(`the counter value ${sample3.counter}`);

// Note: These custom properties are not at all similar to the local variables of the function

// Reason being these can be accessesed outside of the function definition also but local variables are only accessible inside of the function body

//  Named function expressions

// Function expressions with an extra name

// Function expression

let sayHi = function (who) {
  console.log(`Hey ${who} from sayHi-1`);
};
sayHi("mowa"); // Hey mowa from sayHi-1
//  Named funciton expression

let sayHi2 = function func(who) {
  console.log(`Hey ${who} from sayHi-2`);
};

sayHi2("kotesh"); // Hey kotesh from sayHi-2

// Call the named function expresssion from outside of its scope using the internal name

// func("rebecca"); // func is not defined

// Reason is the func internal name will work only if we use it inside of the function body to call the function

let sayHi3 = function func(who, n) {
  console.log(`Hey ${who} from sayHi-2`);
  if (n === 0) {
    return;
  }
  func("I am from the call with the internal name", n - 1);
};
sayHi3("yo", 1);

// This above code will work as we are calling the function with the internal name from inside the body of the function

// This internal name will help us to call the function from inside the function body, especially when the variable of the funciton expressin is set to null

// Here's an example where we call the function using the sayHI only, but if it is set to null the we will not be able to call the funciton with the sayHi internally

let sayHi4 = function (who, n) {
  console.log("I am being called");
  console.log(`Hey ${who} from sayHi-2`);
  if (n === 0) {
    return;
  }
  sayHi4("I am from the call with the internal name", n - 1);
};
// sayHi4("yo", 1);

let newVariableReference = sayHi4;
sayHi4 = null;
// newVariableReference("Me again", 1); // TypeError: sayHi4 is not a function

// But now if we call the function using the internal name, this will work

let sayHi5 = function func(who, n) {
  console.log("I am being called");
  console.log(`Hey ${who} from sayHi-2`);
  if (n === 0) {
    return;
  }
  func("I am from the call with the internal name", n - 1);
};

let newVariableReference1 = sayHi5;
sayHi5 = null;
newVariableReference1("*****Me Once again*****", 1);
