# Style

objectives of the style lesson:

- ensuring elements are styled to support the accessibility work that is implementing (e.g. focus ring)
- flexible UI's for zooming and scale up for users with reading issues
- color contrasts

## working with focus styles

without the focus ring, it may become difficult for a user to know what element is currently focused.

[WebAIM checklist item 2.4.7 focus visible](https://webaim.org/standards/wcag/checklist#sc2.4.7) - it is visually apparent which page element has the current keyboad focus.

i.e. as you tab through the page, you can see where you are.

- `:focus` [psuedo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus) - 
- `outline`[CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/outline)
- `:hover` [psuedo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover)
- `::before:` [psuedo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/::before)


`focus` & `outline`

```css

input:focus {
  color: red;
}

/*shows on non-white bg*/
html {
  background: blue;
}

:focus {
  outline: 1px dotted #fff;
}

/*anti-pattern*/
:focus {
  outline: 0;
}


```

`:hover`

```css

button:hover {
  background: #91e63;
  color: #FFFFFF;
  text-decoration: underline;
}

```

1. combining `:focus` and `:hover` so same styles applies to both states
1.1 an additional style to help 
2. also use this to additional style to differentiate the 
   the element that has focus. Also provides consistency since each browser uses 
   their own styles for this functionality.

```css


/* 1. */
button:hover,
button:focus {
  background: #91e63;
  color: #FFFFFF;
  text-decoration: underline; /* 1.1 */
}

/* 2. */
button:focus {
  outline: 0;
  box-shadow: 0 0 8px 3px rgba(255,255,255,0.8);
}

```

