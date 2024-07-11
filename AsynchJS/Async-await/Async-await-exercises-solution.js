//EX1:
//  1. Create a function called 'fetchPokemon' that returns a promise that resolves with the value: {data:{name:'pikachu',power:20}} after 2 seconds
// 2.Print out 'program starting...'
// 3.Create an async function that uses await to wait for the data to come back from 'fetchPokemon' then log out the data
// 4.Call the async function you created
// 5.Log out 'program complete'

// After you're done the above:
// 6.Change 'fetchPokemon' to reject after 2 seconds instead with a new Error object with the message 'Danger, danger!'
// 7. How can you modify your async function to catch this error?

// const fetchPokemon = (ms) => {
//   const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // resolve({ data: { name: "pikachu", power: 20 } }, ms);
//       reject("Danger,Danger");
//     });
//   });
//   return promise1;
// };

// console.log("program started");

// const fetchPokemonNow = async () => {
//   try {
//     const result = await fetchPokemon(2000);
//     console.log(result);
//   } catch (error) {
//     console.log("We are in the error case. All done");
//     console.error(error);
//   }
// };

// fetchPokemonNow();
// console.log("Program complete");

//
//
//

// EX2:
//  1. Create a function called 'fetchUsers' that returns a promise that resolves with the value: {data:{user:'Monkey',admin:true}} after 3seconds
// 2.Create a function called 'login' that takes an Object as an argument. If the object has a property called 'admin' with a value of true, then log out 'successfully logged in', Otherwise log out 'Failed to log in, please try again.'

// 3. Print out 'Program starting...'

// 4. Create an async function that uses await to wait for the data to come back from 'fetchUsers'
//5. Pass the user that comes back from 'fetchUser' to the 'login' function you created above
// 6.Call the async function you created
// Log out 'program complete!'

// const fetchUsers = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ data: { name: "Monkey", admin: true } });
//     }, 3000);
//   });
// };

// const login = (user) => {
//   if (user.admin === true) {
//     console.log("Successfully logged in");
//   } else {
//     console.log("Failed to log in, please try again.");
//   }
// };
// const fetchUserNow = async () => {
//   const result = await fetchUsers();
//   console.log(result);
//   login(result.data);
// };

// fetchUserNow();

// console.log("program starting...");
// // console.log(fetchUsers());

// EX3:
// 1. Create a function called 'fetchFast' that returns a promise that resolves with the string 'Fast Done' after 2 seconds
// 2. Create a function called 'fetchSlow' that returns a promise that resolves with the string 'Slow Down' after 6 seconds
// 3. Print out 'Program starting...'
// 4.Create an async function that uses await to wait for the data to come back from 'fetchFast'  then log out the data. Then use another await to wait for the data to come back from 'fetchSlow' and log it out right after
// 5. Call the async function you created
// 6. Log out 'Program complete'

// How long does it take and why
// How could you speed it up?

// const fetchFast = (ms) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Fast Done");
//     }, ms);
//   });
// };

// const fetchSlow = (ms) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Slow down");
//     }, ms);
//   });
// };

// console.log("Program starting...");
// const firstTimestamp = new Date();

// const fetchNow = async () => {
//   const result1 = fetchFast(2000);
//   console.log(result1);
//   const result2 = fetchSlow(6000);
//   console.log(result2);

//   const finalResult = await Promise.all([result1, result2]);
//   console.log(finalResult);

// const secondTimestamp = new Date()
// const timeElapsed = secondTimestamp - firstTimestamp
// console.log("program complete",timeElapsed);
// };

// fetchNow();

/* Ex4:
 1. Create a function called 'goGetCandies' that returns a promise object that resolves with the string {candy:'sour keys', quantity:10} after 2 seconds
2. Create another function called 'sellCandies' that will take candy Object like above and return a number that is 25 * quantity. This will be how much (in cents) we get for our candies. However make this function take 3 secopnds to do this math (return a Promise with a setTimout with the answer)
3. Write an async function that uses await to: 

- Get the candy object from goGetCandies()
- passes it to 'sellCandies' and waits for the response
- Prints out how much money we made from our sale

4. Do the same steps as #3 but with vanilla promises.

Q.1 Which of these 2 methods do you prefer?
Q.2 Which of these 2 methods is easier to read
*/

// My attempt:
// const candy = { candy: "sour keys", quantity: 10 };
const goGetCandies = () => {
  const candy = { candy: "sour keys", quantity: 10 };
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(candy);
    }, 2000);
  });
};

const sellCandies = (object) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(object.quantity * 25);
    }, 3000);
  });
};
console.log("Program starting...");

const getCandiesNow = async () => {
  const result1 = goGetCandies();
  console.log(result1);
  const result2 = sellCandies();
  console.log(result2);
  const finalResult = await Promise.all([result1, result2]);
  console.log(finalResult);
};

getCandiesNow();

//
//
//

// Revised attempt (help from nader video)
const goGetCandies2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ candy: "sour keys", quantity: 10 });
    }, 2000);
  });
};

const sellCandies2 = (candy) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(25 * candy.quantity);
    }, 3000);
  });
};

const getCandiesNow2 = async () => {
  const candy = await goGetCandies2();
  const result3 = await getCandiesNow2(candy);
  console.log(result3);
};
