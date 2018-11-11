// duplicates.js
//
// Example of an appraoch to copy an array with duplicate values removed

const duplicate = [3,1,4,1,1,5,6,3,4,5,6];

const nonDuplicate = [... new Set(duplicate)];

console.log(nonDuplicate);  // [ 3, 1, 4, 5, 6 ]