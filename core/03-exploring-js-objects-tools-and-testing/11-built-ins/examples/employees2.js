// employees2.js
//
// Example of modifying maps. Using the Map's .set() method

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


// Log the employees

console.log(employees); // Map {
  // 'james.parkes@udacity.com' => { firstName: 'James',
  //   lastName: 'Parkes',
  //   role: 'Content Developer' },
  // 'julia@udacity.com' => { firstName: 'Julia',
  //   lastName: 'Van Cleve',
  //   role: 'Content Developer' },
  // 'richard@udacity.com' => { firstName: 'Richard',
  //   lastName: 'Kalehoff',
  //   role: 'Content Developer' } }