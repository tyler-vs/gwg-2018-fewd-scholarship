# 21-working-with-browser-events

## introduction

lesson overview:

- what are events
- responding to an event and how to listen for one
- removing an event listener
- event data that has useful info when working with events
- stopping an event
- event lifecycle
- DOM readiness, event to know when the DOM itself is ready

### using `monitorEvents()` in chrome web browser

Using `monitorEvents()` method instructs DevTools in Chrome to log information about specific events.

- https://developers.google.com/web/tools/chrome-devtools/console/events#monitor_events

to use the `monitorEvents()` method, specify an object to monitor for the first parameter. first open the js console in chrome web browser on a web page.

`monitorEvents(document)`
`monitorEvents(document.body)`

an optional second param may be a certain _event type_, or an array of _event types_.

`monitorEvents(document.body, 'click')`
`monitorEvents(document, ['click', 'dblclick', 'scroll', 'resize'])`

to stop monitoring events, use the `unmonitorEvents()` method.

[See demo](examples/21/monitor.html).

**Note: that using the monitorEvents() method is mainly used for testing and development purposes, not production code.**

## respond to events

### an _event target_

the _event target_ interface is inherited by all nodes and elements.

> the event target is an interface implemented by objects that can receive events and may have listeners for them

and

> elements, documents and windows are the most common event targets, but other obejcys can be event targets too…

Both the _document_ object and any _DOM element_ can be an event target because _both the Element interface and Document interface inherit from the EventTarget interface_.

since the EventTarget is at the top of the chain, it does _not_ inherit any properties or methods from any other interfaces (like document, element or node).

- https://developer.mozilla.org/en-US/docs/Web/API/EventTarget
- https://developer.mozilla.org/en-US/docs/Web/Events
- https://developer.mozilla.org/en-US/docs/Web/Guide/Events
- https://developer.mozilla.org/en-US/docs/Web/API/Event

an _event listener_ needs three things:

1. target
2. type of event
3. listener - the function to run when the event occurs

## remove an event listener

## quiz

## avoid too many events

See [`many.html`](examples/21/many.html) example, which illustrates using `addEventListener` to elements as they are created in a `for loop`.

the `many.html` example is actually poor in performance, instead a technique called __event delegation__ is used which uses a single `addEventListener()` handler on a group of elements common ancestor, i.e. a list element can have a event handler addded to it instead of having to add an event handler to each individual list item.

to use the _event delegation_ pattern we also must make use of the `.target` property of the _event object_. Recall that the _event object_ is automatically created when an event is fired and contains useful information about that event.

- [`nodetype.html`](examples/nodetype.html)
- [`nodetype1.html`](examples/nodetype1.html)

## dom readiness

The DOM is built incrementally which has potential to be problematic, say that the script is places near the top of a HTML document, if that script is supposed to interact with elements, and those elements have yet to be built, then the script will fail. This is why it is a common practice to place `<script>` elements near the bottom of an HTML document, or using a technique to delay a script from running until the HTML doc is fully loaded.

### which is faster, an inline `<script>` or external JS file?

An inline `<script>` tag is faster because it does not require the browser to make an additional HTTP request, although best practices and separation of concerns principal whould say it is best to place all JS in an external JS file, perhaps inline script is good for _above the fold_ content?

### domcontent loaded event

`DOMContentLoaded` vs `document.onload`, `load` evt.

`load` fires later than `DOMContentLoaded` because `load` waits until all of the images, stylesheets, ect. have been loaded (everything referenced by the HTML).

### when to place `<script>` in the `<head>`?

> More code is ually not the best way to do something

_If you need a script to run as possible_ then use the technique of placing a JS script in the `<head>` and wrapping that script with the `DOMContentLoaded` event listener. So then the script will run as soon as possible _but_ still wait for the rest of the document to load.


[DOMContentLoaded on MDN](https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded)

**tip: use the DevTools Network pane to see the DOMContentLoaded highlighters.**

Use the `document` object as the _target event_ that listens for the `DOMContentLoaded` event.

`load` event fires _after_ the `DOMContentLoaded` event, `load` waits until everything referenced in the HTML document have been loaded (stylesheets, images, ect.). `DOMContentLoaded` was not added until later browsers so older code will usually use the `load` event which _is supported by older browsers_.

### speeding up

if you want DOM to get paprsed as fast as possible after the user had requested the page, some things you could do is turn you javascript asynchronous and to optimize loading of stylesheets.


```html
<script>
  document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
  });

for(var i=0; i<1000000000; i++)
{} // this synchronous script is going to delay parsing of the DOM. So the DOMContentLoaded event is going to launch later.
</script>

```

### synchronous vs asynchronous

[MDN article](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests)

## outro