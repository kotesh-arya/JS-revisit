"use strict";

// Property-flags

// THere are 3 property flags to a property of an object in js, they are

//  a)  writable - if true - the value of this property can be changed, otherwise - the value cannot be changed(read-only)
//  b) enumerable - if true -will show during looping, else won't show
//  c) configurable - if true - this property can be deleted and these above attributes (writable, enumerable) can be modified, otherwise not(writable can still be modified).  If configurable is set to false, attempts to delete the property or change its attributes (except for writable) will throw an error.
// Whenever we create an object we use normal way of writing properties like below

let user = {
  age: 42,
  role: "tester",
};

// Now. let's get these 3 flags for this single property of this user object

// The method Object.getOwnPropertyDescriptor allows to query the full information about a property.

let propertyDetails = Object.getOwnPropertyDescriptors(user, "age");
console.log(propertyDetails); // { value: 42, writable: true, enumerable: true, configurable: true }

// Object.getOwnPropertyDescriptors(object) - gives the descriptors of all the properties inside an object, in the form of an object where the peoperty key's are the key's for this returned object of descriptors

let AllPropertyDetails = Object.getOwnPropertyDescriptors(user);
console.log(AllPropertyDetails); //{
//     age: { value: 42, writable: true, enumerable: true, configurable: true },
//     role: {
//       value: 'tester',
//       writable: true,
//       enumerable: true,
//       configurable: true
//     }
//   }

// but if we cant to define/set the property flags of that yet to be created property, we use Object.defineProperty(targetObjectHere, "property-Key", {value: "propertyValue"}, <---here we can access those 3 property flags for this yet to be created property)

Object.defineProperty(user, "anotherProperty", {
  value: "hello",
});

let user5 = {
  name: "kotesh",
};

Object.defineProperty(user5, "name", {
  writable: false,
});

// user5.name = "mowa bro"; // won't effect - in strict mode it will throw an error here   --> TypeError: Cannot assign to read only property 'name' of object '#<Object>

console.log(user5.name); // kotesh

Object.defineProperty(user5, "name", {
  writable: true,
});

user5.name = "mowa bro again";
console.log(user5.name); // mowa bro again  // property value is modifyable now as writable flag is set to true

//  Here’s the same example, but the property is created automatically with value false:

let user7 = {};

Object.defineProperty(user7, "name", {
  value: "john",
  enumerable: true,
  configurable: true,
  //   missed the wwritable flag here, so writable:false
});

console.log(user7); //{ name: 'john' }

// user7.name = "cena"; // TypeError: Cannot assign to read only property 'name' of object

// Now lets create multiple properties with descriptors using the Object.defineProperties()

let obj = {};

Object.defineProperties(obj, {
  name: { value: "john", writable: true },
  age: { value: 34, writable: true },
  role: { value: "Developer", writable: true },
});

let descriptors = Object.getOwnPropertyDescriptors(obj);
console.log(descriptors); // {   name: {
//     value: 'john',
//     writable: true,
//     enumerable: false,
//     configurable: false
//   },
//   age: { value: 34, writable: true, enumerable: false, configurable: false },
//   role: {
//     value: 'Developer',
//     writable: true,
//     enumerable: false,
//     configurable: false
//   }
// }

// By using both Object.defineDescriptors() and Object.getOwnPropertyDescriptors()

// we can create  "flags-aware" clone for an object

let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));

console.log(Object.getOwnPropertyDescriptors(clone)); // {
//   name: {
//     value: 'john',
//     writable: true,
//     enumerable: false,
//     configurable: false
//   },
//   age: { value: 34, writable: true, enumerable: false, configurable: false },
//   role: {
//     value: 'Developer',
//     writable: true,
//     enumerable: false,
//     configurable: false
//   }
// }  ---> flags-aware clone

// We generally use for in loop over an object and create its clone by assigning proccess

for (let key in obj) {
  clone[key] = obj[key];
}

// But this wont copy the flags on the main object
//  cannot get the symbolic-properties and non-enumerable properties, but Object.getOwnPropertyDescriptors() will get both symbolic and non-enumerable properties and copy them into the clone object

// SEALING AN OBJECT IN DIFFERET LEVELS - GLOBALLY
//  First
Object.preventExtensions(user);
// this method F-O-R-B-I-D-S the addition of a new property for an object

// To check if an Object's property extending is prevent we can use
Object.isExtensible(user); // false - Object's property extending is prevented, true - we can add a property to the Object

//  Second
Object.seal(user);
//  this method F-O-R-B-I-D-S the addiing/removing any of a  property of/to an object
// By setting configurable:false to ALL EXISTING PROPERTIES

// TO check whether an Object is sealed, we use
Object.isSealed(user); // true - we cannot add/remove a property in the object, false - we can!

