const titleHeading = document.getElementById('title');
console.log(titleHeading);

const myGuitar = {
  year: 1970,
  color: 'red',
};

const otherGuitar = myGuitar;

console.log(myGuitar === otherGuitar);

myGuitar.color = 'blue';

console.log(otherGuitar.color);
// red or blue?
// reference data types

// string, number, boolean, null, undefined
// primitive data types

let myNum = 5;
const otherNum = myNum;

myNum = 10;
console.log(otherNum);
