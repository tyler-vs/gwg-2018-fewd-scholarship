// coercion.js
//
// Type coercion is not used when values are added to a set

const mixedTypes = new Set().add(2).add('2');

console.log(mixedTypes);
