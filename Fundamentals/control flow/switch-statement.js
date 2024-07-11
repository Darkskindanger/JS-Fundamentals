// Best used when we are comparing a variable/value to a multitude of other values (of same type)

const favouriteAnimal = "cow";

switch (favouriteAnimal) {
  case "lion": //We're also able to group different cases together to widen our range of acceptance.
  case "bobcat":
  case "cat": {
    console.log("cats are great");
    break; // Breaks will prevent the rest of the code under the matching case to run
  }
  case "dog": {
    console.log("dogs are kinda loud");
    break;
  }
  case "crocodile":
  case "whale":
  case "swordfish":
  case "shark": {
    console.log("thats an interesting choice");
    break;
  }
  default:
    console.log("i have never heard of that animal");
    break;
}

// The above switch statement does the same as the below if statements

// if (favouriteAnimal === "cat") {
//   console.log("cats are great");
// } else if (favouriteAnimal === "dog") {
//   console.log("dogs are kinda loud");
// } else if (favouriteAnimal === "shark") {
//   console.log("thats an interesting choice");
// } else {
//   console.log("i have never heard of that animal");
// }
