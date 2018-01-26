
# 15 - Arrays

## what is an array

## creating an array

## accessing array members

## array index

## array properties and methods

- `length`
- `pop()`
- `push()`
- `splice()`
- `reverse()`
- `sort()`
- `shift`
- `unshift`

## array loops

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

