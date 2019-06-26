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

// Destructing Arrays

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