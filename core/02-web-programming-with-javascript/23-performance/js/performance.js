// performance.js

const startingTime = performance.now();

for (let i = 1; i <= 200; i++) {
  for (let j = 1; j <= 200; j++) {
    console.log(`i: ${i} and j: ${j}.`);
  }
}

const endingTime = performance.now();

console.log(`this code took: ${endingTime - startingTime} milliseconds.`);