/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function(totalLaughs) {
  var output = '';
  if (!totalLaughs) {
    return;
  }
  for (var i = 1; i <= totalLaughs; i++) {
    output += 'ha';
  }
  // format with exclamation mark at the end.
  output += '!';

  return output;
}

console.log(laugh(10));
