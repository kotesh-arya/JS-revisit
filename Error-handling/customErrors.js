// ----------------------------------------------
// Just a rough understanding about class in javascript
class Car {

    constructor(brand, model) {
        this.model = model;
        this.brand = brand;
    }
}

let firstModelCar = new Car("Toyota", "Marcy");

let secondModelCar = new Car("Maruti", "800");


console.log(firstModelCar);
console.log(secondModelCar);


// ----------------------------------------------

//  Creating our own error classes by extending built-in Error class

class ValidationError extends Error {

    constructor(message) {
        super(message);// this call for the parent constructor is mandatory as "setting of message property value is handles by the main constructor inside the error class" adding to this it also sets the name property value as "Error"
        this.name = "ValidationError" // finally, the name property of the object is again resetted here with the name of our custom error generating class
    }


}

let myOwnError = new ValidationError("In the parsed json a  respective feild seems missing!")
// console.log(myOwnError instanceof Error);


//   Now let's handle both the SyntaxError and the ValidationError/s for the parsed JSON

// let's extend our own ValidationError class to even more specific classes and create even more hierarchal error objects


class AgeValidationError extends ValidationError {
    constructor(message) {
        super(message);
        this.name = "AgeValidationError"
    }
}
class RoleValidationError extends ValidationError {
    constructor(message) {
        super(message);
        this.name = "RoleValidationError"
    }
}

let userJson = '{"name": "kotesh", "role": "Developer"}';
//function with proper error throwing setup :))
function parseJSON(json) {
    let user = JSON.parse(json);

    if (!user.age) {
        throw new AgeValidationError("In the parsed json  age feild seems missing:")
    }
    if (!user.role) {
        throw new RoleValidationError("In the parsed json  role feild seems missing:")
    }
    return user;
}


// try...catch for executing the funciton and catching errors if there are any

try {
    let validUser = parseJSON(userJson);
    console.log("Got valid user", validUser);
} catch (err) {
    console.log(err);
    if (err instanceof RoleValidationError) {
        console.log("Role Validation Error:", err.message);
    }
    if (err instanceof AgeValidationError) {
        console.log("Age Validation Error:", err.message);
    }

    if (err instanceof SyntaxError) {
        console.log("Syntax Error:", err.message);
    }
    else {
        throw err;
    }
}
// Above try...catch execution returns ---> AgeValidationError: In the parsed json a age feild seems missing:

// ----------------WRAPPING EXCEPTIONS------------------
class ReadError extends Error {
    constructor(message, cause) {
        super(message);
        this.cause = cause;
        this.name = 'ReadError';
    }
}

// class ValidationError extends Error { /*...*/ }
// class PropertyRequiredError extends ValidationError { /* ... */ }

function validationPart(user) {
    if (!user.name) {
        throw new ValidationError("Name feild is missing")
    }
    if (!user.age) {
        throw new ValidationError("Age feild is missing")
    }
}


function readUser2(json) {
    try {
        let user = JSON.parse(json);

    } catch (err) {
        throw new ReadError("Syntax Error while reading the format of json", err)
    }


    try {
        validationPart(user)
    } catch (err) {
        if (err instanceof ValidationError) {
            throw new ReadError("Validation Error while checking the existence of the property", err)
        }
    }

}

try {
    readUser2('{bad json}');
} catch (err) {
    console.log(err.cause)
}


// Instead of using multiple if else statements inside the catch block, 
// We divided our code into 2 parts and wrapped them in two different try...catch blocks 
// From the catch block of each part we are again creating a common ReadError ESPECIALLY PASSING THE TYPE OF ERROR(ValidationError/SyntaxError), AS A CAUSE IN THE SECOND ARGUMENT  


// Now in a seperate try...catch block outside, we invoke the readUser function and finally be able to show any type of error with a single statement inside the catch-block
// Where the "cause" value changes for the different error and all types of errors are covered well :))


// This process is called WRAPPING EXCEPTIONS 