/* 
-What happens when an error happens in our code?

Eg. 
We try to do an operation on something that is undefined
We try to open a file that is already in use
We try to talk to a database, but its down

- Crashing vs recovering gracefully

-Error monitoring/logging*/

//
//
//

/* Using the Try/Catch methods, we can run our code while accounting for errors. This prevents our program from crashing

Throw - keyword for setting an error
Catch - Keyword for catching an error and outputing/handling a response*/

try {
  throw "boom";
} catch {
  console.log("caught");
}

// Using the try/catch method, we are actually able to progress to the below console.log(), where as without the methods, the progam would crash and we would never make it to any code under the error

console.log("hi");

// Accessing the error that has been caught
try {
  throw "Oh NO!";
} catch (error) {
  console.error(error);
  console.error("caught");
}

// New Error() : Can be used to create an error object to include more information to display to the user when an error occurs

try {
  const message = "Hello there";
  console.log(message);
  throw new error("Oh NO!");
} catch (error) {
  console.error(error);
  console.error("caught");
}

// Try catch real world example: Returned object from a server or backend

try {
  const user = { name: "Alex", Age: 21 };
  // We are trying to access/log a property called 'color' inside the user profile
  console.log(user.profile.color);
} catch (error) {
  console.error(error);
}

// Server/JS response with a typeError due to 'profile' not existing in object and we log the error out in the console

//
//
//
/*Any code in between the instance of an error and the catch method will get ignored, JS immediately looks for the nearest catch statement */

try {
  const user = { name: "Alex", Age: 21 };

  console.log(user.profile.color); // From this error point
  console.log("do i get here?"); //Anything in between is ignored (from here)
  console.log("Hello?");
  console.log("What is going on");

  // To here
} catch (error) {
  console.error(error);
}
//
//
//

// Try scope: Similar to function scope, a variable mentioned inside the Try method cant be accessed by the catch method
try {
  const message2 = "Oh hi there";
  console.log(message2);
  throw new Error("Rude");
} catch (error) {
  console.error(error);
  // We arent able to log message2 because its trapped inside the Try method scope
  console.log(message2);
}

// The below code also gets ignored due to there being an error above when trying to log out message2 in catch(), and since we havent accounted for that error, our program has crashed
console.log("program complete");
