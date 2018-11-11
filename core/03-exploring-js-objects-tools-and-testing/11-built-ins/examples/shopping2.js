// shopping2.js
//
// Example of converting a set into an array using the Array.from() method.
// An alternative appraoch from having to use the spread operator to accomplish
// the exact same thing.

// 1. Create a Set with some items in it.
const shoppingSet = new Set().add('Apples').add('Bananas').add('Beans');

console.log(shoppingSet); // Set { 'Apples', 'Bananas', 'Beans' }
console.log(typeof shoppingSet); // object

// 2. Convert it into an array

const shoppingArray = Array.from(shoppingSet);

console.log(shoppingArray); // [ 'Apples', 'Bananas', 'Beans' ]
console.log(typeof shoppingArray); // object