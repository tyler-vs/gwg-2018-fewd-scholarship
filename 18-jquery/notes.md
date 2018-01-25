
# 18-jQuery

## Why use jQuery

UX > browser support


### using browser console to check for jQuery

Due to it's popularity, jQuery is widely used on 
around 66% of all websites, so it is likely loaded in 
on the webpage. To check you can use the browser's js console.

In the console type `jQuery` or even `$` which should return 
something like this `ƒ (a,b){return new n.fn.init(a,b)}`,
use the `typeof` operator to see what data type it is: `typeof(jQuery)` 
to reveal that jQuery is a function, and like most things in JS 
a function is an object in JS.



## $ and jQuery

jQuery collections, is an "array-like" object, it looks and 
behaves like an array but with additional methods.


## hosting jquery

Some options include:

- locally
- jQuery official via `<script>` tag, [see](https://jquery.com/download/#using-jquery-with-a-cdn)
- via a CDN (Content Delivery Network) such as Google: [see](https://developers.google.com/speed/libraries/#jquery)


### Which version?

The version of jQuery should be identifiable via the numbers shown in the 
jQuery filename.

jQuery version 2.0 is a slimmer file size because it does not 
include code that supports legacy browsers such as IE6, 7, and 8

### Use minified version for production

When using the library in production, opt for the minified version of jQuery 
which you can also identify in the filename. If it is a minified version then
 `.min` should be present in the file name, a common convention used 
for scripts that have gone through minification.


## jquery selectors

jquery uses CSS-like selectors for finding elements.

[docs on selectors](https://api.jquery.com/category/selectors/)

The basic flow when using jQuery is:

1. find elements to act upon using CSS-link selectors
2. do something with the elements using jquery methods


## jquery dom traversal

some methods:

- `.parent()`
- `.parents()`
- `.children()`
- `.find()`
- `.siblings()`

[See docs on traversing](https://api.jquery.com/category/traversing/)
[See docs on filtering](https://api.jquery.com/category/traversing/filtering/)

**pro-tip:** reading the documentation is important for fully understanding a library like jQuery.


