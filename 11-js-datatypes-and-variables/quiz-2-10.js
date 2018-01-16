/*
 * Programming Quiz: Out to Dinner (2-10)
 */

// your code goes here

// Create a variable called bill and assign it the result of 10.25 + 3.99 + 7.15 (don't perform the calculation yourself, let JavaScript do it!).
var bill = 10.25 + 3.99 + 7.15;

// Next, create a variable called tip and assign it the result of multiplying bill by a 15% tip rate.
var tip = bill * 0.15;
// console.log(typeof(tip));
tip = Number(tip);

// Finally, add the bill and tip together and store it into a variable called total.
var total = bill + tip;
// total = total.toFixed(2);
// total = Number(total);
// console.log(typeof(total));
console.log('$' + total.toFixed(2));
// console.log(total);
