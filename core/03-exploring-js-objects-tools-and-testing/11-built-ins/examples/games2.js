// examples/games2.js
//
// Create a set from a list of values.
// Notice that if any duplicated values/members are removed so that
// only on of them remains, like 'Super Mario 64' items.
//
// 1. multiple items can be placed in a set by using an array
// 2. if any values are repeated in an array, then they will only appear once in a set.

const coolGames = [
  'Super Mario 64',
  'Banjo-Kazooie',
  'Mario Kart',
  'Super Mario 64',
];

console.log('Cool Games: ' + coolGames);

const games = new Set(coolGames);
// const games = new Set(coolGames);

console.log('Games: \n');
console.log(games); // Set { 'Super Mario 64', 'Banjo-Kazooie', 'Mario Kart' }

