
# 08 CSS Syntax Problem Set

**Updated for Phase 2**

This lesson is a problem set, see the solution from phase 1 [here](./fend-animal-trading-cards-master/card.html).

## TOC

1. style and image
2. style the font
3. writing selectors
4. using attributes
5. slack card
6. slack card workspace
7. udacity site header
8. stylesheet

- [Resources](#resources)
- 

---

## style and image

some CSS properties for images:

### [borders](https://developer.mozilla.org/en-US/docs/Web/CSS/border)

### cursors

cursors while subtle can give visually feedback when trying to communicate things to the user. These subtle changes, usually are handled by the browser already like the default cursor changing to a pointer when hovering over a HTML link/button. 

See the many cursor variants at this [CSS-Tricks article](https://css-tricks.com/almanac/properties/c/cursor/).

>The cursor property in CSS controls what the mouse cursor will look like when it is located over the element in which this property is set. Obviously, it only is relevant in browsers/operating systems in which there is a mouse and cursor. They are used essentially for UX - as they convey the idea of certain functionality. So try not to break that affordance =).


```css

.auto            { cursor: auto; }
.default         { cursor: default; }
.none            { cursor: none; }
.context-menu    { cursor: context-menu; }
.help            { cursor: help; }
.pointer         { cursor: pointer; }
.progress        { cursor: progress; }
.wait            { cursor: wait; }
.cell            { cursor: cell; }
.crosshair       { cursor: crosshair; }
.text            { cursor: text; }
.vertical-text   { cursor: vertical-text; }
.alias           { cursor: alias; }
.copy            { cursor: copy; }
.move            { cursor: move; }
.no-drop         { cursor: no-drop; }
.not-allowed     { cursor: not-allowed; }
.all-scroll      { cursor: all-scroll; }
.col-resize      { cursor: col-resize; }
.row-resize      { cursor: row-resize; }
.n-resize        { cursor: n-resize; }
.e-resize        { cursor: e-resize; }
.s-resize        { cursor: s-resize; }
.w-resize        { cursor: w-resize; }
.ns-resize       { cursor: ns-resize; }
.ew-resize       { cursor: ew-resize; }
.ne-resize       { cursor: ne-resize; }
.nw-resize       { cursor: nw-resize; }
.se-resize       { cursor: se-resize; }
.sw-resize       { cursor: sw-resize; }
.nesw-resize     { cursor: nesw-resize; }
.nwse-resize     { cursor: nwse-resize; }

```

custom image cursors like old 90's website used:

```css

.custom {
  cursor: url(images/my-cursor.png), auto;
}

```

More notes on cursor at [MDN docs page on the subject](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor).

For posterity, some web resources for custom cursor images, however there is a reason that you do not see these anymore - very tacky.

- http://www.cursors-4u.com/
- http://www.totallyfreecursors.com/

For touch screen interfaces, there is no cursor.

Salmon color HEX code: `#fa8072`.

### box-shadow

- https://www.cssmatic.com/box-shadow


## style the font

- `#8001ff`

### Fonts

First, ask yourself what fonts are available to your users. Every operating system comes with pre-installed fonts.

### Web safe fonts

https://www.cssfontstack.com/

The `font-family` CSS property to specify font's to use in an HTML document.

The browser, starting from left to right, looks through the specified fonts and determines which font(s) can be renders, so using a web-safe font should be the last resort and placed last (the most rightmost) in a font stack. **Not all fonts are available on every operating system.**

Example of Georgia (serif font) CSS font stack

`font-family: Georgia, Times, Times New Roman, serif` from [cssfontstack.com](https://www.cssfontstack.com/Georgia).

### Custom fonts

https://fonts.google.com/

#### Font stacks

…

## writing selectors

Every CSS statement is made up of a __selector__ and a __declaration block__.



## using attributes

- [MDN CSS selector docs](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Selectors)
- [CSS-Tricks how CSS Selectors Work](https://css-tricks.com/how-css-selectors-work/)
- [CSS-Tricks CSS specificity article](https://css-tricks.com/specifics-on-css-specificity/)




## slack card




## slack card workspace




## udacity site header


## stylesheet

**Stylesheets**- A stylesheet is a file containing the code that describes how elements on your webpage should be displayed.

the `<link>` element can be used to link an external CSS stylesheet.

the `rel` attribute describes the relationship between the resource and your document.

```html
<link href="path-to-stylesheet/stylesheet.css" rel="stylesheet">
```


---

## Resources

- [CSS reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
- [CSS-Tricks CSS Almanac](https://css-tricks.com/almanac/)
- https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties
- https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
- 


