// months4.js
//
// Using the SetIterator method

// const months = new Set(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
const months = new Set(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);

console.log(months);

const iterator = months.values();

// Invoke iterator.next();
// iterator.next();

console.log(iterator.next()); // { value: 'January', done: false }
console.log(iterator.next()); // { value: 'February', done: false }
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next()); //
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());