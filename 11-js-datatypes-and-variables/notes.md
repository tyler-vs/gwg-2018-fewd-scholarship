
# Lesson 11 JavaScript Datatypes and Variables

**Pro-tip** Use the JS console in Chrome to test some of the examples from the lesson.

## Intro to Data Types

What is data and why is it important/useful?

Data can be information.

Data can be used for:

- understanding the world
- make educated decisions
- recognize trends
- inform future decisions

Data and datatypes are the building of programming, they allow organization of information within the program and determine how a program will run.

Example of data:

-  A user's Facebook profile feed.

**Pro-tip**, Be aware and know which data types to use and when it is appropriate to use each type.

### Primitive data types in JavaScript

Primitive data types in JavaScript include:

- numbers
- strings
- booleans
- undefined
- null


## Numbers (data type)

The Number data type includes any positive or negative integer, as well as decimals.

### Arithmetic operations

### Comparing numbers

Comparisons between numbers will either evaluate to true or false and use operators which operate on given operands within the expression.

### Logical Operators in JavaScript

Used commonly with arithmetic.

| --- | --- |
| Operator | Meaning |
| --- | --- |
| `<` | Less than |
| `>` | Greater than |
| `<=` | Less than or equal to |
| `>=` | Greater than or equal to |
| `==` | Equal to |
| `===` | Strict equal to |
| `!=` | Not equal to |
| --- | --- |

**Pro-tip** Just like the command line of an operating system, the developer tools JS console can redisplay a history of past commands entered by hitting the up arrow on the prompt line.


## Comments in JavaScript

Programmers use **comments** to make it easier for other programmers to read and understand their code.


```javascript

// A comment

/*

    A block comment. For longer descriptions.
 
 */

function rev(word) {
    
    // if no argument is passed then exit function
    if (word !== '') {
        return;
    }
    
    // placeholder variable
    var reverseWord = '';

    // loops over the characters in reverse order
    for (var i = word.length - 1; i >= 0; i--) {
        reverseWord = reverseWord.concat(word[i]);
    }

    return reverseWord;
}

```

General commenting tips:

- Comments are often used to clarify and document non-obvious code. 
- It's good practice to include code comments to improve code readability.

