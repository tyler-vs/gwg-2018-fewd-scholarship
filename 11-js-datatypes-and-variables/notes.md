
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

