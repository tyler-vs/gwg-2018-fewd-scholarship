
# 14 - Functions

## functions

- what is a function
- declaring functions

## return values


## scope

### hoisting

**hoisting** - before any JS is executed all functions declarations are "hoisted" to the top of a program in order to be used.

In a broader scenario, hoisting can cause confusion and bugs that are hard to debug. If not using ES6 `let`, then the best practice is to declare all functions at the top of a JS program, and to also declare all variables at the top of functions.


```js

/*
 * Hoisting in JS
 */

// example 1
// ---------
// Shows function hoisting

findAverage(5, 9); // calling the function

function findAverage(x, y) {  // declaring the function
  var answer = (x + y) / 2;
  return answer;
}

// How JS intereprets example 1

function findAverage(x, y) {  // hoisted
  var answer = (x + y) / 2;
  return answer;
}

findAverage(5, 9);


// example 2
// ---------
// 

function sayGreeting() {
  console.log(greeting);
  var greeting;
}

sayGreeting();

// How JS interprets example 2

function sayGreeting() {
  var greeting; // variable hoisting
  console.log(greeting);
  greeting = "hello";
}

sayGreeting();


```

#### hoisting summary

- JS hoists function declarations and variable declarations to the top of the current scope (before execution of the script).
- variable assignments are _not_ hoisted.
- declaring functions and variables at the top of your script, so the syntax and behavior are consistent with each other


