// numerals.js
//
// All-in-one examples for using Map.


// 1. Create a Map

const romanNumerals = new Map();

// 2. Add entries to a Map using .set() method
// The Set method can be used to add a key and value pair to a map.
romanNumerals.set(1, 'I');

// See what is returned, a Hash Rocket ("=>")
console.log(romanNumerals); // Map { 1 => 'I' }

// 3. Adding multiple entires to a Map with repeat calls to .set()
// add Roman Numerals 2 - 5.
romanNumerals.set(2, 'II').set(3, 'III').set(4, 'IV').set(5, 'V');
console.log(romanNumerals); // Map { 1 => 'I', 2 => 'II', 3 => 'III', 4 => 'IV', 5 => 'V' }

// Add some more (6 - 9).
romanNumerals.set(6, 'VI').set(7, 'VII').set(8, 'VIII');

// Log what heppens as we use .set to add the Roman Numeral for the number 9.
console.log(romanNumerals.set(9, 'IX'));  // Map {
  // 1 => 'I',
  // 2 => 'II',
  // 3 => 'III',
  // 4 => 'IV',
  // 5 => 'V',
  // 6 => 'VI',
  // 7 => 'VII',
  // 8 => 'VIII',
  // 9 => 'IX' }


// 4. Look up a value in a Map based on a key (like a dinctionary)
// by using the .get() method
console.log(romanNumerals.get(4));  // IV
console.log(romanNumerals.get(5));  // V
console.log(romanNumerals.get(6));  // VI

// But we have yet to add a Roman Numeral for 10.
console.log(romanNumerals.get(10)); // undefined


// 5. Use the .has() method to check if a particular key is in the map. Returns a boolean true or false.
console.log(romanNumerals.has(9)); // true
console.log(romanNumerals.has(10)); // false
console.log(romanNumerals.has(11)); // false


// 6. A map can be created by using a nested array as a parameter
const nestedArrayOfHeroes = [
  ['Bruce Wayne', 'Batman'],
  ['Barry Allen', 'The Flash'],
  ['Oliver Jonas Queen', 'Green Arrow'],
  ['Arthur Curry, Orin', 'Aquaman'],
  ['Peter Parker', 'Spiderman']
];

const heroes = new Map(nestedArrayOfHeroes);

console.log(heroes);  // Map {
  // 'Bruce Wayne' => 'Batman',
  // 'Barry Allen' => 'The Flash',
  // 'Oliver Jonas Queen' => 'Green Arrow',
  // 'Arthur Curry, Orin' => 'Aquaman',
  // 'Peter Parker' => 'Spiderman' }


// 7. Find the number of key and value pairs in a map using the .size property.
console.log(heroes.size); // 5


// 8. Removing entries (or the key and value pairs) from a map using the .delete() method.
// Using the .delete method, a boolean value of true is returned for successful deletion
// while false is returned if the entry was not found in the map

// Remove
if (heroes.has('Oliver Jonas Queen')) {
  console.log(heroes.delete('Oliver Jonas Queen')); // true
}
if (heroes.has('Peter Parker')) {
  console.log(heroes.delete('Peter Parker')); // true

  // See what happens when delete something that does not exist.
  console.log(heroes.delete('Peter Parker')); // false
}

// Check that map does not have 'Clark Kent' and add/set if that is the case.
if (!heroes.has('Clark Kent')) {
  heroes.set('Clark Kent', 'Superman'); //
}

// Inform of the changes to the map.
console.log('Remove Marvel heroes from the list and add Superman from DC heroes:\n');
// Log
console.log(heroes);


// 9. Remove all the entries from a map using the .clear method.
console.log(heroes.clear());  // undefined
console.log('Heroes map after using the clear method.');
console.log(heroes);  // Map {}

// Returns an empty map.

// 10. Converting Maps into a nested array of key-value pairs.
console.log('Converting a map into a nested array examples.\n');
// 10.1 Using the spread operator
console.log('Using the spread operator and array literal constructor:');
console.log([...romanNumerals]);  // [ [ 1, 'I' ],
  // [ 2, 'II' ],
  // [ 3, 'III' ],
  // [ 4, 'IV' ],
  // [ 5, 'V' ],
  // [ 6, 'VI' ],
  // [ 7, 'VII' ],
  // [ 8, 'VIII' ],
  // [ 9, 'IX' ] ]

// 10.2 Using the Array.from() method
console.log('Using Array.from method:');
console.log(Array.from(romanNumerals)); // [ [ 1, 'I' ],
  // [ 2, 'II' ],
  // [ 3, 'III' ],
  // [ 4, 'IV' ],
  // [ 5, 'V' ],
  // [ 6, 'VI' ],
  // [ 7, 'VII' ],
  // [ 8, 'VIII' ],
  // [ 9, 'IX' ] ]



