/*
 * Programming Quiz: Colors of the Rainbow (6-4)
 */

var rainbow = ["Red", "Orange", "Blackberry", "Blue"];

// your code goes here

rainbow.splice(-2,1);
// console.log(rainbow);
rainbow.splice(rainbow.length + 1, 0, "Yellow", "Green");
// console.log(rainbow);
rainbow.splice(rainbow.length + 1, 0, "Purple");
console.log(rainbow);