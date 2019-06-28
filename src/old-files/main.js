// javascript needed to get bootstrap initialized correctly
window.exports = {};

// custom js
const name = "Bob Cobb";

// alert(`hello, ${name}, welcome to the website!`);

names = ['Bob', 'Hal', 'Mel', 'Tad', 'Jim'];

const freezeTemp = 32;
coldEnough = deg => { return freezeTemp <= deg ? `${deg} is above freezing` : `${deg} is below freezing` }

console.log(coldEnough(25));

names.forEach(name => {
  console.log(`hello, ${name}.`)
});

let items = new Map();
items.set('author', {'firstName': 'Bob', 'lastName': 'Cobb'})

console.log(items);

var books = new Map();
books.set(1, 'Book of Things');
books.set(2, 'Fun Times');
books.set(3, 'PLaces to Visit');

console.log(books.size);

console.log(books.has('Fun Times'))

let numbers = [2, 4, 6, 8, 10];

for (let book of books.keys()) {
  console.log(book)
}

for (let book of books.values()) {
  console.log(book)
}

function greeting(name = 'unknown person', date = new Date()) {
  let myDate = moment(date).format("dddd");
  return `hello, ${name}, today is ${myDate}`;
}

console.log(greeting('Hal', Date.parse('19 Dec 1995')));
console.log(greeting('Jim'));
console.log(greeting());

// Object literals
let dog = {
  bark(times) {
    console.log('bark '.repeat(times));      
  },
  eat(times) {
    console.log('eat '.repeat(times));        
  }
}

dog.bark(4);

getList = items => items.map(item => `my ${item}`)

myList = getList(['pen', 'hat', 'pencil', 'scarf']);

console.log(...myList);

let person = {
  firstName: 'Bob',
  actions: ['eat', 'sleep', 'work'],
  printActions() {
    return this.actions.map(action => `${this.firstName} likes to ${action}`)
  }
}

let personActions = person.printActions();
for (action of personActions) {
  console.log(action);
}

// Destructing
let [first, , , last] = ['Boston', 'Chicago', 'Houston', 'Los Angeles'];

let lunch = {
  title: 'Ham Sandwich',
  price: 10,
  description: 'Tasty lunch meal',
  ingredients: ['bread', 'ham', 'mustard']
}

function getLunch({title, price}) {
  return `Enjoy a ${title} for the price of $${price}.`;
}

console.log(getLunch(lunch));

let vacation = {
  destination: 'Mexico',
  travelers: 4,
  activity: 'hiking',
  cost: 1200
}

function vacationMarketing({destination, activity}) {
  return `Visit ${destination} and have fun ${activity}.`;
}

console.log(vacationMarketing(vacation));

// Generators
function* director() {
  yield "Three";
  yield "Two";
  yield "One";
  yield "Action!";
}

let myAction = director();

console.log(myAction.next().value);
console.log(myAction.next().value);
console.log(myAction.next().value);
console.log(myAction.next().value);
console.log(myAction.next().value);

function* eachItem(array) {
  for(let i = 0; i < array.length; i++) {
    yield array[i];
  }
}

let letters = eachItem(["a", "b", "c", "d", "f", "g"]);

// let abcs = setInterval(function() {
//   let letter = letters.next();
//   if(letter.done) {
//     clearInterval(abcs);
//     console.log("know my ABCs");
//   } else {
//     console.log(letter);
//   }
// }, 500);

// Symbols
// new primitive type in es6, used as unique IDs, define custom iteration behavior
const id = Symbol();
const courseInfo = {
  title: "ES6",
  topics: ["babel", "syntax", "functions", "classes"],
  id: "js-course"
}

courseInfo[id] = 2342;
console.log(courseInfo)

// using symbols with iterators
// Iterabale -> JS objects define their own iteration behavior
// Iterator -> a standard way to produce a sequence of values

// let myTitle = "ES6";
// console.log(typeof myTitle[Symbol.iterator]);

// let iterateIt = myTitle[Symbol.iterator]();
// console.log(iterateIt.next());
// console.log(iterateIt.next());
// console.log(iterateIt.next());
// console.log(iterateIt.next());

// function tableReady(array) {
//   let nextIndex = 0;
//   return {
//     next() {
//       if(nextIndex < array.length) {
//         return { value: array.shift(), done: false }
//       } else {
//         return { done: true }
//       }
//     }
//   }
// }

