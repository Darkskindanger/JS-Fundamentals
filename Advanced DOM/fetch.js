// fetch = Function used for making HTTP requests to fetch resources.
//         (JSON style data, images, files)
//
//         Simplifies asynchronous data fetching in Javascript and
//         use for interacting with APIs to retrieve and send
//         data asynchronously over the web
//
//         Syntax: fetch(url, {object with a method inside})
//         *Promise based, Will either 'resolve' or 'reject

// Pokemon fetch demonstation -

// Simple:

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//   .then((response) => response.json()) //.json() returns a promise
//   .then((data) => {
//     console.log(data.id);
//   })
//   .catch((error) => console.error(error));

// Intermediate: Catching errors as fetch wont abort request when met with error, so we have to set tests inside our request
fetch("https://pokeapi.co/api/v2/pokemon/spongebob")
  .then((response) => {
    //if an error occurs, we can check for this in the 'ok: true/false' property inside our console returned object
    if (!response.ok) {
      //1. 'if' ok:false, return a new error
      throw new Error("Could not fetch resource");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data.id);
  })
  .catch((error) => console.error(error));
// 2. catch that error with this catch statement

//
//
// Now with Async/Await:

// 6. Run fetch function
fetchData();

async function fetchData() {
  // 1. try/catch method
  try {
    // 3. create/store fetch request
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/typhlosion"
    );

    //4.Test for ok: true response
    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }

    // 5.store and log fetch response
    const data = await response.json();
    console.log(data);

    //2. specify error handling
  } catch (error) {
    console.error(error);
  }
}

fetchDitto();

// 1. async function
async function fetchDitto() {
  // 2 Try/Catch method
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");

    //4. test for successful fetch
    if (!response.ok) {
      throw new Error("Couldnt catch Ditto :(");
    }

    //5. store/log data on json format
    const data = await response.json();
    console.log(data);

    // 3. Specify error handling
  } catch (error) {
    console.error(error);
  }
}
