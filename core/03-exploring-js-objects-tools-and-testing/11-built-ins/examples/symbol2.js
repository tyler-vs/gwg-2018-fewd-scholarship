// symbol2.js
//
// Have two variables point to 'shared symbol' in memory.

const A = Symbol.for('shared symbol.');
const B = Symbol.for('shared symbol.');

console.log(A);
console.log(B);