
# 20-jquery-events

## using Chrome DevTools to monitor events

**note** - this method is only available within Chrome DevTools console

`monitorEvents()`, listen to events of a certain type.

[see docs](https://developers.google.com/web/tools/chrome-devtools/console/events?hl=en#monitor-events).

example usage

`monitorEvents(document.body, 'click')`

the first parameter is the object to monitor.

all events return if the second parameter is not provided.

to specify certain events, pass either a string or an array of strings as the second parameter.

`monitorEvents(document.body, ['click', 'hover'])`

test the above on this [demo page](https://udacity.github.io/intro-to-jquery/).


## anatomy of a jquery event listener

three parts of a jquery event listener

1. the target element to listen to
2. the vent we want to react to
3. the action(s) to take in response

```js

$( '.selector' ).on( 'keypress', function() {
    $('body').css('backgroundColor', 'blue');
});

```


## the event object

the event object is an object that gets passed to an event listener's callback function. 

### the target property of the event object

one of the most useful properties of the event object is the `target` property, which holds the page element that is the target of an event.

keep in mind that the target element calls the callback when the event occurs.

the `target` property is very useful when an event listener has been setup on multiple number of elements.

```js

$( 'article' ).on( 'click', function( evt ) {
    $( evt.target ).css( 'background', 'red' );
});


```

**pro tip** the `event` object also comes in handy when you want to prevent the default action that the browser would perform.

For example, to remove the default behavior of a anchor element, you can use the event object in the callback of a event handler and then use it's `preventDefault` method to prevent to button to redirecting to the value in it's `href` attribute.

```js

$( '#myAnchor' ).on( 'click', function( evt ) {
    evt.preventDefault();   // <-
    console.log( 'You clicked a link!' );
});

```

other common usages with the event object are:

- `event.keycode`, figure out which key was pressed
- `event.pageX` and `event.pageY`, find out where on the page an event occurred, analytics tracking
- `event.type` to find out what event just happened

resources, further reading

- <https://api.jquery.com/category/events/event-object/>
- <https://api.jquery.com/event.target/>
- <https://www.w3.org/TR/DOM-Level-3-Events/>


## convenience methods in jquery

basically are shortcuts for certain events so you do not have to use `.on` solely.

a bit of bias here, some sources say that it would be better to use only event types allowed with the `.on` method.

see <https://api.jquery.com/category/events/>.

## event delegation with jquery

be careful not to set up an event listener and _then_ create the target element afterward because the newly created element may not be available yet for jquery to add an event listener to yet.

this scenario is where **event delegation** comes handy.

**event delegation** is when we listen to events that hit a parent element, and then pay attention to the target of those events (likely through using the event object in the callback function)

```js

$('.container').on('click', 'article', function() { … });

```

above tells jquery to watch the `.container` element for clicks, and then if there are any, check if the click event's target is an `article` element.

**pro-tip** use event delegation to consolidate the number of event listeners.

example, instead of adding event listeners to all the `li` items in an `ul`, use event delegation to handle:

```js

$('ul li').on('click', function() { … });

// instead use the parent element to delegate
$('ul').on('click', 'li', function() { … });

```

---

#### resources/further readings

- <https://learn.jquery.com/events/>
- <https://learn.jquery.com/events/event-delegation/>
- <https://api.jquery.com/category/events/>
- <https://api.jquery.com/on/>


