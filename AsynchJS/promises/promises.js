//1. Create new promise within a variable
const myReceipt = new Promise((resolve, reject) => {
  //2. Create the code to be run after the intended delay
  setTimeout(() => {
    resolve("Heres your ice cream!");
    reject("Sorry, no ice cream available.");
    // When met with both a resolve and reject function inside the promise object. The status goes to whichever it is met with first
  }, 1000);
});
// Note, that most of the time, we wont be creating promise objects, instead working with the response of other promises

console.log(myReceipt); //Note, that at this current time, the above promise is PENDING until a then() and Catch() is declared

//

myReceipt
  .then((resolvedValue) => {
    console.log("promise seems to be done");
    console.log(resolvedValue);
    console.log(myReceipt);
    return "yo"; // Remember, anything returned from then(),catch() or finally() will be a new promise. Meaning we can simply chaing another promise method like then() to use the new promise (like in the below)
  })
  .then((returnedPromise) => {
    console.log(returnedPromise);
  })
  .catch((error) => {
    console.log(error);
  });

//
//
//
//
//
//

// Traversy media video on promises
const posts = [
  { title: "Post One", body: "this is post one" },
  { title: "Post Two", body: "this is post two" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;
      // const error = true;
      if (!error) {
        resolve();
      }
      // If not error occurs, call the resolve function (which is the getPosts() function mentioned below)
      else {
        reject("Error: Something went wrong");
      }
      // If there is an error, run the below catch() function
    }, 2000);
  });
}

createPost({ title: "Post Three", body: "This is post three" })
  .then(getPosts)
  .catch((err) => console.log(err));

// We did the same thing as callback.js but with promises

// Promise.all - Group all the promises you want
const promise1 = Promise.resolve("hello world");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 2000, "Goodbye")
);
const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
  // Above is how we formatt the fetch data to json
);
// When working with Fetch api, you must use 2 then() methods. 1st in order to format to json and then the 2nd to actually extract the data

Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
  console.log(values)
);