// const waitingList = ['Bob', 'Lou', 'Kal', 'Mel'];
// const iterateList = tableReady(waitingList);

// console.log(`${iterateList.next().value}, your table is ready.`)
// console.log(`${iterateList.next().value}, your table is ready.`)
// console.log(`${iterateList.next().value}, your table is ready.`)
// console.log(`${iterateList.next().value}, your table is ready.`)
// console.log(`Is this finished? ${iterateList.next().done}.`)

// // Promises
// const delay = seconds => {
//   return new Promise((resolve, reject) => {
//     if(typeof seconds != 'number') {
//       reject(new Error('Argument seconds must be a number'))
//     } else {
//       setTimeout(
//         () => resolve(`${seconds} second delay is up`),
//         seconds * 1000)
//     }
//   })
// }

// console.log("zero seconds");
// delay("10 Mins")
//   .then(msg => msg.toUpperCase())
//   .then(msg => `hello, ${msg}!!`)
//   .then(msg => console.log(msg));
// delay(2)
//   .then(msg => msg.toUpperCase())
//   .then(msg => `hello, ${msg}!!`)
//   .then(msg => console.log(msg));

spaceFolks = () => fetch('http://api.open-notify.org/astros.json')
  .then(res => res.json())
  .then(json => {
    return json.people;
  })

let myFolks = spaceFolks().then(data => data);



let firstPromise = () => {
  return new Promise((resolve, reject) => {
    resolve("hello")
    console.log("resolve finished")
  })
}

let secondPromise = () => {
  return firstPromise().then(response => {
    // document.querySelector("#myText").innerHTML = `<p>${response}</p>`;
    return response
  })
}

console.log(secondPromise());

// const spaceNames = () => spaceFolks().then(json => json.people).then(people => people.map(p => p.name)).then(names => names.join(", "))

// const spacePeople = () => {
//   return new Promise((resolves, rejects) => {
//     const api = "http://api.open-notify.org/astros.json";
//     const request = new XMLHttpRequest();
//     request.open('GET', api);
//     request.onload = () => {
//       if(request.status === 200) {
//         resolves(JSON.parse(request.response))
//       } else {
//         rejects(Error(request.statusText))
//       }
//     }
//     request.onerror = error => rejects(error);
//     request.send();
//   })
// }

// spacePeople().then(
//   spaceData => console.log(spaceData),
//   error => console.error(
//     new Error('Cannot load space people')
//   )
// )

// const newDelay = seconds => {
//   return new Promise(
//     resolve => setTimeout(resolve, seconds * 1000)
//   )
// }

// const countToFive = async() => {
//   console.log('zero...');
//   await newDelay(1);
//   console.log('one second')
//   await newDelay(3);
//   console.log('three second')
// }

// countToFive();

// let fList = [];

// const gitHubRequest = async(loginName) => {
//   try {
//     let response = await fetch(`https://api.github.com/users/${loginName}/followers`)
//     let json = await response.json();
//     fList = json.map(user => user.login);
//     debugger;
//   } catch(e) {
//     console.log("Data didn't load", e);
//   }
// }

// gitHubRequest('eveporcello');

// console.log(fList);

// Classes
class Vehicle {
  constructor(description, wheels) {
    this.description = description;
    this._wheels = wheels;
  }

  get wheels() {
    return this._wheels
  }

  set wheels(newWheels) {
    this._wheels = newWheels;
  }

  describeYourself() {
    console.log(`I am a ${this.description} with ${this.wheels} wheels.`)
  }
}

let myVan = new Vehicle("a nice van", 4);

myVan.describeYourself();

myVan.wheels = 6;

myVan.describeYourself();

class SemiTruck extends Vehicle {
  constructor(description, wheels) {
    super(description, wheels);
  }
}

var mySemi = new SemiTruck("semi truck", 18);
mySemi.describeYourself();

let attendance = {
  _list: [],
  set addName(name) {
    this._list.push(name);
  },
  get list() {
    return this._list.join(", ")
  }
}

attendance.addName = "Bob";
attendance.addName = "Kal";
attendance.addName = "Mel";
console.log(attendance.list);

class Hike {
  constructor(distance, pace) {
    this.distance = distance;
    this.pace = pace;
  }

  get lengthInHours() {
    return `${this.calculateLength()} hours.`
  }
  calculateLength() {
    return this.distance / this.pace;
  }
}

const myHike = new Hike(10, 3);
console.log(myHike.lengthInHours);