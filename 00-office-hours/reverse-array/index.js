var fruit1 = 'apples';
var fruit2 = 'oranges';

var temp = fruit1; // temp is a common name for this
fruit1 = fruit2;
fruit2 = temp;

console.log(fruit2 + ' and ' + fruit1);

var start = 0;
var end = 12;

while (start < end) {
  console.log('start: ' + start + ', end: ' + end);
  start += 2;
  end -= 2;
}

// prediction:
// start: 0, end: 12
// start: 2, end: 10
// start: 4, end: 8

// function declaration
function reverse(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
  }

  return arr;
}

// test case
var myArr = ['a', 'b', 'c', 'd', 'e'];

// function call
console.log(reverse(myArr)); // returns ["e", "d", "c", "b", "a"]

function reverseWithFor(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    const temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }

  return arr;
}

console.log(reverseWithFor(myArr));
