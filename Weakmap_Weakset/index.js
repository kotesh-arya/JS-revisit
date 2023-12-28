//  WeaMap :

// -> Will take only objects as keys
// -> Once the key object's all other references are set to null, this Key-Object will be Garbage collected.
//  -> Don't have any iteration methods as the Garbage collection of the Key-Objects is not done at any specific time and SO WE WILL NOT BE SURE ABOUT THE ELEMENT COUNT OF THE WEAKMAP, Hence these iteration methods will not work as they work will all elements of the WeakMap

// WeakMap will allow only objects as keys not any primitive, this is the major difference b/w Map and WeakMap

const myMap = new Map();

const myWeakMap = new WeakMap();

let john = { name: "John" };

myWeakMap.set(john, "John-s Data"); //setting a property with an object as a key

console.log("myWeakMap before john object set to null", myWeakMap);

myMap.set(john, "johs-s data");
console.log(myMap, "myMap before john object set to null");

john = null;

console.log(myMap, "myMap after john object set to null"); // Even  after setting john to null, jon's object it still existing in the map and not garbage collected
console.log(
  "myWeakMap being checked for existence of john after john object set to null =>",
  myWeakMap.has(john)
);

//  WeakSet:

// -> Will take only objects as values(values are elemnents as a whole)
// -> Once the existing value-object's all other references are set to null, this Value-Object will be Garbage collected.
//  -> Don't have any iteration methods as the Garbage collection of the Key-Objects is not done at any specific time and SO WE WILL NOT BE SURE ABOUT THE ELEMENT COUNT OF THE WEAKMAP, Hence these iteration methods will not work as they work will all elements of the WeakMap.

let mowa = { name: "mowa" };
let bro = { name: "bro" };
let macchi = { name: "macchi" };

let myWeakSet = new WeakSet();

myWeakSet.add(mowa);
myWeakSet.add(bro);
myWeakSet.add(mowa);

console.log(myWeakSet);

console.log(myWeakSet.has(mowa));
console.log(myWeakSet.has(bro));
console.log(myWeakSet.has(macchi));



//  Use case for weakMap is caching and also additional temporary storage for objects managed at other place

//  CACHING WITH A WEAKMAP
let cacheWeakMap = new WeakMap();

let batMan = {
  name: "Bruce Wayne",
};
function process(obj) {
  if (!cacheWeakMap.has(obj)) {
    console.log(
      "RETURNING CALCULATED RESULT as there is not property with the Object passed as key "
    );
    let result = `result for the ${obj}`;
    cacheWeakMap.set(obj, result);
    return result;
  } else {
    console.log("RETURNING RESULT FROM CACHE AS THE OBJECT PASSED IS SAME");
    return cacheWeakMap.get(obj);
  }
}
let resultOne = process(batMan);
let resultTwo = process(batMan);
let resultThree = process(batMan);

console.log(resultOne, resultTwo, resultThree);




// Both WeakMap and WeakSet had this noticeble drawback of not supporting iteration methods due to non-specific Garbage which is leading to unknown element count

// Still these both are efficient in serving as additional storage for objects managed somewhere else 