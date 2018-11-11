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
- Modifying sets
- Working with sets
- Sets and iterators
- Quiz: using sets
- WeakSets
- Quiz: working with WeakSets
- Maps
- Creating and modifying maps
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
  - symbols
  - Iterators

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




## Modifying sets




## Working with sets




## Sets and iterators




## Quiz: using sets




## WeakSets




## Quiz: working with WeakSets




## Maps




## Creating and modifying maps




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

### symbols

- https://javascript.info/symbol
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
- https://developer.mozilla.org/en-US/docs/Glossary/Symbol
- https://developer.mozilla.org/en-US/docs/Glossary/Primitive
- http://2ality.com/2014/12/es6-symbols.html
- https://en.wikipedia.org/wiki/Enumerated_type
- https://codeburst.io/es2015-built-ins-part-1-symbols-sets-and-maps-608f126dd906
- https://www.sitepoint.com/es6-symbols-uses/

### Iterators

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols