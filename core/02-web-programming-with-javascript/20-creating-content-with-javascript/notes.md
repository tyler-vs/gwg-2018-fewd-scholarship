
# lesson 20 - creating content with javascript

## intro

[Lesson REPO](https://github.com/udacity/course-JS-and-the-DOM).

- create
- delete
- manipulate

basically CRUD operations.

## update existing page content

- `.innerHTML()`
- `.outerHTML()`

`.innerHTML()` `.outerHTML()`

- `textContent()`
- `innerText()`

## add new page content

## remove page content

## style page content

controlling page and element styling using the following properties and methods:

- `.style.<prop>`
- `.cssText()`
- `.setAttribute()`
- `.className`
- `.classList`

### CSS specifiticy

> the means by which the browsers decide which CSS property values are the most relevant to an element and, therefore, will be applied.

Check out how css specificity is calculated on [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity).

[Article on Specificity](https://www.smashingmagazine.com/2007/07/css-specificity-things-you-should-know/)

### modifying an element's style attribute, `HTMLELement.style.<prop>`

involves caching a dom element to a js variable and then modifying the element's style attribute, better known as an _inline style_ (see [MDN Docs on matter](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style)), which in terms of css specificity is considered the most specific and better to overrule and apply style rules to an element. 



```js

// cache the dom element
const heading = document.querySelector('h1');

// use the style property
heading.style.color = 'red';

```

resulting HTML doc:

```html

<h1 style="color:red;">Hello world</h1>

```

This is done through the `HTMLElement.style` property, can be used to get and set the inline style of an element.

The only bad part about using this method to change an element's style attribute is in the scenario where a many style changes would occur to an element. This daunting task can be better taken care of by using the `style.cssText` property.

Use `.style.<prop>` for setting on style on an element at a time, for controlling multiple styles, checkout `.style.cssText` property.


### `.style.cssText` property

Unlike setting styles with _camelCase_ when using `.style.<prop>`, the `.cssText` allows you to write css styles for elements just as you would in regular css: `font-size` instead of `fontSize`.


when using `.cssText` be careful, because if an element already has an existing `style` attribute with style rules in it, those styles will be over written when by styles set by using `.cssText`. See example [`20-5-2.html`](./examples/20/20-5-2.html)

### setting an element's attributes

another alternative is to use `.setAttribute` method.

```js

const mainHeading = document.querySelector('h1').setAttribute('style', 'color: blue; background-color: orange; font-size: 3.5rem;');

```

#### separation of concerns and CSS-in-JS

html should ideally be strictly content and semantics just as css should only concern styling and js concern only adding dynamic web interactivity. The course recommends that instead of mingling CSS in JS, that JS should instead be used to trigger/toggle or apply, remove class names which still allows css to dictate styles instead of through JS. 

i.e. it would be better it iterate through DOM nodes and apply or modify css class names than applying styles through the element's style attrubute (Considered poor practice).

[example 20-5-3.html](examples/20/20-5-3.html).


### accessing an element's classes


`.className`


## outro

