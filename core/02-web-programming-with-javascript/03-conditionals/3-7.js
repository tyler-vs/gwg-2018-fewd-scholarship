// console.clear();

/*
 * Programming Quiz: What do I Wear? (3-7)
 */

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 23;
var shirtLength = 30;
var shirtSleeve = 8.71;

// // test 2
// var shirtWidth = 19;
// var shirtLength = 28;
// var shirtSleeve = 8.21;
// // test 3
// var shirtWidth = 26;
// var shirtLength = 33;
// var shirtSleeve = 9.63;
// // test 4
// var shirtWidth = 18;
// var shirtLength = 29;
// var shirtSleeve = 8.47;


// your code goes here
var size = '';


if (shirtWidth >= 18 && shirtWidth <= 28) {

  if (shirtWidth >= 18 && shirtWidth < 20) {
    shirtWidth = 'S';
  } else if (shirtWidth >= 20 && shirtWidth < 22) {
    shirtWidth = 'M';
  } else if (shirtWidth >= 22 && shirtWidth < 24) {
    shirtWidth = 'L';
  } else if (shirtWidth >= 24 && shirtWidth < 26) {
    shirtWidth = 'XL';
  } else if (shirtWidth >= 26 && shirtWidth < 28) {
    shirtWidth = '2XL';
  } else if (shirtWidth <= 28) { // or just else..
    shirtWidth = '3XL';
  }
} else {
  console.log('Shirt "width" is out of range.');
  shirtWidth = false;
}



// Find the shirt length

if (shirtLength >= 28 && shirtLength <= 34) {
  if (shirtLength >= 28 && shirtLength < 29) {
    shirtLength = 'S';
  } else if (shirtLength >= 29 && shirtLength < 30) {
    shirtLength = 'M';
  } else if (shirtLength >= 30 && shirtLength < 31) {
    shirtLength = 'L';
  } else if (shirtLength >= 31 && shirtLength < 33) {
    shirtLength = 'XL';
  } else if (shirtLength >= 33 && shirtLength < 34) {
    shirtLength = '2XL';
  } else if (shirtLength <= 34) {
    // or else ... ?
    shirtLength = '3XL';
  }
} else {
  console.log('Shirt length is out of range.');
  shirtLength = false;
}


// find the shirt sleeve

if (shirtSleeve >= 8.13 && shirtSleeve <= 10.13) {

  if (shirtSleeve >= 8.13 && shirtSleeve < 8.38) {
    shirtSleeve = 'S';
  } else if (shirtSleeve >= 8.38 && shirtSleeve < 8.63) {
    shirtSleeve = 'M';
  } else if (shirtSleeve >= 8.63 && shirtSleeve < 8.88) {
    shirtSleeve = 'L';
  } else if (shirtSleeve >= 8.88 && shirtSleeve < 9.63) {
    shirtSleeve = 'XL';
  } else if (shirtSleeve >= 9.63 && shirtSleeve < 10.13) {
    shirtSleeve = '2XL';
  } else if (shirtSleeve <= 10.13) {
    shirtSleeve = '3XL';
  }
} else {
  shirtSleeve = false;
  console.log('Shirt sleeve is out of range.');
}


// Check
console.log('Shirt "Width" is "' + shirtWidth + '".');
console.log('Shirt "Length" is "' + shirtLength + '".');
console.log('Shirt "Sleeve" is "' + shirtSleeve + '".');


// Determine shirt size
if ( (shirtWidth !== false)
   && (shirtLength !== false)
   && (shirtSleeve !== false) ) {

  // console.log('Yay!');

  if (shirtWidth === 'S' && shirtLength === 'S' && shirtSleeve === 'S') {
    size = 'S';
  } else if (shirtWidth === 'M' && shirtLength === 'M' && shirtSleeve === 'M') {
    size = 'M';
  } else if (shirtWidth === 'L' && shirtLength === 'L' && shirtSleeve === 'L') {
    size = 'L';
  } else if (shirtWidth === 'XL' && shirtLength === 'XL' && shirtSleeve === 'XL') {
    size = 'XL';
  } else if (shirtWidth === '2XL' && shirtLength === '2XL' && shirtSleeve === '2XL') {
    size = '2XL';
  } else if (shirtWidth === '3XL' && shirtLength === '3XL' && shirtSleeve === '3XL') {
    size = '3XL';
  } else {
    size = 'N/A';
  }

  // OUTPUT
  // console.log('The shirt "size" is: "' + size + '".');
  console.log(size);


} else {
  console.log('Error, a missing value');
}