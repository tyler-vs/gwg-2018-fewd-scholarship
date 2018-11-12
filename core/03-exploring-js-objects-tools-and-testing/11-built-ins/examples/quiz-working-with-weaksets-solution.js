/*
 * Programming Quiz: Using Sets (3-2)
 *
 * Create the following variables:
 *     - uniqueFlavors and set it to a new WeakSet object
 *     - flavor1 and set it equal to `{ flavor: 'chocolate' }`
 *     - flavor2 and set it equal to an object with property 'flavor' and value of your choice!
 *
 * Use the `.add()` method to add the objects `flavor1` and `flavor2` to `uniqueFlavors`
 * Use the `.add()` method to add the `flavor1` object (again!) to the `uniqueFlavors` set
 */

const uniqueFlavors = new WeakSet();

let flavor1 = {
  flavor: 'chocolate',
};

let flavor2 = {
  flavor: 'strawberry',
};
console.log(uniqueFlavors);

// Add flavor objects to Weak Set
uniqueFlavors.add(flavor1);
uniqueFlavors.add(flavor2);

// Add flavor 1 object to Weak Set again
uniqueFlavors.add(flavor1);

console.log(uniqueFlavors);