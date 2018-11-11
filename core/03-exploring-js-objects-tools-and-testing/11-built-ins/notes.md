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
any object that is iterable can use the new `for...of` loop.

### how it works

in order for an object to be iterable, it must implement the __iterable interface__. Interface, basically means that in order for an object to be iterable, it must contain a default iterator method. This _iterator_ method will define how the objects should be iterated. The __iterator method__ is available via the constant `[Symbo.iterator]`, is a zero arguments function that returns an iterator object. An iterator object is an object that conforms to the iterator protocol.

### the __iterator__ protocol

the __iterator__ protocol is used to define a standard way that an object producing a sequence of values.



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