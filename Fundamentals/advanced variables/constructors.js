// Constructor = Similar to factory functions,
//               We are creating a  blueprint to create objects
//               Difference being, 'new' auto creates an object ('this')
//               and returns the object filled with our intended parameters
//
//               special method for defining the
//               properties and methods of objects.
//
//               *Useful for creating a large amount of objects
//               and creating based off of user input

function Person(name) {
  this.name = name;
}

const hailey = new Person("hailey");

function SuperElement(type, content) {
  this.el = document.createElement(type);
  this.el.innerText = content;
  document.body.append(this.el);
  this.el.addEventListener("click", () => {
    console.log(this.el);
  });
}

const h1 = SuperElement("h1", "Hello");

const array = ["a", "b", "c"];
const myElements = array.map((item) => {
  return new SuperElement("p", item);
});

console.log("----------practice below----------");

function Car(make, model, year, color) {
  //constructor function start with capital letter by convention
  (this.make = make),
    (this.model = model),
    (this.year = year),
    (this.color = color);
  this.drive = function () {
    console.log(`You drive the ${this.model}`);
  };
}

const car1 = new Car("Mclaren", "765LT", 2024, "Grey");
const car2 = new Car("Ferrari", "488 Pista", 2024, "Black");
const car3 = new Car("Porsche", "918 Spyder", 2024, "Navy Blue");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);
console.log("-------------------");
console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);
console.log("-------------------");
console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
console.log(car3.color);
console.log("-------------------");
car1.drive();
car2.drive();
car3.drive();
