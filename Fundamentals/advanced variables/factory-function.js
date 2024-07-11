// Factory function - Function that creates objects and RETURNS them
//                    (Similar to constructors)
//                    Incredibly useful for re-usability.
//                    code duplication/bugs and provides easy/effienct
//                    creation from a central function)

function personFactory(name) {
  return {
    talk() {
      return `Hello i am ${name}`;
    },
  };
}

const jill = personFactory("Jill");
console.log(jill.talk());

const bill = personFactory("Bill");
console.log(bill.talk());

function createElement(type, text, color) {
  const element = document.createElement(type);
  element.innerText = text;
  element.style.color = color;
  document.body.append(element);
  return {
    element,
    setText(text) {
      element.innerText = text;
    },
    setColor(color) {
      element.style.color = color;
    },
  };
}

const h1 = createElement("h1", "Hey guys!", "brown");
const p = createElement("p", "This is cool", "blue");

h1.setText("Hey Mate");
