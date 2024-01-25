// The Math Library
// Predict what each of the following will return.
// Can we predict the variable random?

var floor = Math.floor(1.8);
var ceiling = Math.ceil(Math.PI);
var random = Math.random();
// random returns a pseudorandom number between 0 (inclusive)
// and 1 (exclusive)

console.log(floor); // 1.1 or 1
console.log(ceiling); // 8 billion etc. or 4
console.log(random); // at least 7

/*
Dice Roller
Using what we've learned about the Math library in
JavaScript, complete the following function that
should return an integer between 1 through 6 at random.
*/

function d6() {
  var roll = Math.floor(Math.random() * 6) + 1;
  // var randDecimalBelow1 = Math.random();
  // var randDecimalBelow6 = randDecimalBelow1 * 6;
  // var randDecimalIncluding6 = randDecimalBelow6 + 1;
  // var randIntFrom1to6 = Math.floor(randDecimalIncluding6);
  return roll;
}

/* for (let i = 1; i <= 100; i++) {
  var playerRoll = d6();
  console.log('The player rolled: ' + playerRoll);
} */

/* 
Consult the Oracle
Using the following array, write a function that
will answer all of our questions by randomly
choosing a response
*/

var lifesAnswers = [
  'It is certain.',
  'It is decidedly so.',
  'Without a doubt.',
  'Yes - definitely.',
  'You may rely on it.',
  'As I see it, yes.',
  'Most likely.',
  'Outlook good.',
  'Yes.',
  'Signs point to yes.',
  'Reply hazy, try again.',
  'Ask again later.',
  'Better not tell you now.',
  'Cannot predict now.',
  'Concentrate and ask again.',
  "Don't count on it.",
  'My reply is no.',
  'My sources say no.',
  'Outlook not so good.',
  'Very doubtful.',
];

function magicEightBall() {
  const randIdx = Math.floor(Math.random() * lifesAnswers.length);
  return lifesAnswers[randIdx];
}

console.log(magicEightBall());
