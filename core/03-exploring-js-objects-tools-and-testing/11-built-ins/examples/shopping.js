// shopping.js
//
// Example of converting a set into an array using the spread operator.

// 1. Create a Set with some items in it.
const shoppingSet = new Set().add('Apples').add('Bananas').add('Beans');

console.log(shoppingSet); // Set { 'Apples', 'Bananas', 'Beans' }
console.log(typeof shoppingSet); // object

// 2. Convert it into an array

const shoppingArray = [...shoppingSet];

console.log(shoppingArray); // [ 'Apples', 'Bananas', 'Beans' ]
console.log(typeof shoppingArray); // object