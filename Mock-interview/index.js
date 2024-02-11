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
