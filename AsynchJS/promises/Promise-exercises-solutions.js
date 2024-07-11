// EX 1:
// Print out "program started" at the start of code
// Create promise that resolves after 3 sec
// Log out the promise while its pending
// Print out 'program in progress...' as well
// Print out 'program complete' when the promise completes after 3 seconds

//

// console.log("program started");

// const firstPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Program complete");
//     reject("Sorry program did not complete");
//   }, 3000);
// });

// console.log(firstPromise);
// console.log("Progam in progress");

// firstPromise.then((resolvedValue) => console.log(resolvedValue));

//

// EX 2:
// Print out 'program started' at the start of code
// Create a promise that resolves after 3 seconds and rejects after 2 seconds
// Log out the promise while its pending
// Print out 'program in progress...' as well
// Print out 'program complete' if the program fulfills
// Print out 'program failure' if the promise rejects

//
// console.log("program started");

// const secondPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Program Complete");
//   }, 3000);
//   setTimeout(() => {
//     reject("Program failure");
//   }, 2000);
// });
// console.log(secondPromise);
// console.log("program in progress...");

// secondPromise
//   .then((resolvedValue2) => {
//     console.log(resolvedValue2);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//

// EX 3:
// Print out 'program started' at the start of code
// Create a promise that resolves after 3 seconds
// Log out the promise while its pending
// Print out 'program in progress...' as well
// Print out 'step 1 complete' when the first promise fulfills
// Have the first promise return another new Promise that will fulfill after 3 seconds witht he message: 'step 2 complete'
// Print out the message from the second promise after it fulfills ('step 2 complete)

// console.log("program started");

// const thirdPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Step 1 complete");
//   }, 3000);
// });

// console.log(thirdPromise);
// console.log("program in progress...");

// thirdPromise
//   .then((resolvedValue3) => {
//     console.log(resolvedValue3);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("Step 2 complete");
//       }, 3000);
//     });
//   })
//   .then((resolvedValue4) => {
//     console.log(resolvedValue4);
//   });

//

// EX 4:
// Print out 'program started' at the start of code
// Create a promise that resolves after 5 seconds with the value {data:'Hello, friend!', error: null}
// Log out the promise while its pending
// Print out 'program in progress...' as well

// Create a first promise chain using the first promise and print out the resolved value when the first promise fulfills
// Have this first promise return another new promise that will fulfill after 2 seconds with the message: 'First promise chain is complete
// Print out the message above from the promise after it fulfills ('First promise chain complete')

// Create a second promise chain using the first promise above and print out the resolved value when the second promise fulfills
// Have this second promise return another new promise that will fulfill after 10 seconds with the message: 'Second promise chain complete!'
// Print out the message from the above promise after it fulfills ('second promise chain complete')

// Hint: This will be using the same promise two times:
// const fourthPromise = new Promise(...) // step 2
// fourthPromise.then(...).then(...) // step 5-7
// fourthPromise.then(...).then(...) // step 8-10

// const fourthPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const data = { data: "Hello, friend!" };
//     resolve(data);
//     reject(null);
//   }, 5000);
// });

// console.log(fourthPromise);
// console.log("program in progress...");

// fourthPromise
//   .then((resolvedValue4) => {
//     console.log(resolvedValue4);
//     return new Promise((resolve, reject) => {
//       resolve("First promise chain is complete");
//     }, 2000);
//   })
//   .then((resolvedValue5) => {
//     console.log(resolvedValue5);
//   });

// const fifthPromise = new Promise((resolve, reject) => {
//   resolve(fourthPromise);
//   reject(null);
// });

// console.log(fifthPromise);

// fifthPromise
//   .then((resolvedValue6) => {
//     console.log(resolvedValue6);
//     return new Promise((resolve, reject) => {
//       setTimeout(resolve("second promise chain complete")), 10000;
//     });
//   })
//   .then((resolvedValue7) => {
//     console.log(resolvedValue7);
//   });

//

// Bonus EX:
// Create a promise that resolves with the number 10 after 3 seconds
// Create another promise that resolves with th enumber 20 after 5 seconds
// How can we log out the sum (30) of these two resolves values once, after BOTH promises successfuly fulfill?

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const num1 = 10;
//     resolve(num1);
//   }, 3000);
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const num2 = 20;
//     resolve(num2);
//   }, 5000);
// });

// Promise.all([promise1, promise2]).then((bothValues) => {
//   const sum = bothValues[0] + bothValues[1];
//   console.log(sum);
// });
