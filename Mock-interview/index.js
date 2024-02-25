// Randhir

// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// , add , get

// dic.add("name", "kotesh");
// dic.get("name") // "kotesh"

//

let dic = {
  add(key, value) {
    this[key] = value;
  },
  get(key) {
    return this[key];
  },
  reverse() {
    return reverse(this);
  },
};

dic.add('name', 'kotesh');
dic.add('age', 23);
dic.add('role', 'developer');
console.log(dic);

console.log(dic.get('age'));
console.log(dic.get('role'));
console.log(dic.get('name')); // "kotesh"

const reverseDict = dic.reverse();
// console.log(reverseDict);
// console.log(reverseDict.get('kotesh')); // "name"

let sample = {
  name: 'kotesh',
};

function reverse(obj) {
  let reversedObj = {};
  // console.log(Object.entries(obj));
  reversedObj.get = function (key) {
    return reversedObj[key];
  };
  for (let [key, value] of Object.entries(obj)) {
    // console.log(key, value)
    if (typeof value !== 'function') {
      reversedObj[value] = key;
    }
  }
  return reversedObj;
}

// reverse(sample);


// Prakash

// EVENT LOOP: https://www.youtube.com/watch?v=cCOL7MC4Pl0

// library and framework differences

// react and react-dom

// reconciliation

// react-portals

// coockies

// CORS

// First series introduction in  YDKJS

// Missing keypoints in my explanations


// Try YDKJS for jsvascript concepts referring.


// Pavan Bhat


// function foo() {
//   return function bar(a) {
//     i = 3;
//     console.log(a * i);
//   }
// //   for (var i = 0; i < 5; i++) {
// //     bar(i * 2);
// //   }
// }

// // foo()();

// // 0
// // 6
// // 12
// // 18
// // 24

let sample = {
    
  arrFunc: () => {
    console.log(this);
  },
      name : "sample"
};
sample.arrFunc()
function foo(num) {
  console.log("foo : " + num);
  this.count++;
}

foo.count = 0;
for (var i = 0; i < 7; i++) {
  if (i < 5) foo(i);
}

console.log(foo.count);


let first ={


}

let arr = []
let second = {
    __proto__ : first
}


Array.prototype.myMethod = ()=>{
    console.log("my custom method")
}

let simple = [];
simple.myMethod()


let obj = {
name : "kotesh",
nested : {
    age: 23
}
}

let objCopy = obj;
let objCopy2 = {...obj};
console.log(objCopy);

