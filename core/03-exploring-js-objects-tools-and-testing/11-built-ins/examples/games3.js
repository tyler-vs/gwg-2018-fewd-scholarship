// examples/games3.js
//
// Modifying sets


const coolGames = [
  'Super Mario 64',
  'Banjo-Kazooie',
  'Mario Kart',
  'Super Mario 64',
];

const games = new Set(coolGames);

console.log(games);

// Adding

games.add('Bonjo-Tooie');
games.add('Ages of Empires');
games.add('Catan');
games.add('Super Mario 64');

console.log('Added some games.');
console.log(games);


// Removing

games.delete('Catan');
games.delete('Ages of Empires');

console.log('Removed some games.');
console.log(games);

// Remove all games

console.log('Clear out all of the games.')

games.clear();

console.log(games);