For the whole Udacity nanodegree program, an actual style guide exists, see [here](https://github.com/udacity/frontend-nanodegree-styleguide). However, as Larry Ullman would suggest - use a style you are most comfortable with and stay consist by using it and not deviate from it.


## String (data type)

Strings in JavaScript are just sequences of characters, which can include letters, numbers, punctuations and spaces.

Strings are delimited with quotes, so enclose strings either using `'` single  quotes or `"` double quotes and make sure the same type of quote is used to delimit the actual string data.

Of course, there are template string support in newer JavaScript which in case may use `\`` a back tick. 

### String concatenation

String concatenation allows for the joining of strings and uses the `+` symbol to do so.

```javascript

// some strings held in variables
var fName = 'Tyler';
var lName = 'Van Schaick';

// combines or joins the strings together (along with a single white space)
// to make sure the first and last names do not run together.
var fullName = fName + ' ' + lName;

```


### Implicit Type Coercion

One of the peculiar features of JS code, **implicit type coercion** is when JavaScript tries to determine the correct data type for a given expression.

Example:

```javascript

"Hello" + 5 * 10; // "Hello50" a string, here the number values are implicitly coerced there type into a string.

5 * 10; // 50 a Number, no implicit type coercion

```

## Variables

Used commonly in math but also very useful in programming. A way to name a value with an identifier so that the value can be referenced to at a later time in the program.

### Assignment operator (=)

The equal sign, used when assigning variables.

### Keywords

**Keywords**, is a word that has special meaning within a programming language. Such as `var` in the JS language.

### Naming Conventions (for variables)

JavaScript programs usually use a camelCase naming convention, such as `camelCase = 10;` as unique identifiers for variables in the program. Other languages may differ, such a PHP where variables typically use **snake case** like so `my_php_variable = 10;`;

[Google's JavaScript Style guide](https://google.github.io/styleguide/jsguide.html)


**Pro-tip** - But there are recommended style guides used in all programming languages that help keep code consistent, clean, and easy-to-read.

Another suggestion is to keep the names of variables to something that may help describe what it is holding.

Avoid vague naming of variables that do not help describe the data being held by the variable.


## String Index

### Indexing

Did you know that you can access individual characters in a string? To access an individual character, you can use the character's location in the string, called its **index**.

Can be accessed in two ways: using the **index** *or* using the JS function `charAt()`;

## Escaping Strings and Characters

Sometimes, you want to include quotes within a string and not mess up the quote delimiters required for the sting data type. To do so, a backslash `\` is typically used in front of the character we want to escape. Failing to escape letters, quote characters properly will likely result in a Syntax Error.

Escaping a character tells JavaScript to ignore the character's special meaning and just use the literal value of the character.

## Special Characters

Common special characters that may need to be escaped when using JavaScript strings.

| --- | --- |
| code | character |
| --- | --- |
| `\\` | \\\(backslash) |
| `\"` | \\"(double quote) |
| `\'` | \\'(single quote) |
| `\n` | new line |
| `\t` | tab |

The last two `\n` and `\t` are unique because they add additional **whitespace** to your strings.

In HTML, remember that all whitespace is collapsed into a single character.


Please see MDN's doc pages on Grammar and types [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Using_special_characters_in_strings).


## Comparing Strings

A common way to work with strings is by comparing them.

String can be compared typically using the `==` and `!=` logical operators. However.

### Case-sensitive

When comparing strings, case matters! Despite strings having the same letters,capitalization of said letters may influence whether two strings equality.

```
// from the Chrome JS console

"green" == "blue"
false
"green" == "green"
true
"green" == "Green"
false
"Green" == "green"
false
"green" > "blue"
true
"green" > "green"
false
"green" > "Green"
true
"Green" > "green"
false

```

How does JavaScript determine a given strings values for when comparing strings?

 Each character is assigned a numerical value that essentially corresponds to the character's location in an ASCII table: <https://www.ascii-code.com/>.


 ```javascript

/*
 * Programming Quiz: Favorite Food (2-3)
 */

var myFavFood = "PiZZa";
myFavFood = myFavFood.toLowerCase();

var capitalizeFirstLetter = myFavFood[0].toUpperCase();

var restOfString = myFavFood.slice(1);

myFavFood = capitalizeFirstLetter + restOfString;

console.log(myFavFood);


 ```


## Booleans

A Boolean value is simply a value that's either true or false. Many expressions result in either a Boolean true or false.


## Null, Undefined and NaN

### `undefined`

"Absence of value"

`undefined` is the value JS uses when it does not have a value for something.

```js

var myVar;
myVar; // returns `undefined`

```

### `null`

"Value of nothing"

`null` is the value typucally used when you want to deliberately say "this is empty". As in perhaps the variable will be assigned a value later on in the program.

### `NaN`

`NaN` stands for "Not-A-Number" and it is often returned indicating an error with number operations.


## Equality

Typically seen in expressions using `==`, `===` and `!=`.

When mixing datatypes upon comparing them may result in some interesting results.

```js

"1" == 1 // returns true

0 == false // returns true

```

### Implicit type coercion (again)

This is due to the fact the _JavaScript is a loosely typed language_.
 Loosely typed meaning that when programming in JavaScript, unlike compiled programs, you do not need to specify that data date. Instead, when the code is interpreted by the JavaScript engine (and each browser vendor has their own) it will automatically converted in the "appropriate" data type.

Examples:

```js

// #1
var myName = "julia" + 1; // returns "julia1", a string data type

// #2
"Hello" % 10 // returns NaN

// #3

```

### A Strongly Typed Language

A strongly types language is a programming language that is more likely to generate errors if data does not closely match an expected type.

Example of a strongly typed programming language, where `int` is declared before the variable name to show that it will be an integer data type for that piece of data. `string` for a string data type and `float` and `double` would be considered Number data types in JS.

```

int count = 1;
string name = "Julia";
double num = 1.2932;
float price = 2.99;

```

### Reviewing expressions that use `==` or `!=`

When you use the `==` or `!=` operators, JavaScript first converts each value to the same type (if they’re not already the same type); this is why it's called "type coercion"! **This is often not the behavior you want, and it’s actually considered bad practice to use the `==` and `!=` operators when comparing values for equality.**

### Strict equality `===` and `!==`

Strict equality is more strict when equating values in an expression because it checks both `value` and the `data type`.

Instead, in JavaScript it’s better to use strict equality to see if numbers, strings, or booleans, etc. are identical in type and value without doing the type conversion first. To perform a strict comparison, simply add an additional equals sign `=` to the end of the `==` and `!=` operators.

Some examples from the JS console:

```js

"3" > 1
true
3 != "3"
false
true >= 0
true
1 !== false
true
"false" === 0
false
3 === 3
true

```

