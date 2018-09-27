// bowl.js


// An object with fruits.
const bowl = {
  'apple': {
    color: 'red',
    weight: 136.078
  },
  'banana': {
    color: 'yellow',
    weight: 183.15
  },
  'orange': {
    color: 'orange',
    weight: 170.097
  },
};

// Adding another banana to bowl will simply overwrite the
// first one that already exists within the 'bowl' object.
bowl.banana = {
  color: 'yellow',
  weight: 176.845,
};

console.log(bowl);

// returns:
// { apple: { color: 'red', weight: 136.078 },
//   banana: { color: 'yellow', weight: 176.845 },
//   orange: { color: 'orange', weight: 170.097 } }

// To fix this problem we can use symbols
const newBowl = {
  [Symbol('apple')]: {
    color: 'red',
    weight: 136.078
  },
  [Symbol('banana')]: {
    color: 'yellow',
    weight: 183.15
  },
  [Symbol('orange')]: {
    color: 'orange',
    weight: 170.097
  },
  [Symbol('banana')]: {
    color: 'yellow',
    weight: 176.845,
  },
};

console.log(newBowl);

// returns:
// { [Symbol(apple)]: { color: 'red', weight: 136.078 },
// [Symbol(banana)]: { color: 'yellow', weight: 183.15 },
// [Symbol(orange)]: { color: 'orange', weight: 170.097 },
// [Symbol(banana)]: { color: 'yellow', weight: 176.845 } }