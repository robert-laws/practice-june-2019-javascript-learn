// Learning - JS

// IIFE
(function() {
  console.log('hello');
})();

const myObj = {};

const myFunction = function() {
  return 5 + 3;
};

// console.log(myFunction());
// console.log(myFunction);

function doExpression(func) {
  return func;
}

// console.log(doExpression(myFunction()));

const myFunc = {
  addEight: function(number) {
    return 8 + number;
  },
  myNumber: 40
}

// console.log(myFunc.myNumber);

myFunc.myNumber = 100;

// console.log(myFunc.addEight(10));

const meeting = function(firstPerson) {
  return function(secondPerson) {
    return secondPerson + " is pleased to meet " + firstPerson;
  }
}

const doMeeting = meeting("Bob Cobb");

// console.log(doMeeting("Visitor"));

const names = ["Bob", "Mel", "Jim", "Kal", "Vin"];
const numbers = [2, 4, 6, 8];

// names.forEach(function(value, index) {
//   console.log(`${index} - ${value}`);
// })

// console.log(names.sort())

// console.log(names.reduce(function(total, value) {
//   return total + ", " + value
// }, "hello"))

// console.log(numbers.reduce(function(total, value) {
//   return total + value
// }, 1))

// Classes

class Data {
  constructor(dataContent) {
    this.dataContent = dataContent
  }

  getData() {
    return this.dataContent;
  }
}

class Person {
  constructor(first_name, last_name) {
    this.first_name = first_name;
    this.last_name = last_name;
  }

  fullName() {
    return `${this.first_name} ${this.last_name}`;
  }

  greeting() {
    return `hello from ${this.first_name} ${this.last_name}!`;
  }

  static whoami() {
    return "Person class";
  }
}

let b = new Person("Bob", "Cobb");
// console.log(b.greeting());

// console.log(Person.whoami());

class Leader extends Person {
  adminLevel(name) {
    return `${name} is in change`;
  }
}

const hal = new Leader("Hal", "Hope");
// console.log(hal.fullName())
// console.log(hal.adminLevel(hal.fullName()));

const myData = [
  {name: "Bob", age: 34},
  {name: "Hal", age: 52},
  {name: "Jim", age: 38},
  {name: "Kal", age: 23}
]

let d = new Data(myData);

// console.log(d.getData());