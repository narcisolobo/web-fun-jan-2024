# Work Hard to Get Arrays
## How to swap variables
```js
var fruit1 = "apples";
var fruit2 = "oranges";
    
fruit2 = fruit1;
    
console.log(fruit2 + " and " + fruit1);
```

What do we expect to get back?

```js
var fruit1 = "apples";
var fruit2 = "oranges";
    
var temp = fruit1; // temp is a common name for this
fruit1 = fruit2;
fruit2 = temp;
    
console.log(fruit2 + " and " + fruit1);
```

What do we get back this time?

## While loops
We have previously worked with `for` loops, how are `while` loops different?

```js
var start = 0;
var end = 12;
    
while(start < end) {
  console.log("start: " + start + ", end: " + end);
  start += 2;
  end -= 2;
}
```

## Reversing an array
Write a function `reverse(arr)` that, given an array, returns the original array with values in reverse order. If we were given...

```js
["a", "b", "c", "d", "e"];
```
we expect to get back...

```js
["e", "d", "c", "b", "a"];
```

Perform the reversal of the array *in-place*, meaning do not create a new array in your function. Instead, *mutate* the original given array's values.

Do not use any built-in array methods.

```js
// function declaration
function reverse(arr) {
  // your code here
}

// test case
var myArr = ["a", "b", "c", "d", "e"];

// function call
reverse(myArr); // returns ["e", "d", "c", "b", "a"]
```