/* 

for(initializer, conditional, updater){
  
  perform code here*
}

*/

for (let i = 0; i < 10; i++) {
  console.log("Hello");
}

console.log("This runs once i >= 10 and we exit the for loop");

// EX 1:
for (let string = "monkey", i = 0; string !== "banana"; i++) {
  if (i === 5) {
    string = "banana";
  }
  console.log(i);
}

// Ex 2: 'Break' keyword
for (let numm3 = 0; numm3 < 100; numm3 += 5) {
  if (numm3 === 25) {
    console.log("Ha Gotchya");
    break;
  }
}

// EX 3: 'continue' keyword: Similar to 'break', but instead of exiting, we are directed straight to the updater
for (a = 0; a < 100; a += 20) {
  // 1. Perform the above till a = 20

  console.log(a);

  // 2. then begin to add an extra 20 to a per cycle
  if (a === 20) {
    a += 20;
    continue;
  }

  console.log("loop number", a);
  // 3. Finally break out of loop when a = 80
  if (a === 80) {
    break;
  }
}

// Exercises:
// Warmup:
console.log("Warm up");
for (for1 = 5; for1 < 11; for1++) {
  console.log(for1);
}

// 2.
console.log("Exercise 2");
for (for2 = 10; for2 < 40; for2 += 2) {
  console.log(for2);
}

// 3.
console.log("Exercise 3");
let loggedIn = false;
for (for3 = 0; for3 < 4; for3++) {
  console.log(for3);
  if (for3 === 3) {
    loggedIn = true;
    console.log("Successfully logged in");
    break;
  }
}

// 4.
console.log("Exercise 4");
for (for4 = 0; for4 < 101; for4++) {
  if (for4 === 100) {
    console.log("All Done!");
    break;
  }
  if (for4 === 50) {
    console.log("Halfway There");
    continue;
  }
  if (for4 % 10 === 0) {
    console.log(`Checkpoint:${for4}`);
  }
}
