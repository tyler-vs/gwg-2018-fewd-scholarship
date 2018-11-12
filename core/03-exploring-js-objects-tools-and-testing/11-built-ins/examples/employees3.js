// employees3.js
//
// Example of modifying maps. Using the Map's .delete() method to remove
// a key-value pair from a Map.

const employees = new Map();

console.log(employees); // Map {}

// Use .add() to add key-values to a Map.

// Add James
employees.set('james.parkes@udacity.com', {
  firstName: 'James',
  lastName: 'Parkes',
  role: 'Content Developer',
});

// Add Julia
employees.set('julia@udacity.com', {
  firstName: 'Julia',
  lastName: 'Van Cleve',
  role: 'Content Developer',
});

// Add Richard
employees.set('richard@udacity.com', {
  firstName: 'Richard',
  lastName: 'Kalehoff',
  role: 'Content Developer',
});

// Remove some employees using the .delete() method
employees.delete('julia@udacity.com');
employees.delete('richard@udacity.com');

// Log the employees
console.log(employees);