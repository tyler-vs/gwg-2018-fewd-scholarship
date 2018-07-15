
# 16 objects

Use the `typeof` operator to determine the date type, be aware that in JS, Arrays are actually a special type of object.

```js

var arr = [1,2,3,4];

typeof(arr); // object


```

/* ----------------------------------------------------------------------------


## what is an object

objects are a data structure in JS that lets you 
stores data about a particular thing.

helps a program keep track of specific data by using 
a key.

allows grouping of information into a meaningful structure,
by using key-value pairs.



## object literal notation

Know the syntax for writing objects in this manner

### accessing object's value per key

2 flavors:

- bracket notation

`obj['keyName]`

- dot notation

`obj.keyName`


## Object proeprties naming conventions

Object key identifiers cannot have spaces in the name without 
using quotations.

```js


var person {
  name: 'Tyler', // all good
  last name: 'vs' // no good
}


// instead

var person {
  'last name': 'vs' // all good
}

```

**pro-tip:** avoid spaces and dashes when naming object keys, also avoid key 
name identifiers that start with a number (stick to normal var naming 
conventions)

**pro-tip:** common convention is to use camelCasing



---------------------------------------------------------------------------- */

//-----------------------------------------------------------------------------
