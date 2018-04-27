
# 15 - Arrays

## what is an array

## creating an array

## accessing array members with square brackets

square bracket notation can be used to access _array members_, or items within an arrays.

First is `square bracket notation`, using `[]` prepended to an array to access a specific array member

```js
['a','b','c'][0]; // returns "a"
```


Using bracket notation can access an array memeber that is within another arrays:

```js

[['a','b','c'],['foo','bar']][0][0]; // returns 'a'

```


## array index

## array properties and methods

- `length`

### Adding or removing an array element at either the beginning or end of an array.

- `pop()`
- `push()`
- `shift`
- `unshift`

### adding or removinig an array element at any position

- `splice()`


- `reverse()`
- `sort()`

## looping over an array

Looping through an array is a common task, one may use the handy `for loop` method or may opt for an array method to loop though an array's members.

Basics

```js

var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

// the variable `i` is used to step through each element in the array
for (var i = 0; i < donuts.length; i++) {
    donuts[i] += " hole";
    donuts[i] = donuts[i].toUpperCase();
}

console.log(donuts);



```

Even more concise with using **inline function expression**

```js

// above with forEach array method
var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

donuts.forEach(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  console.log(donut);
});

```



## `forEach()` 

`forEach()` - alternative way to iterate over an array (rather than using a 
for loop), and manipulate each element in the array with an inline function expression.


## `map()`

```js

var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

var improvedDonuts = donuts.map(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  return donut;
});

```


## 2D Arrays (arrays within arrays)


```js

for (var row = 0; row < donutBox.length; row++) {
  // here, donutBox[row].length refers to the length of the donut array currently being looped over
  for (var column = 0; column < donutBox[row].length; column++) {
    console.log(donutBox[row][column]);
  }
}

```

