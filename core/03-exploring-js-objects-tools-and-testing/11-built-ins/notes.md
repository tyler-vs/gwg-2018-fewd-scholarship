# Lesson 11 - Built-ins

Verbatim content in [copies](./copies/) directory.
Build-upon examples found in the [examples](./examples/) directory.

<!-- MarkdownTOC -->

- New built-ins in es6
- Symbols intro
- Symbols
  - Creating a symbol
  - comparing two symbols with the same description
- Iteration and iterable protocols
  - the __iterable__ protocol
  - how it works
  - the __iterator__ protocol
- Sets
  - Create a set
- Modifying sets
- Working with sets
  - Checking the length
  - Checking if an item exists
  - Retrieving all values
    - Using the `.add()` method when adding items to a set.
    - Type coercion in sets
- Sets and iterators
  - Using the `SetIterator`
  - Using a `for...of` loop
- Quiz: using sets
  - Problem
  - Solution
  - EXTRA: Converting a set into an array
    - Approach #1: Using the spread operator
    - Approach #2: Using the `Array.from()` method to do the same thing
  - EXTRA: Copy an array with duplicate values removed
- WeakSets
  - Garbage Collection
- Quiz: working with WeakSets
- Maps
- Creating and modifying maps
  - Create a Map
  - Modifying Maps
- Working with Maps
- Looping through maps
- WeakMaps
- Promises intro
- Promises
- More promises
- Proxies intro
- Proxies
- Proxies vs es5 getters/setters
- Generators
- Generators and iterators
- Sending data into/out of a generator
- Lesson 3 summary
- Further Reading

<!-- /MarkdownTOC -->


## New built-ins in es6

New built-ins available to the javascript language, that make it easier to accomplish tasks in javascript.

- sets
- maps
- promises

In this lesson, we see how these new javascript built-ins for ES6 are structured, how they work and when to best use them.


## Symbols intro

A __symbol__ is a unique identifier and immutable (primitive like a String, Number data type) data type, most often used to uniquely identify properties within an object.

A symbol is a new data type in ES6 representing unique tokens.

> "I recommend using symbols whenever you want to have a unique identifier that you do not want to inadvertently confused with some other identifier"
> ~ Ethan Brown, Learning JavaScript, third ed.

## Symbols 

### Creating a symbol

To create a symbol, use the `Symbol()` constructor with an optional string as it's description.

```js
// Create a symbol
const sym1 = Symbol('apple');
console.log(symb1); // Symbol(apple);
```

### comparing two symbols with the same description

```js
const sym2 = Symbol('Banana');
const sym3 = Symbol('Banana');
console.log(sym2 === sym3); // false

```

As seen in above code snippet, `false` is produced because the symbol description is used only to describe, not as apart of the symbol itself.

```js
// bowl.js

// An object with fruits.
const bowl = {
  'apple': {
    color: 'red',
    weight: 136.078
  },
  'banana': {
    color: 'yellow',
    weight: 183.15
  },
  'orange': {
    color: 'orange',
    weight: 170.097
  },
};

// Adding another banana to bowl will simply overwrite the
// first one that already exists within the 'bowl' object.
bowl.banana = {
  color: 'yellow',
  weight: 176.845,
};

console.log(bowl);

// returns:
// { apple: { color: 'red', weight: 136.078 },
//   banana: { color: 'yellow', weight: 176.845 },
//   orange: { color: 'orange', weight: 170.097 } }

// To fix this problem we can use symbols
const newBowl = {
  [Symbol('apple')]: {
    color: 'red',
    weight: 136.078
  },
  [Symbol('banana')]: {
    color: 'yellow',
    weight: 183.15
  },
  [Symbol('orange')]: {
    color: 'orange',
    weight: 170.097
  },
  [Symbol('banana')]: {
    color: 'yellow',
    weight: 176.845,
  },
};

console.log(newBowl);

// returns:
// { [Symbol(apple)]: { color: 'red', weight: 136.078 },
// [Symbol(banana)]: { color: 'yellow', weight: 183.15 },
// [Symbol(orange)]: { color: 'orange', weight: 170.097 },
// [Symbol(banana)]: { color: 'yellow', weight: 176.845 } }
```

