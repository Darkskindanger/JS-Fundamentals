const fetchData = async () => {
  return "hello";
};

const result = fetchData();
// Q.1: What will be logged out below?
console.log(result);

// Instead of a pending promise (according to our knowledge of what promises and .then() return), the above actually logged out a FULFILLED Promise.

// Extract the result out of the function object:

// Then()
result
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.error(error);
  });

// Using Async & Await
const extractHello = async () => {
  const result = await fetchData();
  console.log(result);
};

extractHello();
