// symbol


// 1. declaring a symbol
const uniqueID = Symbol();

console.log(uniqueID); // >> Symbol()


// 2. passing a description as an argument

const apple = Symbol('This is a unique apple.');

console.log(apple);


// 3. using typeof on symbol primitive data type

if (typeof apple == 'symbol') {
  console.log(typeof apple);
}


