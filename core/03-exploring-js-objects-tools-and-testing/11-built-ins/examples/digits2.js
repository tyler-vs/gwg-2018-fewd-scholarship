// digits2.js
//
// example of using the array's default iterator to step
// through each value (array member) of the array.

const digits = [0,1,2,3,4,5,6,7,8,9];
const arrayIterator = digits[Symbol.iterator]();

console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next()); // 9
console.log(arrayIterator.next());
console.log(arrayIterator.next());
