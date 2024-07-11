// Similar to .then, async await is used for response handling.

// Vanilla JS EX:
const makeTimeout = (ms) => {
  const timeout = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("All done!");
    }, ms);
  });
  return timeout;
};

console.log("program started...");

makeTimeout(1000).then((resolvedValue) => {
  console.log("from .then()", resolvedValue);
});

// Using async await
const makeTimeout2 = async () => {
  const result = await makeTimeout(1000);
  // Await keyword is similar to .then() and catch(), its WAITING for a result from the makeTimeout() function and will print the result below once its finished
  console.log("from async/await", result);
};

makeTimeout2();
console.log("program complete...");

// Using it with Fetch()

// async function fetchUsers() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");

//   const data = await response.json();

//   console.log(data);
// }

// fetchUsers();
