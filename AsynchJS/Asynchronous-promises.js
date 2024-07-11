// Synchronous = Executes line by line consecutively in a sequential manner, Code that waits for an operation to complete

// Asynchronous = Allows multiple operations to be performed concurrently without waiting. Doesnt blobk the execution flow and allows the program to continue.
// Mostly used in (I/O operations, Network requests and Fetching data)
// Handled by: Callbacks, Promises and Async/Await

// Callbacks (including setTimout asynchronous method )

// console.log("------------Callback 1:------------");

// function func1(callback) {
//   setTimeout(() => {
//     console.log("8:30am: Brushed my teeth");
//     callback();
//   }, 0);
//   setTimeout(() => {
//     console.log("12:00pm: Lunch time ");
//   }, 500);
// }

// function cb1() {
//   setTimeout(() => {
//     console.log("5pm: Work finished");
//   }, 1000);
//   setTimeout(() => {
//     console.log("5:30pm: In the gym");
//   }, 1500);
// }
// func1(cb1);

// function func2(callback) {
//   setTimeout(() => {
//     console.log("------------Callback 2:------------");
//     console.log("9am: Breakfast");

//     callback();
//   }, 2000);
//   setTimeout(() => {
//     console.log("12:00am: Lunch @ Nobu");
//   }, 2500);
// }

// function cb2() {
//   setTimeout(() => {
//     console.log("5pm: Gym Time");
//   }, 3000);
//   setTimeout(() => {
//     console.log("10pm: Bed Time");
//   }, 3500);
// }
// func2(cb2);
//
//

// Promises = An object that manages asynchronous operations.

// Wrap a promise object around {asynchronous code}

// "I promise to return a value"

// Pending -> Resolved or Rejected

// new Promise((resolve,Reject)=>{asynchronous code})

// Chores example - First with Callbacks
// function walkDog(callback) {
//   setTimeout(() => {
//     console.log("You walk the dog ");
//     callback();
//   }, 1500);
// }
// function cleanKitchen(callback) {
//   setTimeout(() => {
//     console.log("You clean the kitchen");
//     callback();
//   }, 2500);
// }
// function takeOutTrash(callback) {
//   setTimeout(() => {
//     console.log("You take out the trash");
//     callback();
//   }, 500);
// }

// walkDog(() => {
//   //A large amount of callback chaining will turn to callback hell. We must avoid this
//   cleanKitchen(() => {
//     takeOutTrash(() => {
//       console.log("You finished all the chores");
//     });
//   });
// });

//
//
// Now with Promises

// console.log("------------Promise 1:------------");

// function backDay() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(
//         `Back day:
// Exercise 1: Warm up and low lat machine rows
// Exercise 2: Chest supported T-Bar row
// Exercise 3: Cable pulldowns
// Exercise 4: Machine rows
// Exercise 5: Cable pullovers`
//       );
//     }, 500);
//   });
// }
// function chestDay() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(
//         `Chest day:
// Exercise 1: Warm up and smith machine incline bench
// Exercise 2: Machine flat press
// Exercise 3: incline machine press`
//       );
//     }, 1000);
//   });
// }
// function legDay() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(
//         `Leg day:
// Exercise 1: Warm up and leg press
// Exercise 2: Smith machine squats
// Exercise 3: Leg extensions
// Exercise 4: bodyweight lunges`
//       );
//     }, 1300);
//   });
// }

// backDay()
//   .then((result) => {
//     console.log(result);
//     return chestDay();
//   })
//   .then((result) => {
//     console.log(result);
//     return legDay();
//   })
//   .then((result) => {
//     console.log(result);
//     console.log("Training done!");
//   });

// function weekdayMeals() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("------------Promise 2:------------");
//       resolve(`Weekday meals:
//     Monday: 2x Chicken, Rice, Vegetables + 0 Calorie Fanta
//     Tuesday: 2x Chicken, Rice, Vegetables + 0 Calorie Fanta
//     Wednesday: 2x Chicken, Rice, Vegetables + 0 Calorie Fanta
//     Thursday: 2x Chicken, Rice, Vegetables + 0 Calorie Fanta
//     Friday: 2x Chicken, Rice, Vegetables + 0 Calorie Fanta
//     `);
//     }, 2000);
//   });
// }

