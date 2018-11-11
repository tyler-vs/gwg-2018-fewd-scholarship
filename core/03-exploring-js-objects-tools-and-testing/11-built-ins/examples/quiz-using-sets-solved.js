// quiz-using-sets-solved.js
/*
 * Programming Quiz: Using Sets (3-1)
 *
 * Create a Set object and store it in a variable named `myFavoriteFlavors`. Add the following strings to the set:
 *     - chocolate chip
 *     - cookies and cream
 *     - strawberry
 *     - vanilla
 *
 * Then use the `.delete()` method to remove "strawberry" from the set.
 */


const myFlavors = ['chocolate chip',
'cookies and cream',
'strawberry',
'vanilla'
];

// 1. Create a set and add following values
// ----------------------------------------

const myFavoriteFlavors = new Set();

// Loop through all the flavors in the array
// for(var i = 0; i < myFlavors.length; i++) {
//   // Use the .add method to add items to the set
//   myFavoriteFlavors.add(myFlavors[i]);
// }

myFavoriteFlavors.add(myFlavors[0]).add(myFlavors[1]).add(myFlavors[2]).add(myFlavors[3]);

// View work/debug
console.log(myFavoriteFlavors);


// 2. Use delete to remove 'strawberry'
// ------------------------------------

myFavoriteFlavors.delete('strawberry');

console.log(myFavoriteFlavors);
