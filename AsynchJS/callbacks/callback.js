// Call back functions simplified: A function that is passed as an argument to another function. Allows you to call a function from another function

//eg.1
function doSomething(callbackFunction) {
  callbackFunction();
}

doSomething(() => {
  console.log("This is the call back function speaking");
});

//eg.2
// log is the callback function
function log(value) {
  console.log(value);
}

function calculateSum(num1, num2, callback) {
  const sum = num1 + num2;

  callback(sum);
}

calculateSum(10, 20, log);
// const posts = [
//   { title: "Post One", body: "this is post one" },
//   { title: "Post Two", body: "this is post two" },
// ];

// function getPosts() {
//   setTimeout(() => {
//     let output = "";
//     posts.forEach((post, index) => {
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// function createPost(post) {
//   setTimeout(() => {
//     posts.push(post);
//   }, 2000);
// }

// getPosts();
// createPost({ title: "post three", body: "This is post three" });

// The above createPost() doesnt actually run because it is a second slower than the prior mentioned 'getPosts()' and therefor has already populated the body of the html

// To fix this, we use getPost() as a callback function instead, allowing for it to wait for the createPost() to run before calling the callback function

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

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

getPosts();
createPost({ title: "Post Three", body: "This is post three" }, getPosts);
