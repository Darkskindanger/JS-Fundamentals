// Pass by Reference vs Value

// Value - Passing by value refers to the literal setting of a value linked to a variable

// let a = 10; //value of 10
// let b = "Hi"; //value of 'hi'
// let c = a; //value of 10
// c = c + 1; //value of 11, Same time 'c's initial value of 'a' remains the same (10)

// // Reference - Passing by reference refers to the 'reference' of a value/s when a variable is set with anything besides a primitive value type

// let d = [1, 2]; // value of '<0x01>', This is an address pointing to the values of [1,2]

// let e = d; // value of <0x01>

// e.push(3); // This adds 3 to the array linked to d and e ([1,2]) which ALSO changes the value of d and e because both d and e share the same value address <0x01>

// e = [3, 4, 5]; // value of 0x02, This WONT change the value of d, It simply just creates a new reference address.

// In code:

let a = 10;
let b = "Hi";
let c = [1, 2];
let d = c;
// d.push(3); // adds 3 to 'c' array
d = [3, 4, 5]; // new array address is created, does not change 'c' array
d.push(7);
console.log(`a = ${a}`);
console.log(`b = ${b}`);
console.log(`c = ${c}`);
console.log(`d = ${d}`);

// Bonus: Address generation (passing by reference)

let var1 = [1, 2];
let var2 = var1; // These 2 share value addresses (0x01)

let var3 = [1, 2]; // This has its own value address (0x02) because a new array has been created

console.log(`Pre function var3 = ${var3}`);
changeV3(var3, 4);
console.log(`Post function var3 = ${var3}`);

function changeV3(array, value) {
  array.push(value);
}
