// Rounding Numbers

// * floor - bottom integer of the decimal value
console.log(Math.floor(3.9)); // 3

console.log(Math.floor(-3.9)); // -4

// * ceil - top integer of the decimal value
console.log(Math.ceil(4.1)); // 5

console.log(Math.ceil(-4.1)); // -4

// * round - Rounds to the nearest integer

console.log(Math.round(3.1)); // 3

console.log(Math.round(3.9)); // 4

console.log(Math.round(3.5)); // 4

// * trunc (not supported by Internet Explorer)

console.log(Math.trunc(5.8989)); // 5 - rips off all the decimal digits

console.log(Math.trunc(-85.8989)); // -85

// what if we’d like to round the number to n-th digit after the decimal?

//  * toFixed(n) - Rounds the to n-digits after the point

let num = 1.2345;

console.log(num.toFixed(2)); // "1.23"

// NOTE - The toFixed() method always return a STRING- Remember

// If the Decimal part of the number is lessthan what we pass into the toFixed method, then the remaining places will be appended by zeroes

let num3 = 1.3;

console.log(num3.toFixed(4)); // 1.3000

// Tests: isFinite and isNaN

// We know that there are these special values --> -Infinity and Infinity, NaN
// Which belong to the number datatype but not "normal numbers", to check their existence, we have these special functions

// isNaN(value) converts its argument to a number and then tests it for being NaN:

console.log(isNaN(NaN)); // true
console.log(isNaN("str")); // true

console.log(typeof Number(NaN)); // 1st-step numeric conversion of NaN is number and In 2-nd step it will check is the number obtained is a valid number or not.

// But do we need this function? Can’t we just use the comparison === NaN? Unfortunately not.
// THE VALUE OF NaN is unique and it is not equal to anything and itself too

console.log(NaN === NaN); // false

// isFinite(value) converts its argument to a number and returns true if it’s a regular number, not NaN/Infinity/-Infinity:

console.log(isFinite(Infinity)); // false
console.log(isFinite(NaN)); // false
console.log(isFinite(-Infinity)); // false

console.log(isFinite("kotesh")); // Numeric conversion of this string is NaN, so that's not finite

console.log(isFinite("78")); // true

// Number.isNaN and Number.isFinite

// methods are the more “strict” versions of isNaN() and isFinite() functions.

// BUT here's the diffrence

console.log(Number.isFinite("123")); // false, because "123" belongs to the string type, not the number type
console.log(isFinite("123")); // true, because isFinite converts string "123" into a number 123

// Better use the isFinite and isNaN instead as methods on the Number like these: Number.isNaN and Number.isFinite

// Object.is(value, value) for comparing in a execptional and convenient way

// We can use this way of comparison to check whether we are getting NaN from a calculation

let result = NaN;
console.log(Object.is(result, NaN)); // true
// In other cases we cannot do this in the way we want
console.log(result === NaN); // false -- hehe -- as we know that NaN is not Equal to anything, including itself.

//  When an internal algorithm needs to compare two values for being exactly the same, it uses Object.is (internally called SameValue).

// parseInt and parseFloat

// Whenever we want to extract a numeric value from a string which contains a combination of number and string. For examples : "100px", "19$"

// We cannot use the Number() method or unary plus operator as they are strict and expect a number wrapped inside quotes, not a poluted number like "100px"

console.log(+"100px"); // NaN
console.log(Number("100px")); // NaN

// To extract the number from the polluted numeric string we can use parseInt and parseFloat
// parseInt is for extracting out a non-decimal number
console.log(parseInt("100px")); //100  Yayyy! we extracted the number now
console.log(typeof parseInt("100px")); //returns a raw number
console.log(parseFloat("100px")); // 100 as there is not decimal digit, simply 100 returnes
// parseFloat is for extracting a decimal number

console.log(parseFloat("19.45$")); // 19.45

// if we use parseInt here let's see what it gives

console.log(parseInt("19.45$")); // 19  --- only integer part is returned. as the method is parseInt, SO DON'T USE parseInt method to extract a decimal number, cause it will only return the integer part, not the decimal value. So, decimal part is lost

// WARNING : These methods will only work if the string start with a number, these methods will fail, if we pass a numbered-string started with a text/string character

console.log(parseInt("a123")); // NaN

// Math.random()  - Returns a DECIMAL NUMBER between 0 and 1 ( 0 and 1 are excluded)

console.log(Math.random()); // 0.79317993981435
console.log(Math.random()); // 0.4566740378944838
console.log(Math.random()); //  0.5556595557621502

// Math.min()
console.log(Math.min(1, -3, 4, -21, 4));

// Math.max()
console.log(Math.max(1, -3, 4, -21, 4));

// Math.pow()
console.log(Math.pow(2, 4));
