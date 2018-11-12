// garbage.js
//
// Example of using a WeakSet and garbage collection.

// 1. Create an array with values.
let arr = [1,2,3];

// 2. Add the array as an item to a set
const strong = new Set().add(arr);

// 3. Remove the original array
arr = null; // Remove reference to the original array

// 4. Log
console.log(strong); // Set { [ 1, 2, 3 ] }