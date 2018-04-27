/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 *
 * Using a while loop, print out the countdown output above.
 */

// your code goes here


var seconds = 60;

while (seconds >= 0) {
  // console.log(seconds);

  if (seconds === 50) {
    console.log('Orbiter transfers from ground to internal power');
  } else if (seconds == 31) {
    console.log('Ground launch sequencer is go for auto sequence start');
  } else if (seconds == 16) {
    console.log('Activate launch pad sound suppression system');
  } else if (seconds == 10) {
    console.log('Activate main engine hydrogen burnoff system');
  } else if (seconds == 6) {
    console.log('Main engine start');
  } else if (seconds === 0 ) {
    console.log('Solid rocket booster ignition and liftoff!');
  } else {
    console.log('T-' + seconds + ' seconds');
  }

  seconds--;
}


