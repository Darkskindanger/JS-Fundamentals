// This = reference to the object where THIS is used
//        (the object depends on the immediate context)
//        person.name === this.name

const person = {
  name: "Spongebob",
  favFood: "hamburgers",
  sayHello: function () {
    console.log(`Hi! i am ${this.name}`);
  },
  eat: function () {
    console.log(`${this.name} is eating ${this.favFood}`);
  },
};
const person2 = {
  name: "Patrick",
  favFood: "Pizza",
  sayHello: function () {
    console.log(`Hi! i am ${this.name}`);
  },
  eat: function () {
    console.log(`${this.name} is eating ${this.favFood}`);
  },
};
const person3 = {
  name: "Sandy",
  favFood: "Walnuts",
  sayHello: function () {
    console.log(`Hi! i am ${this.name}`);
  },
  eat: function () {
    console.log(`${this.name} is eating ${this.favFood}`);
  },
}; // * The "this" keyword doesnt work with arrow functions

person.sayHello();
person.eat();

person2.sayHello();
person2.eat();

person3.sayHello();
person3.eat();

// New =  Used to create a new object via the constructor function
//        we have initialized
//        const person = new person()
