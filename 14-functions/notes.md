
# 14 - functions

> Summary: write functions declarations to package up bits of code to use throughout your program (espeicially for pieces of a program that repeat certain actions), and learn different ways to write function declartions so you can easily pass functions to other functions.

## functions

A **function** is a self contained colelction of statements that run as a single unit. _~ Ethan Brown, Learning JavaScript, 2016_

A **function body** is the collection of statements that compoase the function.

## return value(s)

If a function does not explicitly return a value then it will return `undefined` by default. To explicitly return a value, use the `return` keyword within the **function body**. Sometime's functions will use `return` by itself when validating the arguments passed into the function. Some common patterns are to `return true;` upon the function running successfully.

**note: return also stops the execution of a function. See control flow exception keywords such as `continue` and `break`.** 

## callbacks && functions

Unlike many other programming languages, JavaScript enables you to freely pass functions around to be executed at a later time. 

A **callback** is a function that is passed as an argument to another function and is executed after its parent function has completed. 

Callbacks are special because they patiently wait to execute until their parent finishes. Meanwhile, the browser can be executing other functions or doing all sorts of other work. 

[See definition source](https://learn.jquery.com/about-jquery/how-jquery-works/)

## parameters vs arguments

**parameters** - are the variables that are used to store data that is passed into a function for the function to use. Parameters are defined when the function itself is defined.

**arguments** - actual data that is passd into an invoked function.


## scope

**scope** - determines when and where variables, constants and arguments are considered to be defined. _~ Ethan Brown, Learning JavaScript, 2016 O'Reilly Media_

### block scope 

List of statements surrounded by curley braces, refers to identifiers (`var`,  `let`, and `const`) that are only available within that \[code\] block.

```js

/* 
 * block scope
 */

console.log('before the block');

// ------------------
// a standalone block
// ------------------
{
  console.log('inside block');
  const x = 3;
  console.log(x);
}
console.log(`Outside the block; x=${x}`);

```

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

>This will be the most complicated program you've written yet, so take some time thinking through the problem before diving into the code. What tools will you need from your JavaScript tool belt? Professionals plan out their code before writing anything. Think through the steps your code will need to take and write them down in order. Then go through your list and convert each step into actual code. Good luck!


## function expressions

**function expressions** - when a function is assigned to a variable.

**anonymous functions** - a function with no name.

two ways to create functions have been introduced so far:

1. function declaration
2. function expressions

important difference between the two are that function declarations _are hoisted_ while function expressions are not.

```js

/*
 * function-expressions-and-hoisting.js
 */


function cat() {
  console.log(meow(2));
  

  // function expressions, like so, are not hoisted!!
  var meow = function(max) {

    var catMessage = ""; // empty string
    for (var i = 0; i < max; i++) {
      catMessage += "meow";
    }
    return catMessage;
  }
  

  // a declared function, like so, will be hoisted
  function purr() {
    return "purrrr!";
  }
}
cat();


// SAME CODE WHEN JS ENGINE DOES HOISTING (BEFORE EXEC)
// ---


function cat() {
  

  // this moved up to top of its current scope
  function purr() {
    return "purrrr!";
  }

  console.log(meow(2));
  

  // remember, not hoisted (causes error)
  var meow = function(max) {

    var catMessage = "";
    for (var i = 0; i < max; i++) {
      catMessage += "meow";
    }
    return catMessage;
  }
}
cat();


```

## functions as parameters

A common pattern for function expressions are to pass them as parameters into another function, seeing how they are contained in a variable which is easy to pass around.

A **callback** is a function that is passed into another function.

```js

// function expression catSays
var catSays = function(max) {
  var catMessage = "";
  for (var i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};

// function declaration helloCat accepting a callback
function helloCat(callbackFunc) {
  return "Hello " + callbackFunc(3);
}

// pass in catSays as a callback function
helloCat(catSays);


```


### named function expressions

```js


// named function expressions

var favMovie = function movie() {
  console.log('The fountain');
}

// movie(); // ReferenceError, movie is not defined

favMovie();


// vs. function expressions (with anonymous function)

var worstMovie = function() {
  console.log('The Room');
}

worstMovie();


```

### inline function expressions

A _function expression_ is when a function is assigned a variable. In JS, this can also happen when you pass a function inline as an argument to another function.

```js

// Function expression that assigns the function displayFavorite 
// to the variable favoriteMovie
var favoriteMovie = function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
};

// Function declaration that has two parameters: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
  messageFunction(name);
}

// Call the movies function, pass in the favoriteMovie function and name of movie
movies(favoriteMovie, "Finding Nemo");

```

*But* you can bypass the first assignment of the function, by passing the function to the `movies()` function inline. See how the function is declared inline as an argument.

```js

// Function declaration that takes in two arguments: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
  messageFunction(name);
}

// Call the movies function, pass in the function and name of movie
movies(function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
}, "Finding Nemo");


```

This type of syntax, writing function expressions that pass a function into another function inline, is really common in JavaScript.


