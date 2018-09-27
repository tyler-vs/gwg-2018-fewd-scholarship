// from http://2ality.com/2014/12/es6-symbols.html

const MY_KEY = Symbol();
let obj = {};

obj[MY_KEY] = 123;

console.log(obj[MY_KEY]); // 123