/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle(widestWidth) {

  // output variable
  var output = ''

  if (!widestWidth) {
    // console.log('err. not a valid argument');
    return false;
  } // else {
    // console.log('widest: ' + widestWidth);
  // }


  for (var i = 1; i <= widestWidth; i++) {
    // makeLine(i)
    output += makeLine(i);
  }

  return output;
}


// test your code by uncommenting the following line
console.log(buildTriangle(10));