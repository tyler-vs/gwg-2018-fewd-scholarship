console.clear();
/*
 * Programming Quiz - Checking Your Balance (3-5)
 */

// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = -325.00;
var checkBalance = true;
var isActive = true;



// your code goes here
if (checkBalance === true) {
  if ((isActive === true) && (balance > 0 === true)) {
    console.log('Your balance is $' + balance.toFixed(2) + '.');
  } else if (isActive === false) {
    console.log('Your account is no longer active.');
  } else if (isActive === true && balance === 0) {
    console.log('Your account is empty.');
  } else if (isActive === true && balance < 0){
    console.log('Your balance is negative. Please contact bank.');
  }
} else {
  console.log('Thank you. Have a nice day!');
}


// var tests = [
//   [325.00, true, true],
//   [-325.00, true, true],
//   [0,true,true],
//   []
// ];
