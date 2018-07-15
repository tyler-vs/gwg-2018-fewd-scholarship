


/*
 * Programming Quiz - Checking Your Balance (3-5)
 */

// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = 325.00;   // con
var checkBalance = true;    // bool
var isActive = false;   // bool

// your code goes here

if (checkBalance) {
  if (isActive && balance > 0) {
    console.log('Your balance is $' + balance + '.');
  } else if (!isActive) {
    console.log('Your account is not longer active.');
  } else if (balance == 0) {
    console.log('Your account is empty.');
  } else {
    console.log('Your balance is negative. Please contact bank.');
  }
} else {
  console.log('Thank you. Have a nice day!');
}