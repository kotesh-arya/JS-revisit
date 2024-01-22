// Creating multilines strings using template literals

let multilineString = `hwrt
*jfaoijfd
* foahfasdlk
*jadfkajd
`;
console.log(multilineString);

// But it is still possible to create multiline string using a double qouted string also, using special chatacters like \n(backwardslash and n) to move the string to a new line

// \n denotes a line break:

//    \ - backslash is called as the escape character

let multilineDobleQuotedString = "first-line\nsecond-line\nthird-line";
console.log(multilineDobleQuotedString);

// Accessing the charactes of a string from the behind using the .at(-negative-integer)

let str = `Hello`;

console.log(str[-2]); // undefined
console.log(str.at(-2)); // l

// Strings are immutable
// Strings can’t be changed in JavaScript. It is impossible to change a character.

// Let’s try it to show that it doesn’t work:

let str4 = "hola";

str4[0] = "k";
console.log(str4); // hola  - we cannot mutate a string

// instead of this we can create a WHOLE NEW string and assign it to str variable

let str6 = "hi";

str6 = "h" + str6[1];

console.log(str6); // hi

// Searching for a substring using str.indexOf

let sentence = "welcome home relcosta";
console.log(sentence.indexOf("home")); // 8 - as the character h of the passed string starts at the 8th index of the main sentence.

console.log(sentence.indexOf("people")); // 13

console.log(sentence.indexOf("lco")); // 2

console.log(sentence.indexOf("lco", 3)); //15  -- the "lco" is found again at 15th index after 3nd index

// In the same way we have str.lastIndexOf(substr, position)

let sentence2 = "glad to see you here";

console.log(sentence2.lastIndexOf("e")); // 19 - searching from the end of the string

console.log(sentence2.indexOf("e")); // 9 - searching from the beginning of the string

// includes() - will check if the passed string/character exists in the same way its being passed into this method

console.log("kotesh".includes("o")); // true

// startsWith() - will check if the main string starts with the string/character that is passed into this method.

console.log("kotesh".startsWith("o")); // false

// endsWith() - will check if the main string ends with the string/character that is passed into this method.

console.log("kotesh".endsWith("h")); // true

// GETTING A SUBSTRING FROM A STRING  - There are 3 methods in JavaScript to get a substring->> substring, substr and slice.

// str.slice(start, end) here the character at the end index will be excluded from the result

let str99 = "godzilla";
console.log(str99.slice(2, 5)); // "dzi"

// str.substring(start, end) - Returns the part of the string between start and end (not including end).

// THIS IS ALMOST THE SAME AS SLICE BUT THIS ACCEPTS THE START GREATER THAN END (CAUSE IT WILL SWAPS THE START AND END VALUES IN CASE IF START BEING GREATER THAN END).

let str98 = "ninjastorm";
console.log(str98.substring(1, 5)); // inja
console.log(str98.substring(5, 1)); // inja  (here the swapping of the greater-starting point with the lesser-ending point gets swapped) SO SAME RESULT AS ABOVE

// str.substr(start , length(number of characters to be cut from that starting poing))

let str97 = "junglefury";
console.log(str97.substr(2, 4)); // ngle

// Comparing strings

//  strings are compared character-by-character in alphabetical order.

// A lowercase letter is always greater than the UPPERCASE:

console.log("a" > "Z"); // true

// Letters with diacritical marks are “out of order”:

console.log("Österreich" > "Zealand"); // true (those special characteres will be always less when compared to other normal characters)

// This may lead to strange results if we sort these country names. Usually people would expect Zealand to come after Österreich in the list.

// To understand what happens, we should be aware that strings in Javascript are encoded using UTF-16. That is: each character has a corresponding numeric code.

// There are special methods that allow to get the code of the character and back:

// str.codePointAt(pos)
// Returns a decimal number representing the code for the character at position pos:

// different case letters have different codes
console.log("Z".codePointAt(0)); // 90
console.log("z".codePointAt(0)); // 122

// Numeric code to the character using String.fromCodePoint(charCode)
console.log(String.fromCodePoint(90)); // Z

// The call str.localeCompare(str2) returns an integer indicating whether str is less, equal or greater than str2 according to the language rules:

// Returns a negative number if str is less than str2.
// Returns a positive number if str is greater than str2.
// Returns 0 if they are equivalent.
// For instance:

console.log("Österreich".localeCompare("Zealand")); // -1
