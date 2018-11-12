// roster.js
//
// Example of creating a WeakSet.

// Students objects
let student1 = {
  name: 'James',
  age: 26,
  gender: 'male'
};
let student2 = {
  name: 'Julia',
  age: 27,
  gender: 'female'
};
let student3 = {
  name: 'Richard',
  age: 31,
  gender: 'male'
};

// Creating a WeakSet
const roster = new WeakSet([student1, student2, student3]);

console.log(roster); // WeakSet {{…}, {…}, {…}}
