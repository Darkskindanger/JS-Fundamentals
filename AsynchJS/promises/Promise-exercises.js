// Warn up
// console.log("Warm up exercise");
// console.log("program started");

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Promise 1 has been resolved successfully");
//   }, 3000);
// });

// console.log(promise1);
// console.log("program in progress");

// promise1.then((resolvedValue) => {
//   console.log(resolvedValue);
// });

// 1;
console.log("Exercise 1");
console.log("program started");

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("program complete");
  }, 3000);
  // setTimeout(() => {
  //   reject("program failure");
  // }, 2000);
});

console.log(promise2);
console.log("program in progress");

promise2
  .then((resolvedValue1) => {
    console.log(resolvedValue1);
  })
  .catch((rejectedValue1) => {
    console.log(rejectedValue1);
  });

// 3.
