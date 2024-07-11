// Array methods

// Function that takes an array and multiplies the EVEN numbers by 3 then adds them up
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumOfTrippledEvens(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      let timesEvensByThree = array[i] * 3;

      sum += timesEvensByThree;
    }
  }
  console.log(sum);
  return sum;
}

sumOfTrippledEvens(numbers);

// map()
function addOne(num) {
  return num + 1;
}
const num2 = [1, 2, 3, 4, 5];

const sum2 = num2.map(addOne); // Outputs [2, 3, 4, 5, 6]

console.log(sum2);
//
//
//

// map() Using an inline function

const numbers3 = [10, 20, 30, 40, 50];

const sum3 = numbers3.map((value) => value + "is a value in this array");

console.log(sum3);
//
//
//

// filter() - only works if the function returns true

// display only odd numbers
function isOdd(num) {
  return num % 2 === 1;
}

let numbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum4 = numbers4.filter(isOdd);

console.log(sum4);

//
//
//
// reduce() - .reduce((total, currentItem) => total * currentItem, initialValue );

const num5 = [1, 2, 3, 4, 5];
const sum5 = num5.reduce((total, currentItem) => total * currentItem, 10);
console.log(sum5);

// In the above function, we:

// Pass in a callback function, which is (total, currentItem) => total * currentItem.

// Initialize total to 1 in the second argument.

// So what .reduce() will do, is it will once again go through every element in arr and apply the callback function to it. It then changes total, without actually changing the array itself. After it’s done, it returns total.

//
//
// Redo initial function with these methods
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumOfTripledEvens2(arr) {
  let sum = 0;

  function isEven(num) {
    return num % 2 === 0;
  }
  const evenNums = arr.filter(isEven);

  function tripleEvens(num) {
    return num * 3;
  }

  const trippledEvens = evenNums.map(tripleEvens);

  sum = trippledEvens.reduce((total, currentItem) => total + currentItem, 5);

  console.log(sum);
}

sumOfTripledEvens2(numbers);

// With inline functions
function sumOfTripledEvens3(arr) {
  let sum = 0;

  const evenNums = arr.filter((num) => {
    return num % 2 === 0;
  });

  const trippledEvens = evenNums.map((num) => {
    return num * 3;
  });

  sum = trippledEvens.reduce((total, currentItem) => total + currentItem);

  console.log(sum);
}

sumOfTripledEvens3(numbers);
