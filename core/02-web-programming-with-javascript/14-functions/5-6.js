/*
 * Programming Quiz: Inline Functions (5-6)
 */

// don't change this code
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here
// call the emotions function here and pass in an
// inline function expression
emotions('happy', function laugh(num) {
  var output = '';
  if(!num || isNaN(num)) {
    return false;
  } else {
    for (var i = 1; i <= num; i++) {
      output += 'ha';
    }
  }
  return output + '!';
});


// My original laugh function from 5-2.js
// function laugh(num) {
//   var output = '';
//   if(!num || isNaN(num)) {
//     return false;
//   } else {
//     for (var i = 1; i <= num; i++) {
//       output += 'ha';
//     }
//   }
//   return output + '!';
// }