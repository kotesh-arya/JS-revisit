// Why optional chaining
// To solve the : The “non-existing property” problem

// Optional chaining is a recent addition to the language

// PURPOSE: TO safely access the might non-existing properties inside nested objects construct

let user99 = {};

console.log(user99.address); // undefined  --> as expected

// but if we try to access a property on the might be undefined property address, then there will be an error

// console.log(user99.address.street); // TypeError: Cannot read properties of undefined (reading 'street')

// which means properties cannot be read on UNDEFINED value

// But what if sometimes the address will be an object ????

// we should still consider that case also and that can be easily done using the

//  we have 2 NOT SO EFFECTIVE solutions here

// 1-> Using a ternary operator and access further property

let user222 = {}; // user222 has no address

console.log(
  user222.address
    ? user222.address.street
      ? user222.address.street.name
      : null
    : null
); // null (No error)

// But this seems too lengthy and will be difficult to understand if ther are multilevel nested objects

//  2-> Using the && operator and safely access properties one after another in an sequential order

let user111 = {}; // user111 has no address

console.log(
  user111.address && user111.address.street && user111.address.street.name
); // undefined (no error)

// This will also cause readability issue when there are multilevel obeects nested and accesses in this way  :(

// The final and best solution is optional chaining

// Which access properties and returns "undefined" if any property in the middle is undefined/null; WITHOUT CAUSING ANY ERROR

let user000 = {}; // user000 has no address

console.log(user000?.address?.street); // undefined (no error)

// JUST 2 CAVEATS

// Don't overuse this opotional chaining operator

// We should use ?. only where it’s ok that something doesn’t exist.

// For example, if according to our code logic user object must exist, but address is optional, then we should write user.address?.street, but not user?.address?.street.

// here if we accept user object to also be undefined, then we are silenting an error where non-existing of the user object is CERTAINLY CONSIDERED AS AN ERROR

// The variable before ?. must be declared
// If there’s no variable user at all, then user?.anything triggers an error:

// console.log(user?.address); // ReferenceError: user is not defined

//  The optional chaining is not just an operator, but a special syntax construct

// Other variants: ?.(), ?.[]

//  To invoke a might exist method instead of a normal property

let user5645 = {
  sayBye() {
    console.log("say bye");
  },
};

user5645.sayBye?.();


