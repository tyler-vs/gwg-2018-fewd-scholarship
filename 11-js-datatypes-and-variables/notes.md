
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

