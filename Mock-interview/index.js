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