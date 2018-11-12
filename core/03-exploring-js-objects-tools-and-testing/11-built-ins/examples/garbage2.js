// garbage2.js
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

// Since the array still exists inside of the set (i.e. strong)
// we can get the orignal value of the array back even after Step 3 from above.

// 5. Get our original array back
arr = [...strong][0];

console.log(arr);