// Prototypal inheritance =Process of inheritance via object prototypes
//                         Similar to constructors and factory functions
//
//             .Prototype = found on the initial constructor/class
//                          that objects are inheriting from
//
//               __Proto__= Can be found on objects that are from
//                          a parent prototype

// Classes
class Person {
  talk() {
    return "Talking";
  }
}

const me = new Person();
me.talk(); // 'Talking'
const you = new Person();
you.talk(); // 'Talking'

Person.prototype === me.__proto__; //True, me is inheriting from Person.prototype and is given a __proto__ so they are the same thing essentially

// To change the parent prototype
Person.prototype.talk = function () {
  return "New and improved talking";
};

me.talk(); // "New and improved talking"
you.talk(); // 'New and improved talking'

// prototypal inheritance vs adding properties to an instance

// 1. Common practice is to have all the methods (things i do) coded into the parent prototype to be shared by other objects, While having properties (things i have) coded into the constructor functions to be differentiated with every instance

function Person(age, name, gender) {
  this.age = age;
  this.name = name;
  this.gender = gender;
}

Person.prototype.run = function () {
  return "Running";
};
Person.prototype.walk = function () {
  return "walking";
};
Person.prototype.talk = function () {
  return "talking";
};
Person.prototype.smile = function () {
  return "smiling";
};

// Extending behaviour (creating a copy of an existing prototype and adding to it. Allowing all of its instances to inherit a new version of the original prototype)

const they = new Person();

they.talk();

class SuperHuman extends Person() {
  fly() {
    return "Flying";
  }
}

they.fly(); //
they.talk();

const them = new SuperHuman();

them.fly();
them.talk();
