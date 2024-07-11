// Try/Catch method: Recommended to be used every time we use an async function

const makeTimeout = (ms) => {
  const timeout = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("All done!");
      reject("There was an error");
    }, ms);
  });
  return timeout;
};

const causeError = async () => {
  // Note, async method does come with scoping issues, if we hope to use any variables inside the try/catch methods or even below the the try/catch methods. We must declare these variables outside them at the beginning of our async function
  try {
    const result = await makeTimeout(2000);
    console.log(result);
  } catch (error) {
    console.log("We are in the error case. All done");
    console.error(error);
  }
};
console.log("program started");
causeError();
console.log("program done");
