# Some like it flat
**Nesting Arrays**  
Arrays are capable of having arrays inside of them. Assuming we're given an array like...

```js
var arr2d = [
  [2, 5, 8],
  [3, 6, 1],
  [5, 7, 7]
];
```
We can console.log the `8` in this array like so:

```js
console.log(arr2d[0][2]);
```

The first index `0` will select the `[2, 5, 8]` sub-array, and
the second index `2` will select the `8` out of that sub-array.

## `isPresent2d`
Could we determine if a certain value was present? Write a function `isPresent2d(arr2d, value)` that returns `true` if the value is present and `false` otherwise.

**Note** - Don't assume the array will always be the same size, we must rely on its `.length` property

**Hint** - Can we put a for loop inside another for loop?

```js
// function declaration
function isPresent2d(arr2d, value) {
  // your code here
}

var arr2d = [
  [2, 5, 8],
  [3, 6, 1],
  [5, 7, 7]
];

// function calls
isPresent2d(arr2d, 7); // returns true
isPresent2d(arr2d, 9); // returns false
```

## `flatten`
Write a function `flatten(arr2d)` that, given a two-dimensional array (an array containing arrays), returns a new array containing just the values from inside the sub-arrays.

Don't assume the array will always be the same size, or that the sub-arrays are all the same length (the array might be jagged). Don't use built-in methods like `Array.prototype.flat()` but feel free to use `.push(value)` and/or `.pop()` where needed.

```js
// function declaration
function flatten(arr2d) {
  // your code here
}

var arr2d = [
  [2, 5, 8],
  [3, 6, 1],
  [5, 7, 7]
];

// function call
flatten(arr2d) // returns [2, 5, 8, 3, 6, 1, 5, 7, 7]
```