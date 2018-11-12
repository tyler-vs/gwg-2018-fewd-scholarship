// members2.js
//
// Example for using .get() method with a Map to retrieve values form a Map.

// 1. Create a Map
const members = new Map();

// 2. Use .set() method to add items to the Map
members.set('Evelyn', 75.68);
members.set('Liam', 20.16);
members.set('Sophia', 0);
members.set('Marcus', 10.25);

// 3. Test and log, use .get() to retreive item values.
console.log(typeof members);  // object
console.log(members.get('Evelyn')); // 75.68
console.log(members.get('Xavier')); // undefined
