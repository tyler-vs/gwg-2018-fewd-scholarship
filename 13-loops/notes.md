
# 13 Loops


**Loops** allow you to iterate over values and repeatedly run a _block of code_.



## While loops

A while loop repeats code as long as its condition is met.

```js

while (condition === true) {
  // code block
}


```

## Three main parts of _any_ loop:

1. Setup, sets up the loop, defines starting values
2. Condition, logical condition to test whether the loop should continue
3. Increment, (or decrement) step

Note: some loops can be made like other loops:

```

for (var foo = 0; foo <= 10; foo++) {
  console.log(foo);
}

var bar = 0;
while ( bar <= 10) {
  console.log(bar);
  bar++;
}


```

### Quizes

#### 1-2

```
var count = 0;
var foo = 10;
while (foo <= 25) {
  console.log('x ' + foo);
  count++;
  foo = foo + 2;
}
console.log('total cound: ' + count); // 8 

```

#### 2-2

_skip_
