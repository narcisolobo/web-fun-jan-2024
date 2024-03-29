// So you want to be a JS objects master?

// What are objects?
// object literal notation
// key-value pairs
let monster = {
  id: 1,
  name: 'Bulbasaur',
  types: ['poison', 'grass'],
};

// Using the monster variable above how could we access the name?
// Using the monster variable above how could we access the 2nd type?

// console.log(monster.name);
// console.log(monster['name']);

// console.log(monster.types[1]);
// console.log(monster['types'][1]);

// const keyName = 'name';
// console.log(monster[keyName]);

// in python we call arrays "lists"
// objects are dictionaries

const pokémon = [
  { id: 1, name: 'Bulbasaur', types: ['poison', 'grass'] },
  { id: 5, name: 'Charmeleon', types: ['fire'] },
  { id: 9, name: 'Blastoise', types: ['water'] },
  { id: 12, name: 'Butterfree', types: ['bug', 'flying'] },
  { id: 16, name: 'Pidgey', types: ['normal', 'flying'] },
  { id: 23, name: 'Ekans', types: ['poison'] },
  { id: 24, name: 'Arbok', types: ['poison'] },
  { id: 25, name: 'Pikachu', types: ['electric'] },
  { id: 37, name: 'Vulpix', types: ['fire'] },
  { id: 52, name: 'Meowth', types: ['normal'] },
  { id: 63, name: 'Abra', types: ['psychic'] },
  { id: 67, name: 'Machamp', types: ['fighting'] },
  { id: 72, name: 'Tentacool', types: ['water', 'poison'] },
  { id: 74, name: 'Geodude', types: ['rock', 'ground'] },
  { id: 87, name: 'Dewgong', types: ['water', 'ice'] },
  { id: 98, name: 'Krabby', types: ['water'] },
  { id: 115, name: 'Kangaskhan', types: ['normal'] },
  { id: 122, name: 'Mr. Mime', types: ['psychic'] },
  { id: 133, name: 'Eevee', types: ['normal'] },
  { id: 144, name: 'Articuno', types: ['ice', 'flying'] },
  { id: 145, name: 'Zapdos', types: ['electric', 'flying'] },
  { id: 146, name: 'Moltres', types: ['fire', 'flying'] },
  { id: 148, name: 'Dragonair', types: ['dragon'] },
];

// How do we print the names of pokémon
// with an id greater than 99?
for (let i = 0; i < pokémon.length; i++) {
  if (pokémon[i].id > 99) {
    console.log(pokémon[i].name);
  }
}

/* 
  Challenges - using the array of pokémon above and loops:

  console.log the pokémon objects whose id is evenly divisible by 3
  console.log the pokémon objects that have more than one type
  console.log the names of the pokémon whose only type is "poison"
  console.log the first type of all the pokémon whose second type is "flying"
*/

console.log('');
console.log('the pokémon objects whose id is evenly divisible by 3');
for (let i = 0; i < pokémon.length; i++) {
  if (pokémon[i].id % 3 === 0) {
    console.log(pokémon[i]);
  }
}

console.log('');
console.log('the pokémon objects that have more than one type');
for (let i = 0; i < pokémon.length; i++) {
  if (pokémon[i].types.length > 1) {
    console.log(pokémon[i]);
  }
}
console.log('');
console.log('the names of the pokémon whose only type is "poison"');
for (let i = 0; i < pokémon.length; i++) {
  if (pokémon[i].types.length === 1) {
    if (pokémon[i].types[0] === 'poison') {
      console.log(pokémon[i].name);
    }
  }
}

console.log('');
console.log('the first type of all the pokémon whose second type is "flying"');
for (let i = 0; i < pokémon.length; i++) {
  if (pokémon[i].types[1] === 'flying') {
    console.log(pokémon[i].types[0]);
  }
}

// Bonus Challenge: console.log the reverse of the
// names of the pokémon whose only type is "poison"
// Array built-in methods are okay (split, join, reverse).
