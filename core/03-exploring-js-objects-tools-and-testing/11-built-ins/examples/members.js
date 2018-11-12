// members.js
//
// Example for using .has() method with a Map

const members = new Map();

members.set('Evelyn', 75.68);
members.set('Liam', 20.16);
members.set('Sophia', 0);
members.set('Marcus', 10.25);

// To check if a key-value exists on a Map, pass in the key using
// the .has method
console.log(members.has('Xavier')); // false
console.log(members.has('Marcus')); // true