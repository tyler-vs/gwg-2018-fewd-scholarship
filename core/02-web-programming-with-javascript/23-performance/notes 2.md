# performance

## addingn page content efficiently

### `for loop` performance

### testing code performance with `performance.now()`

`performance.now()` returns a timestamp that is measured in milliseconds. This can be used to measure speed of code.

1. use `performance.now()` to get an initial start time for the code
2. run the code you want to test
3. execute `performance.now()` to get another time measurement
4. subtract the initial time from the final time to measure speed of code

See [Example](examples/23/performance.html)

### reflow and repaint

the browser has to go through a `reflow` calculation to determine the new screen layout and then `repaint` the screen.

if a script has a loop that appends to the html documents, this `reflow` and `repaint` procews occurs more often, instead a document fragment should be used to generate the new content and then append it less if not once to the html document, which cuts down how many time `reflow` and `repaint` occur.

### document fragment

a document fragment represents a minimal document object that has no parent. it is used as a lightweight version of Document that stores a segment of a document structure of nodes just like a standard document.

the benefit of using a document fragment:

the key difference is that because the document fragment is not part of the active document tree structure, changes made to the fragment do not affect the document, cause reflow or incur any performance impact that can occur when changes are made.

Using the `createDocumentFragment()` method to . create an empty DocumentFragment object, it is similar to `document.createElement()`.

#### example

```
// create variable to cache 
const myDocFrag = document.createDocumentFragment();

// while looping append new items to the myDocFrag variable

// when the loops over, append to the body of the HTML document

```

### further research

- https://developer.mozilla.org/en-US/docs/Web/API/Performance/now
- https://developer.mozilla.org/en-US/docs/Web/API/Performance
- https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment
- https://developer.mozilla.org/en-US/docs/Web/API/Document/createDocumentFragment


### performance interface

the `performance.now()` method is apart of the `High Resolution Timer` which was addded by the _WebPerf Working Group_ according to this [HTML5Rocks article](https://developers.google.com/web/updates/2012/08/When-milliseconds-are-not-enough-performance-now).

It has more accurate timing than the `Date.now()` method.

The _performance interface_ (recall the node interface and element and document interface from previous lessons) provides acces to performance-related information for the current page. 


### [document fragment docs](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment)

a common use for the `DocumentFragment` is to create one, assemble a DOM subtree (as in the example above) within it, then append or insert the fragment into the DOM using `Node` interface methods such as `appendChild` or `insertBefore`.

EventTarget > Node > DocumentFragment

## reflow and repaint

__reflow__ is the process of the browser laying out the page. it happens when you first display the DOM (generally after the DOM and CSS have been loaded), and happens again every time something could change the layout. this is a fairly expensive (slow) process.

__repaint__ happens after a reflow as the browser draws the new layout to the screen. this is fairly quick, but you still want to limit how it happens.

### reflow and repaint performance patterns

the general technique is that if you are making a group of changes, hide/change all/show is a great apptern to use if the changes are relatively contained.

### virtual dom

this is why React and other "virtual DOM" libraries are so popular. when using such libraries, you do not make changes to the DOM, but make changes to another structure, a "virtual DOM" and the library calculates the best way to update the screen to match. the catch being that you have to rework your code to use whatever library you are adopting, and sometimes you can do a better job updating the screen yourself because you understand your own unique situation.

### end game

the end game with reflow and repaint in pertaining to code is that you want to make your code to cause the fewest number of reflows as possible.

--- 

- https://developers.google.com/speed/docs/insights/browser-reflow
- https://developers.google.com/web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing
- https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/reference#rendering
- http://www.stubbornella.org/content/2009/03/27/reflows-repaints-css-performance-making-your-javascript-slow/
- https://developer.mozilla.org/en-US/Firefox/Performance_best_practices_for_Firefox_fe_engineers


## the call stack

### single theading

JS is single-threaded language, single-threading is the processing of one command at a time. JavaScript can only perform a single task at a time.


### the call stack

the javascript engine keeps a call stack (basically a list) of the functions that are running. when a function is invoked, it is added to the list. when all of the code inside a function has been run, then the function is removed from the call stack. A function does not have to complete before another function is added to the call stack.

- https://www.youtube.com/watch?v=J9iKeNhoXNM 
- https://en.wikipedia.org/wiki/Thread_(computing)#Single_threading
- https://developer.mozilla.org/en-US/docs/Glossary/Call_stack

## the event loop

terms:

- run-to-completion
- single-theaded

another term is _synchronous_ which means, exisitng or occuring at the same time.

none synchronous code, where the code is written like any other code, but is executed at some later point in time. 

- event listener code, i.e. `keypress`
- setTimeout code, i.e. `setTimout(function())`

### running code later

as seen when using event listeners

- where does the function go to wait
- how does the function get ran when it needs to

the JS event loop solves those questions

### The JS event loop

the simplest explaination of JavaScript's _concurrency model_ uses two rules: If some JS is running, let is run until finished. If no JS is running, run any pending event handlers.

three parts you have to think about around the event loop:

1. the call stack
2. Web APIs/the browser [environment]
3. an Event Queue

both `addEventListener()` and `setTimeout()` are Web APIs.

due to run-to-completion nature of javascript language, if a script is running that add and event listener, then that event listener function cannot work until the current script running context finishes, instead that evt listener functions (assuming it is ran, occurs before the end of the current running context) it is placed in the queueu.

when all of the functions in the call stack have finished (also known as _idle time_), the the queue is checked to see if anything is waiting.

1. current synchronous code runs to completion.
2. events are processed when the browser is not busy.

asynchronous code (such as loading an image) runs outside of this loop and sends an event when it is done.

![call stack](img/l4-performance-js-the-dom.jpg)

> When this code is run, the iceCream function is given to the browser. When the <footer> is clicked, the code moves to the Queue. Then, when the Call Stack is empty, iceCream is moved over to the Call Stack and invoked. 

#### further research

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop
- https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Overview_of_Events_and_Handlers
- https://www.youtube.com/watch?v=8aGhZQkoFbQ

## `setTimeout()`

the concept of running code at a later time with methods such as `setTimeout()`.

allows us to use a performance technique where we convert potential long-running code to one that is broken up to allow for the browser to handle user interactions.