// function weekendMeals() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Weekend Meals:
//     Saturday: 1x Cheatmeal + 0 Calorie Fanta
//     Sunday: 1x Cheatmeal + 0 Calorie Fanta
//     `);
//     }, 2500);
//   });
// }

// weekdayMeals()
//   .then((result) => {
//     console.log(result);
//     return weekendMeals();
//   })
//   .then((result) => {
//     console.log(result);
//   });
// //

// function carRace() {
//   console.log();
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Ready...Set...GO!`);
//     }, 0);
//   });
// }

// function race() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Race in progress...`);
//     }, 600);
//   });
// }

// function raceEnd() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`Winner`);
//     }, 1500);
//   });
// }

// function raceResults() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`
//       Winner: Mclaren 765lt (9.02s)
//       2nd: Ferrari 488 Pista (9.05s)
//       3rd: Lamborghini Huracan STO (9.08s)`);
//     }, 2000);
//   });
// }

// carRace()
//   .then((result) => {
//     console.log(result);
//     return race();
//   })
//   .then((result) => {
//     console.log(result);
//     return raceEnd();
//   })
//   .then((result) => {
//     console.log(result);
//     return raceResults();
//   })
//   .then((result) => {
//     console.log(result);
//   });

//

// function pickUp2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Hi Craige");
//     }, 0);
//     setTimeout(() => {
//       resolve("You working today?");
//     }, 400);
//   });
// }

// function response2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Hello :)");
//     }, 200);
//     setTimeout(() => {
//       console.log("Yeah mate, ill be there");
//     }, 600);
//   });
// }

// pickUp2()
//   .then((result) => {
//     console.log(result);
//     response2();
//   })
//   .then((result) => {
//     console.log(result);
//     console.log("Conversation finished");
//   });

// Async/Await = Async = Makes a function return a promise
//             = Await = Makes an async function wait for a promise

//             = Allows you write asynchronous code in a synchronous manner
//             = Async doesnt have resolve or reject parameters
//             = Everything after Await is placed in an event queue

// function shopping() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const shoppingDone = true;
//       if (shoppingDone) {
//         resolve("Shopping: Groceries, Clothes and supplements");
//       } else {
//         reject("Oh snap, the stores were closed");
//       }
//     }, 500);
//   });
// }

// function packing() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const shoppingPacked = true;
//       if (shoppingPacked) {
//         resolve("Finally packed the shopping");
//       } else {
//         reject("Oh no i dont have enough space");
//       }
//     }, 1000);
//   });
// }

// function nap() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const napTaken = true;
//       if (napTaken) {
//         resolve("Finally i can nap");
//       } else {
//         reject("I cant fall asleep");
//       }
//     }, 1500);
//   });
// }

// async function todaysTasks() {
//   const doneShopping = await shopping();
//   console.log(doneShopping);

//   const shoppingPacked = await packing();
//   console.log(shoppingPacked);

//   const takingNap = await nap();
//   console.log(takingNap);

//   console.log("Todays task DONE!");
// }

// todaysTasks();

function gymPrep() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const readyForGym = true;
      if (readyForGym) {
        resolve("Okay, preworkout down and ready to go!");
      } else {
        reject("Damn it, Im out of Pre");
      }
    }, 0);
  });
}

function workout() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const workedOut = true;
      if (workedOut) {
        resolve("Lightweight BABY!!!");
      } else {
        reject("Im way to tired");
      }
    }, 500);
  });
}

function cardio() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cardioDone = true;
      if (cardioDone) {
        resolve("Time to eat!");
      } else {
        reject("CBF doing cardio");
      }
    }, 800);
  });
}

async function workoutSchedule() {
  const gymReady = await gymPrep();
  console.log(gymReady);

  const workingOut = await workout();
  console.log(workingOut);

  const onCardio = await cardio();
  console.log(onCardio);

  console.log("Workout Done");
}

workoutSchedule();
