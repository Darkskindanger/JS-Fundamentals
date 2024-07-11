// Functions pausing mechanism with Async Await:

// Q1. what order will the below fire
// Q2. How long approx will it take

//
//

// console.log("program starting..."); //1

// const makeTimeout3 = (ms) => {
//   const timeout = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("All done!");
//     }, ms);
//   });
//   return timeout;
// };

// const fetchData = async () => {
//   console.log("Fetching first set of data..."); //3
//   const result1 = await makeTimeout(2000);
//   console.log("Fetching second set of data...", result1); //5
//   const result2 = await makeTimeout(2000); // If result 2 is independant of result 1 to be ran, then we can eliminate the 'await' keyword for both and leave them as normal promises. Hence saving us the issue of pausing programs
//   console.log("Done fetching data", result2); //6
// };

// fetchData(); //2

// console.log("program complete..."); //4,  This is 4th because when met with an "await", JS comes out of the async function to finish any SYNC code before the await timer has finished

//
//

// Fixed version: Only applicable if results are meant to be independant of eachother and dont rely on one completion to complete the 2nd
//
//
const makeTimeout3 = (ms) => {
  const timeout = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("All done!");
    }, ms);
  });
  return timeout;
};
console.log("program starting..."); //1

const fetchData = async () => {
  console.log("Fetching first set of data..."); //3
  const result1 = makeTimeout(2000);
  console.log("Fetching second set of data...", result1); //5
  const result2 = makeTimeout(2000);
  const finalResult = await Promise.all([result1, result2]);
  console.log("Done fetching data", finalResult); //6
};

fetchData(); //2

console.log("program complete...");
