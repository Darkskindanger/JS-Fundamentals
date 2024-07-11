// export const PI = 3.14159;

// export function getCircumference(radius) {
//   return 2 * PI * radius;
// }

// export function getArea(radius) {
//   return PI * radius * radius;
// }

// export function getVolume(radius) {
//   return 4 * PI * radius * radius;
// }

// // For node modules:

module.exports.counter = function (arr) {
  return `There are ${arr.length} elements in this array`;
};
// module.exports = counter;

// Node module patterns

module.exports.adder = function (num1, num2) {
  return `The sum of the 2 numbers is ${num1 + num2}`;
};

module.exports.pi = 3.142;

// 'module.export' is just an object, therefor we can add properties to this object to export multiple things at once
