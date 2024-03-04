// const promise = fetch("https://jsonplaceholder.typicode.com/todos/1");

// console.log(promise); //Promise { <pending> }

// promise.then((result)=> result.json()).then(data=> console.log(data)); // { userId: 1, id: 1, title: 'delectus aut autem', completed: false }

// Make a request for user.json
fetch("https://jsonplaceholder.typicode.com/todos/1")
  // Load it as json
  .then((response) => response.json())
  // Make a request to GitHub
  .then((user) => fetch(`https://api.github.com/users/${"kotesh-arya"}`))
  // Load the response as json
  .then((response) => response.json())
  // Show the avatar image (githubUser.avatar_url) for 3 seconds (maybe animate it)
  .then((githubUser) => {
    return new Promise((resolve, reject) => {
      let img = document.createElement("img");
      img.src = githubUser.avatar_url;
      img.className = "promise-avatar-example";
      document.body.append(img);

      setTimeout(() => {
        img.remove();
        resolve("image removed");
      }, 3000); // (*)
    });
  })
  .then(() => {
    console.log("Now show the form"); // this will happen only after the above returned promise is resolved :)
  });

//   NOTE: Its always a GOOD PRACTICE to return promise from a .then()'s [or a catch() or a finally()] handler function, so that the next .then()'s [or a catch() or a finally()] handler will wait till the above promise is resolved and that makes delayed asynchronous operations more ordered and smooth.


// TASKS:


// Promise: then versus catch
// Are these code fragments equal? In other words, do they behave the same way in any circumstances, for any handler functions?

// promise.then(f1).catch(f2);

// Versus:

// promise.then(f1, f2);

const myPromise = new Promise((resolve, reject) => {
  // uncomment either of these
  resolve("SUCCESS");
  // reject(new Error("Sorry you're failed!"));
});

// Case 1
myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

// Case 2
// myPromise.then(
//   (result) => {
//     console.log(result);
//   },
//   (err) => {
//     console.log(err);
//   }
// );


// Solution: Here in the first case if there's an error occured in either resolving the promise or from the .then() block the .catch() can handle both of the cases

//  But in the second case of passing two handler functions into the .then() the second habdler function of course will execute in case of an error while executing the promise 
// BUT IT IS NOT CAPABLE OF HANDLE AN ERROR THAT IS OCCURED IN THE FIRST HANDLER FUNCTION OF THE .then()