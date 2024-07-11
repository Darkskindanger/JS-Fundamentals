// Promise work flow:

// 1. Asynch code

// 2. new promise created : let promise = new promise(resolve,reject)

// 3. .then(resolve), catch(reject), finally()

// Promise states: Pending, Fulfilled, Rejected

// Constructing a promise object
//1.
const equalTo2 = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    resolve("success");
  } else {
    reject("failed");
  }
});

equalTo2
  .then((message) => {
    // Puts 'resolve' case to use
    console.log(`This is in the 'then': ${message}`);
  })
  .catch((message) => {
    // Catches error case
    console.log(`This is in the 'catch': ${message}`);
  });

// 2. Replacing callback functions (intended use)

//1.The variables being checked
const userLeft = false;
const userWatchingCatMeme = false;

//2. Creating main function
function watchMyVideoCallBack(callback, errorCallback) {
  if (userLeft) {
    errorCallback({ name: "User Left", message: ":(" });
  } else if (userWatchingCatMeme) {
    errorCallback({
      name: "User Watching Cat Meme",
      message: "WebDevSimplified < Cat",
    });
  } else {
    callback("Thumbs up and subscribe");
  }
}

watchMyVideoCallBack(
  //3. Passing in the main function parameters (callback functions)
  (message) => {
    console.log("Success:" + message);
  },
  (error) => {
    console.log(error.name + " " + error.message);
  }
);

// The above as a promise

function watchMyVideoPromise() {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({ name: "User Left", message: ":(" });
    } else if (userWatchingCatMeme) {
      reject({
        name: "User Watching Cat Meme",
        message: "WebDevSimplified < Cat",
      });
    } else {
      resolve("Thumbs up and subscribe");
    }
  });
}

watchMyVideoPromise()
  .then((message) => {
    console.log("Success:" + message);
  })
  .catch((error) => {
    console.log(error.name + " " + error.message);
  });

// 3. Run multiple promises in parrallel
const recordVideoOne = new Promise((resolve, reject) => {
  resolve("Video 1 Recorded");
});
const recordVideoTwo = new Promise((resolve, reject) => {
  resolve("Video 2 Recorded");
});
const recordVideoThree = new Promise((resolve, reject) => {
  resolve("Video 3 Recorded");
});

Promise.all([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
  (messages) => {
    console.log(messages);
  }
);

// return the first one to finish
Promise.race([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
  (messages) => {
    console.log(messages);
  }
);
