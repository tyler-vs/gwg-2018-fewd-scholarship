/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

var num = 99;

while ( num >= 1 ) {
  // console.log(num);
  var output = '';

  if (num == 1) {
    output = num + ' bottle of juice on the wall! ' + num + ' bottle of juice! Take one down, pass it around... ';
  } else {
    output = num + ' bottles of juice on the wall! ' + num + ' bottles of juice! Take one down, pass it around... ';
  }
  if (num == 2) {
    output += (num - 1) + ' bottle of juice on the wall!';
  } else {
    output += (num - 1) + ' bottles of juice on the wall!';
  }
  // 99 bottles of juice on the wall! 99 bottles of juice! Take one down, pass it around... 98 bottles of juice on the wall!

    // check value of num
    // print lyrics using num
  console.log(output);
    // don't forget to check pluralization on the last line!
    // decrement num
  num--;
}
