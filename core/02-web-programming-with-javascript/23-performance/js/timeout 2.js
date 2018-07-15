// timeout.js

const startingTime = performance.now();

console.log(`starting time: ${startingTime}.`);

// for (let i = 1; i <= 200; i++) {
//   for (let j = 1; j <= 200; j++) {
//     console.log(`i: ${i} and j: ${j}.`);
//   }
// }

setTimeout( function sayHi() {
  // const timed = performance.now();
  console.log('Howdy! Timed at: ' + performance.now());
}, 0 );

const endingTime = performance.now();

console.log(`this code took: ${endingTime - startingTime} milliseconds.`);