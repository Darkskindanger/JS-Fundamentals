// standard
// function fun1() {
//   console.log("hello");
// }

import { exportedVar } from "./modulescript.js";
import { exportedFunc } from "./modulescript.js";
function fun1(name) {
  console.log("hello" + name);
}

// arrow

(age) => {
  console.log(`you are ${age} years old`);
};

// functions as an argument/call back functions

function cbfunc() {
  console.log(1 + 2);
}

function doSomething(callbackFunction) {
  callbackFunction();
}

doSomething(cbfunc);

// Hoisting - Process of JS automatically raising/hoisting functions created via 'function' keyword to the top of the page to ensure they are called no matter where you call them

hoisted(); // Even though we have called the function before creating/intializing it, it has been hoisted at the top of the page automatically

function hoisted() {
  console.log(
    "This function can be called before it has been initialized due to hoisting"
  );
}

console.log("---------------------------------------------------------");

const notHoisted = () => {
  console.log(
    "Arrow functions created as a variable with either let or const cannot be hoisted and therefor must be called after intialization"
  );
};
notHoisted();

console.log("---------------------------------------------------------");

// Scoping - Global, Module, Block and function scope

// Global scope - Accessable anywhere, Even on other files in your project (not recommended)
console.log(globalVar);

// Module scope - Variables/modules that can be exported and then imported into different files and carry their scope

console.log(exportedVar); // Accessable here even though it was initialized inside another file (modukeScript.js) because we have exported it from that file and  imported it at the top of this file

// console.log(moduleVar); // Wont be accessable because it hasnt been exported and imported yet

// Function and Block scope - Variables only available within a function/block

function scope() {
  const funScope = "This variable is only available within this function";

  if (true) {
    const block =
      "This is a variable only available within this if statement (block scope)";

    console.log(`${funScope}
                 ${block}`);
  }

  // console.log(`${funScope}
  //              ${block}`); // Now 'block' isnt available because we are exiting its block scope (parenthasis)

  // Every set of {} in your js file creates a new block scope
}

scope();

// closures - The process of functions being able to access outside variables/values

const myName = "kyle";

function printName() {
  console.log(myName);
}

printName();

// more complex example

function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log("Outer Variable" + " " + outerVariable);
    console.log("inner Variable" + " " + innerVariable);
  };
}

const newFunction = outerFunction("outside");

newFunction("inside");

//
//
//
// practicing moduels (disregard)
exportedFunc();
