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