Overall is seems that the common use-case for using symbols is for use as object property keys. Using symbols as object property keys can allow JavaScript objects to be used as [hashmaps](https://en.wikipedia.org/wiki/Hash_table) (an associative array in PHP or dictionary in Python) allows getting/setting properties using bracket notation.

```js
// hashmaps.js

const data = [];

data['name'] = 'Ted Mosby';
data['nickname'] = 'Teddy Westside';
data['city'] = 'New York';

```

Using the bracket notation, we can also use a symbol as a property key.

Advantages for doing so are:

1. You can be sure that a symbol-based keys will never clash, unlike string keys, which might conflict with keys for existing properties or methods of an object. 
2. They will not be enumerated in `for... in` loops and are ignored bu functions such as `Object.keys`, `Object.getOwnPropertyNames()` and `JSON.stringify()` making them ideal for properties that you do not want to be included when serializing an object.



## Iteration and iterable protocols

two new protocols in ES6:

- the __iterable__ protocol
- the __iterator__ protocol

the protocols actually are not built-ins, but they will help you in understanding the new concepts of iteration in es6, as well as show you a use case for _symbols_.

### the __iterable__ protocol

the __iterable__ protocol is used for defining and customizing the iteration behavior of objects. Which equates to meaning, that in ES6, your javascript has the flexibility to specify a way for iterating through values in an object.

```js
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
console.log(arrayIterator.next());

```

Any object that is iterable can use the new `for...of` loop. Sets and Maps which are other examples of built-in iterables.

### how it works

In order for an object to be iterable, it must implement the __iterable interface__. _Interface_, basically means that in order for an object to be iterable, it must contain a default iterator method. This _iterator_ method will define how the objects should be iterated. The __iterator method__ is available via the constant `[Symbo.iterator]`, is a zero arguments function that returns an iterator object. An iterator object is an object that conforms to the iterator protocol.

### the __iterator__ protocol

the __iterator__ protocol is used to define a standard way that an object producing a sequence of values. Which equates to meaning that in newer ES6, you are allowed to have a process for defining how an object will iterate. This is done through implementing the `.next()` method.

An object becomes an iterator when it implements the `.next()` method. The `.next()` method is a zero arguments function that returns an object with two properties:

1. `value`, the data representing the next value in a sequence of values within the object
2. `done`, the boolean representing if the iterator is _done_ going through the sequence of values.
  + if `done` is `true`, then the iterator has reached the end of its sequence of values
  + if `done` is `false`, then the iterator is able to produce another value in it's sequence of values.


## Sets

A set, in Mathematics, is a collection of distinct items, each member of a set is unique and appears only _once_. For example, `{2, 3, 4, 5}` is a set while `{1, 1, 2, 4}` is _not_ a set because it contains _duplicate entires_.

In JavaScript, we can already represent something similar to a set using an array/

```

const nums = [2, 3, 4, 5];

```

However, _arrays do not enforce items to be unique_. We can append an item to an array, say `2`, then an array would be `[2, 3, 4, 5, 2]` which does not qualify as our definition of what a `set`is.

The biggest difference between a set and an array are:

- Sets are not indexed-based, you do not refer to items in a set based on their position in the set
- items in an Set cannot be accessed individually

Basically, a Set is an object that lets you store unique items. We can add items to a set, remove items and loop over a set. Items or members of a set can be either primitive values or objects.

### Create a set

Create an empty set called `gamed` with no items.

```js
// games.js

const games = new Set();
console.log(games); // Set {}

```

To add multiple values to a set when creating it, an array can be used.

```js

const numbers = [2,2,2,2,3,7,7,7,7,8,8,8,8,8];
const setNumbers = new Set(numbers);

console.log(setNumbers); // Set({2,3,7,8})

```


## Modifying sets

- Adding using `.add()`
- Removing using `.delete()`
- Looping over (Reading set values)

If attempting to `.add()` a duplicate item to a set, you will not receive an error, but the item will not be added to the Set. Also, if attempting to use `.delete()` on an item that is not in a Set, you will not receive an error, and the Set will remain unchanged.

The `.add` returns the Set if an item is successfully added. While `.delete()` will return a boolean depending on a successful deletion.

Use `.clear()` to remove all the items of a set.

## Working with sets

Some things we can do while working with Sets:

- Checking the length
- Checking if an item exists
- Retrieving all values

### Checking the length

Using `.size`. Sets cannot be accessed by their index like an arry, so you use the `.size` property instead of the `.length` property to get the size of a Set.

```js
// months.js

const months = new Set(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);

console.log(months.size);

```

### Checking if an item exists

Using the `.has()` method. Will return a boolean, either `true` or `false`.

```js
// months2.js
//
// Checking if an item exists using .has()

const months = new Set(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);

// Check if we have all of the holiday months for the holiday season.
if (months.has('Oct') && months.has('Nov') && months.has('Dec')) {
  console.log('Ready for the Holiday season!');
} else {
  console.log('Not ready for the Holiday season!');
}


```

### Retrieving all values

We can use the `.values()` method to return the values in a Set. The return value of `.values()` method is a `SetIterator` object.

```js
// months3.js
//
// Retrieving all values from a Set using the .values() method

const months = new Set(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);

console.log(months.values());

// Returns this:
// [Set Iterator] {
// 'Jan',
// 'Feb',
// 'Mar',
// 'Apr',
// 'May',
// 'Jun',
// 'Jul',
// 'Aug',
// 'Sep',
// 'Oct',
// 'Nov',
// 'Dec' }

```

__Pro-tip:__ The `.keys()` method will behave the exact same way as the `.values()` method by returning the values of a Set within a new Iterator Object. The `.keys()` method is an alias for the `.values()` method for similarity with maps. `.keys` will be seen again later during the Maps section.

#### Using the `.add()` method when adding items to a set.

```js
// words.js
//
// Exploring mthods used with Sets

const words = new Set().add('the').add('quick').add('brown').add('fox').add('jumped').add('over').add('the').add('lazy').add('dog');

console.log(words); // Set { 'the', 'quick', 'brown', 'fox', 'jumped', 'over', 'lazy', 'dog' }
```

#### Type coercion in sets

```js
// coercion.js
//
// Type coercion is not used when values are added to a set

const mixedTypes = new Set().add(2).add('2');

console.log(mixedTypes);

```

## Sets and iterators

Looping over sets. Recalling previous part of the lesson on the new _iterable_ and _iterator_ protocols in ES6, remember that Sets are build-in iterables, which means two things in terms of looping:

1. you can use the Set's default iterator to step through each item in a Set, one by one
2. You can use the new `for...of` loop to loop through each item in a Set.

### Using the `SetIterator`

Because the `.values()` method returns a new iterator object (called `SetIterator`), we can store that iterator object in a variable and loop through each item in the Set using `.next()`.

```js
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
```

### Using a `for...of` loop

An easier method to loop through the items in a Set is the `for...of` loop.

```js
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
```

## Quiz: using sets

### Problem

```js
// quiz-using-sets.js
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

```

### Solution

```js
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

```

### EXTRA: Converting a set into an array

A set can be converted into an array by placing a set, along with the __spread operator__ (`...`) directly inside an array literal.

#### Approach #1: Using the spread operator

```js
// shopping.js
//
// Example of converting a set into an array using the spread operator.

// 1. Create a Set with some items in it.
const shoppingSet = new Set().add('Apples').add('Bananas').add('Beans');

console.log(shoppingSet); // Set { 'Apples', 'Bananas', 'Beans' }
console.log(typeof shoppingSet); // object

// 2. Convert it into an array

const shoppingArray = [...shoppingSet];

console.log(shoppingArray); // [ 'Apples', 'Bananas', 'Beans' ]
console.log(typeof shoppingArray); // object
```

#### Approach #2: Using the `Array.from()` method to do the same thing

```js
// shopping2.js
//
// Example of converting a set into an array using the Array.from() method.
// An alternative appraoch from having to use the spread operator to accomplish
// the exact same thing.

// 1. Create a Set with some items in it.
const shoppingSet = new Set().add('Apples').add('Bananas').add('Beans');

console.log(shoppingSet); // Set { 'Apples', 'Bananas', 'Beans' }
console.log(typeof shoppingSet); // object

// 2. Convert it into an array

const shoppingArray = Array.from(shoppingSet);

console.log(shoppingArray); // [ 'Apples', 'Bananas', 'Beans' ]
console.log(typeof shoppingArray); // object
```
### EXTRA: Copy an array with duplicate values removed

Involves using the spread operator and the new Set constructor function.

```js
// duplicates.js
//
// Example of an appraoch to copy an array with duplicate values removed

const duplicate = [3,1,4,1,1,5,6,3,4,5,6];

const nonDuplicate = [... new Set(duplicate)];

console.log(nonDuplicate);  // [ 3, 1, 4, 5, 6 ]
```

## WeakSets

A WeakSet is like a normal Set with a few key differences: 

1. a WeakSet can only contain objects
2. a WeakSet is not iterable which means it cannot be looped over
3. a WeakSet does not have a `.clear()` method

Creating a WeakSet is similar to creating a Set but we use the `WeakSet` constructor.

```js
// roster.js
//
// Example of creating a WeakSet.

// Students objects
let student1 = {
  name: 'James',
  age: 26,
  gender: 'male'
};
let student2 = {
  name: 'Julia',
  age: 27,
  gender: 'female'
};
let student3 = {
  name: 'Richard',
  age: 31,
  gender: 'male'
};

// Creating a WeakSet
const roster = new WeakSet([student1, student2, student3]);

console.log(roster); // WeakSet {{…}, {…}, {…}}

```

Since WeakSets can only contain objects, when adding a primitive value type, following the above example, `roster.add('Amanda');` will cause an error. 

An updated version of our example:

```js
// roster2.js
//
// Example of creating a WeakSet.

// Students objects
let student1 = {
  name: 'James',
  age: 26,
  gender: 'male'
};
let student2 = {
  name: 'Julia',
  age: 27,
  gender: 'female'
};
let student3 = {
  name: 'Richard',
  age: 31,
  gender: 'male'
};

// Creating a WeakSet
const roster = new WeakSet([student1, student2, student3]);

console.log(roster); // WeakSet {{…}, {…}, {…}}

// Attempting to add a primitive data type to the WeakSet
roster.add('Amanda'); // Uncaught TypeError: Invalid value used in weak set


```

### Garbage Collection

In JavaScript, memory is allocated when new values are created and is 'automatically' freed up when those values are no longer needed. This process of feeding up memory after it is no longer needed is known as __garbage collection__.

WeakSets take advantage of this by exclusively working with objects. If you set an object to `null`, then you are essentially deleting the object. And when JavaScript's garbage collector runs, the memory that object previously occupied will be freed up to be used later in your program. Review this example:

```js
// garbage.js
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
```
In above example we setup our illustration by adding an array as an item to a Set. Then we remove the reference to the original arr that was added to the Set. Continuing with our example:

```js
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
```


## Quiz: working with WeakSets

__Problem:__

```js
/*
 * Programming Quiz: Using Sets (3-2)
 *
 * Create the following variables:
 *     - uniqueFlavors and set it to a new WeakSet object
 *     - flavor1 and set it equal to `{ flavor: 'chocolate' }`
 *     - flavor2 and set it equal to an object with property 'flavor' and value of your choice!
 *
 * Use the `.add()` method to add the objects `flavor1` and `flavor2` to `uniqueFlavors`
 * Use the `.add()` method to add the `flavor1` object (again!) to the `uniqueFlavors` set
 */

```

__Solution:__

```js
/*
 * Programming Quiz: Using Sets (3-2)
 *
 * Create the following variables:
 *     - uniqueFlavors and set it to a new WeakSet object
 *     - flavor1 and set it equal to `{ flavor: 'chocolate' }`
 *     - flavor2 and set it equal to an object with property 'flavor' and value of your choice!
 *
 * Use the `.add()` method to add the objects `flavor1` and `flavor2` to `uniqueFlavors`
 * Use the `.add()` method to add the `flavor1` object (again!) to the `uniqueFlavors` set
 */

const uniqueFlavors = new WeakSet();

let flavor1 = {
  flavor: 'chocolate',
};

let flavor2 = {
  flavor: 'strawberry',
};
console.log(uniqueFlavors);

// Add flavor objects to Weak Set
uniqueFlavors.add(flavor1);
uniqueFlavors.add(flavor2);

// Add flavor 1 object to Weak Set again
uniqueFlavors.add(flavor1);

console.log(uniqueFlavors);
```

## Maps

Maps & Weak Maps and Sets and Weak Sets

Both have similar properties and methods. Both Maps and Sets are _iterable_, so we can loop over them. Both WeakMaps and weak Sets do not prevent garbage collection.

Essentially, a Map is an object that lets you store key-value pairs where both the keys and the values can be objects, primitive values, or a combination of the two.

## Creating and modifying maps

### Create a Map

Using `new Map()` constructor to create an empty map with no key-value pairs.

```js
// employees.js
//
// Example of creating a Map

const employees = new Map();

console.log(employees); // Map {}

```

### Modifying Maps

Unlike Sets, you cannot create MAps from a list of values; instead, you add key-values by using the Map's `.set()` method.

```js
// employees2.js
//
// Example of modifying maps. Using the Map's .set() method

const employees = new Map();

console.log(employees); // Map {}

// Use .add() to add key-values to a Map.

// Add James
employees.set('james.parkes@udacity.com', {
  firstName: 'James',
  lastName: 'Parkes',
  role: 'Content Developer',
});

// Add Julia
employees.set('julia@udacity.com', {
  firstName: 'Julia',
  lastName: 'Van Cleve',
  role: 'Content Developer',
});

// Add Richard
employees.set('richard@udacity.com', {
  firstName: 'Richard',
  lastName: 'Kalehoff',
  role: 'Content Developer',
});


// Log the employees

console.log(employees); // Map {
  // 'james.parkes@udacity.com' => { firstName: 'James',
  //   lastName: 'Parkes',
  //   role: 'Content Developer' },
  // 'julia@udacity.com' => { firstName: 'Julia',
  //   lastName: 'Van Cleve',
  //   role: 'Content Developer' },
  // 'richard@udacity.com' => { firstName: 'Richard',
  //   lastName: 'Kalehoff',
  //   role: 'Content Developer' } }
```

The `.set` method takes two arguments. The first argument is the key, which is used to reference the second argument, the value.

To remove key-value pairs, simply use the `.delete()` method.


```js
// employees3.js
//
// Example of modifying maps. Using the Map's .delete() method to remove
// a key-value pair from a Map.

const employees = new Map();

console.log(employees); // Map {}

// Use .add() to add key-values to a Map.

// Add James
employees.set('james.parkes@udacity.com', {
  firstName: 'James',
  lastName: 'Parkes',
  role: 'Content Developer',
});

// Add Julia
employees.set('julia@udacity.com', {
  firstName: 'Julia',
  lastName: 'Van Cleve',
  role: 'Content Developer',
});

// Add Richard
employees.set('richard@udacity.com', {
  firstName: 'Richard',
  lastName: 'Kalehoff',
  role: 'Content Developer',
});

// Remove some employees using the .delete() method
employees.delete('julia@udacity.com');
employees.delete('richard@udacity.com');

// Log the employees
console.log(employees);
```

Using the `.clear()` method to remove all key-value pairs from the Map.

```js
// employees4.js
//
// Example of modifying maps. Using the Map's .delete() method to remove
// a key-value pair from a Map.

const employees = new Map();

console.log(employees); // Map {}

// Use .add() to add key-values to a Map.

// Add James
employees.set('james.parkes@udacity.com', {
  firstName: 'James',
  lastName: 'Parkes',
  role: 'Content Developer',
});

// Add Julia
employees.set('julia@udacity.com', {
  firstName: 'Julia',
  lastName: 'Van Cleve',
  role: 'Content Developer',
});

// Add Richard
employees.set('richard@udacity.com', {
  firstName: 'Richard',
  lastName: 'Kalehoff',
  role: 'Content Developer',
});

// Remove all employees using the .clear() method
employees.clear();

// Log the employees
console.log(employees);
```

## Working with Maps

After a Map has been created, the `.has()` method can be used to check if a key-value pair exists in your Map by passing it a key.


## Looping through maps




## WeakMaps




## Promises intro




## Promises




## More promises




## Proxies intro




## Proxies




## Proxies vs es5 getters/setters




## Generators




## Generators and iterators




## Sending data into/out of a generator




## Lesson 3 summary



## Further Reading

- Symbols
  + https://javascript.info/symbol
  + https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
  + https://developer.mozilla.org/en-US/docs/Glossary/Symbol
  + https://developer.mozilla.org/en-US/docs/Glossary/Primitive
  + http://2ality.com/2014/12/es6-symbols.html
  + https://en.wikipedia.org/wiki/Enumerated_type
  + https://codeburst.io/es2015-built-ins-part-1-symbols-sets-and-maps-608f126dd906
  + https://www.sitepoint.com/es6-symbols-uses/
- Iterators
  + https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
- Sets
  + https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
  + 
- WeakSets
  + https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet
  + 
- Related
  + [MDN: Article on Memory Management](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management)
  + [MDN: Garbage Collection](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey/Internals/Garbage_collection)