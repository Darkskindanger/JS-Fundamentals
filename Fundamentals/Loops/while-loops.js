// print Hello 5 times (w/out a while loop)
console.log("hello");
console.log("hello");
console.log("hello");
console.log("hello");
console.log("hello");

// while loops

/*Similar to conditional statements, a while loop involves a 'Check" for a certain occurance and then an action to occur while the occurance is constant 

while (conditional check)
{code to be ran aslong as check is truthy}
*/

let num = 0;

// while loop:
while (num < 3) {
  console.log("Hey");
  num++; //Remember to incrament to avoid infinite loops
}

// Infinite loop:

// while (num1 < 3) {
//   console.log("Hey");
// }

// Break keyword:
/* Allows us to exit a loop pre maturely depending on our condition

Also prevents an infinite loop due to taking effect the 1st time its encountered and not allowing for a full loop*/
let numm = 1;

while (numm <= 10) {
  console.log(numm);
  break;
  console.log("increasing counter...");
  num2++; //Remember to incrament to avoid infinite loops
}

console.log("this shows after break exits you out of the loop");

//
//
//
//

// Soccer game example  (Including an if statement)

let score = 0;

while (true) {
  console.log("inside the loop");

  if (score >= 10) {
    console.log(score);
    break;
  }
  // while the score being less or equal to 10 is true; console log the score AND break/exit out once score becomes higher than 10 (condition becomes false)
  // before that, keep increasing the score

  if (score === 9) {
    console.log("Youre about to forfeit the other Team!");
  }

  score++;
}

// An if statement allows for flexbility in allowing for a condition to change without turning to an infinite loop

console.log("Game Over");

// Exercises:
// Warm up.
let num1 = 5;
while (num1 < 10) {
  console.log(num1);
  num1++;
}

console.log(num1);

// 1.
let loggedIn = false;
let num2 = 0;
while (num2 <= 2) {
  console.log("Incorrect login credentials");
  if (num2 === 3) {
    loggedin = true;
    break;
  }
  num2++;
}

// 2.
let num3 = 10;
while (num3 < 40) {
  console.log(num3);

  num3 += 2;
}

// 3.
let num4 = 0;
while (num4 < 101) {
  if (num4 === 100) {
    console.log("All Done!");
    num4++;
    continue;
  }
  if (num4 === 50) {
    console.log("Half way there...");
    num4++;
    continue; //Ensure to include the incrementor and the continue keywords in the 'if' statement to prevent showing 'checkpoint 50'
  }
  if (num4 % 10 == 0) {
    console.log(`Checkpoint: ${num4}`);
    //     num4++;
    //     continue;
  }

  num4++;
}
