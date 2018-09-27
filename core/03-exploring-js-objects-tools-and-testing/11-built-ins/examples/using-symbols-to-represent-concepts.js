// using-symbols-to-represent-concepts.js
// from: http://2ality.com/2014/12/es6-symbols.html
// similar to enum constants in a database (i.e. must be one of the
// predefined options.)


// COLORS CONSTANTS (USING var)
// colors found at https://css-tricks.com/snippets/css/named-colors-and-hex-equivalents/.
var COLOR_RED = 'FF0000';
var COLOR_ORANGE = 'FFA500';
var COLOR_YELLOW = 'FFFF00';
var COLOR_GREEN = '008000';
var COLOR_BLUE = '0000FF';
var COLOR_PURPLE = '80080';

// function to retreive a complementary color of the color
// passed in as an argument.
var getComplementColor = function(color) {
  switch(color) {
    case COLOR_RED:
      return formatHex(COLOR_GREEN);
    case COLOR_ORANGE:
      return formatHex(COLOR_BLUE);
    case COLOR_YELLOW:
      return formatHex(COLOR_PURPLE);
    case COLOR_GREEN:
      return formatHex(COLOR_RED);
    case COLOR_BLUE:
      return formatHex(COLOR_ORANGE);
    case COLOR_PURPLE:
      return formatHex(COLOR_YELLOW);
    default:
      throw new Error('Unkown color: ' + color);
  }
};

var formatHex = function(str) {
  str = '#' + str.toUpperCase();
  return str;
};

// Where a mishap could occur...
var MOOD_BLUE = '4682B4'; // not #0000FF

console.log(getComplementColor(MOOD_BLUE));


// To fix: lets use ES6 const and symbol feature.
const COLOR_RED = Symbol(); //  = 'FF0000';
const COLOR_ORANGE = Symbol(); //  = 'FFA500';
const COLOR_YELLOW = Symbol(); //  = 'FFFF00';
const COLOR_GREEN = Symbol(); //  = '008000';
const COLOR_BLUE = Symbol(); //  = '0000FF';
const COLOR_PURPLE = Symbol(); //  = '80080';

