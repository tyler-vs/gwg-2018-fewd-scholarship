// digits.js

const digits = [0,1,2,3,4,5,6,7,8,9];
const arrayIterator = digits[Symbol.iterator]();

console.log(`the digits variable is an 'array' data type, with the length of ${digits.length}.`);
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
console.log(arrayIterator.next());

for (const digit of digits) {
  console.log(digit);
}