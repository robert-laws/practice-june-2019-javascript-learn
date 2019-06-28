class Human {
  constructor(species) {
    this.species = species;
  }

  identifySpecies() {
    return `i am ${this.species}`;
  }
}

export class Person extends Human {
  constructor(species, firstName, lastName, age) {
    super(species);
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    Person.count = 1;
  }

  getName() {
    return `${this.firstName} ${this.lastName}`;
  }

  static set count(counter) {
    Person._count = (Person.count || 0) + counter;
  }

  static get count() {
    return Person._count;
  }
}