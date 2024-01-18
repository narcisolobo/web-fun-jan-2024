// What is a JavaScript Object?

// Strings, numbers, and booleans are primitive datatypes.

// A JS object is a reference datatype, like an array.
// array ex.
var colors = ['red', 'blue', 'green'];

// an object is like an array, but we define the folder labels.

// a js object is like an object IRL:
// an object irl has characteristics and things it can do

// in js, we call characteristics "properties" of the object
// we call "things it can do" the "methods" of the object

// object literal notation
var guitar = {
  year: 1992,
  color: 'blue',
  strum: function () {
    console.log('strumming now...');
  },
  stats: function () {
    console.log(this.color);
    console.log(this.year);
  },
};

// getting and setting values in an object:
// dot notation and bracket notation

// getting a value using dot notation
console.log(guitar.year);

// setting a value using dot notation
guitar.color = 'red';
console.log(guitar);

// getting a value using bracket notation
console.log(guitar['color']);

var prop = 'color';
console.log(guitar[prop]);

// setting a value using bracket notation
guitar['year'] = 1970;
console.log(guitar);

// The value of the 'this' keyword changes depending
// on the context in which it is used

guitar.strum();
guitar.stats();
