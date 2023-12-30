

//  Noticeable case of Object destructuring 
let title, width, height;


// { title, width, height } = { title: "Menu", width: 200, height: 100 };
// Declaration or statement expected. This '=' follows a block of statements, so if you intended to write a destructuring assignment, you might need to wrap the whole assignment in parentheses.


// Wrapping the whole left and right sides inside paranthesis will work 
({ title, width, height } = { title: "Menu", width: 200, height: 100 });

console.log(title);