//  Third
Object.freeze(user);
//  this method F-O-R-B-I-D-S the addiing/removing and updating any   property of/to an object
// By setting configurable:false and writable:false to ALL EXISTING PROPERTIES

// To check whether an Object is freezed or not, we use

Object.isFrozen(user); //true - we cannot add, remove or update  any property of an object

const obj55 = {
  name: "kotesh",
  age: 34,
};

Object.defineProperty(obj55, "name", {
  configurable: false,
});

obj.name = "mike";

console.log(obj55); // { name: 'mike' }

Object.defineProperty(obj55, "name", {
  writable: false,
  configurable: false,
});

obj.name = "lori";

console.log(obj55); // { name: 'mike' }

// Object.defineProperty(obj55, "name", {
//   writable: true,
// });

console.log(Object.getOwnPropertyDescriptor(obj55, "name"));

console.log(Object.getOwnPropertyDescriptor(obj55, "age"));

Object.defineProperty(obj55, "age", {
  configurable: false,
});

console.log(Object.getOwnPropertyDescriptor(obj55, "age"));

Object.defineProperty(obj55, "age", {
  writable: false,
});

console.log(Object.getOwnPropertyDescriptor(obj55, "age"));

Object.defineProperty(obj55, "age", {
  writable: false, // when confugurable:false then writable flag can be set to false from being true
});

//  and UNFORTUNATELY WE CANNOT SET IT TO TRUE AGAIN WHILE configurable is false
// Object.defineProperty(obj55, "age", {
//   writable: true, // TypeError: Cannot redefine property: age at Function.defineProperty
// });

// Object.defineProperty(obj55, "age", {
//   enumerable: false, // TypeError: Cannot redefine property: age
//   // at Function.defineProperty  -->  enumerable cannot even be changed from ture to false in the case of configurable being false
// });

console.log(Object.getOwnPropertyDescriptor(obj55, "age"));

let user44 = {
  name: "John",
};

Object.defineProperty(user44, "name", {
  writable: false,
});

// user44.name = "Pete"; // TypeError: Cannot assign to read only property 'name' of object '#<Object>' in "use strict" mode

console.log(user44.name); // John as writable is set to false

Object.defineProperty(user44, "role", {
  value: "developer",
  writable: true,
  enumerable: false,
  configurable: true,
});

for (let [key, value] of Object.entries(user44)) {
  console.log(key, value); // shows only name-> john and skips the role property
}

Object.defineProperty(user44, "role", {
  writable: false,
});

Object.defineProperty(user44, "role", {
  value: "team leader", // writable false only prohibits us from writing the property (user44.role) but we can still chance the property value using the Object.defineProperty() method
});

// user44.role = "human";  // TypeError: Cannot assign to read only property 'role' of object

console.log(user44.role); // "team leader"


// using "Object.defineProperties(object, { prop-key : {}, prop-key: {}})" and "Object.getOwnPropertyDescriptors(object)"
const animal = {};

Object.defineProperty(animal, "name", {
  value: "king kong",
  writable: true,
  enumerable: false,
  configurable: true,
});

Object.defineProperty(animal, "species", {
  value: "Gorilla",
  writable: true,
  enumerable: true,
  configurable: false,
});

Object.defineProperty(animal, "carnivore", {
  value: true,
  writable: true,
  enumerable: false,
  configurable: true,
});

console.log(Object.getOwnPropertyDescriptors(animal));

const descriptorsTwo = Object.getOwnPropertyDescriptors(animal);

const animalClone = Object.defineProperties({}, descriptorsTwo);

console.log(animalClone);
const animalCloneDescriptors = Object.getOwnPropertyDescriptors(animalClone);


console.log(animalCloneDescriptors);

// NOTE:- Object.getOwnPropertyDescriptors(object) returns all property descriptors including symbol and non-enumerable properties


// Property descriptors work at the level of individual properties.

// There are also methods that limit access to the whole object:


const address = {
  street : " Brahmin street",
}

// 1.  Forbidding addition of properties to a an object this making it non-extensible

// Object.preventExtensions(address);

// address.lane = "2nd"; // TypeError: Cannot add property lane, object is not extensible


// 2.  Forbidding addition/removal of properties to a an object and make it sealed 
//  [configurable: false] 
//  Ex:- Built-in Object properties and methods - Math.PI

// Object.seal(address);


// // address.city = "Bellandur"; // TypeError: Cannot add property lane, object is not extensible
// delete address.street; // TypeError: Cannot delete property 'street' of #<Object>


// 3. Forbidding adding/removing/changing of properties and freeze it!
// [configurable: false, writable: false for all existing properties]

Object.freeze(address);

// address.town = "Marathalli"; // TypeError: Cannot add property town, object is not extensible

// delete address.street; // TypeError: Cannot delete property 'street' of #<Object>

// address.street = "Shivalay street"; //TypeError: Cannot assign to read only property 'street' of object 
