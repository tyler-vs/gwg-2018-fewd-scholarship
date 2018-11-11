// colors.js
//
// Example of using a for...of loop instead of the SetIterator for
// looping over a Set.

// A Set
const colors = new Set(['red', 'orange', 'yellow', 'green', 'blue', 'violet', 'brown', 'black']);

// Using the for...of loop
for (const color of colors) {
  console.log(color);
}