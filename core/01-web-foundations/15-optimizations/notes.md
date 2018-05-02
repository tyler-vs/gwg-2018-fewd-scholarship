
# 15 optimizations

Goes over RWD patterns for images, tables and typography.

## Responsive Images 

Using `srcset` to let the browser figure out which image is best and then download. 

This is a course in itself in Udacity and as a article in [Google Web Fundamentals](https://developers.google.com/web/fundamentals/design-and-ux/responsive/images). Link to the Responsive Image course by Udacity provided in the Google Web Fundamentals [article](https://developers.google.com/web/fundamentals/design-and-ux/responsive/images).

## Responsive Tables

HTML Tables are sometimes fixed in dimensions and overflows the screen, causing unwanted _horizontal scrolling_. Note, that sometimes horizontal scrolling is used in new responsive navigation components, see [CSS-Tricks article](https://css-tricks.com/pure-css-horizontal-scrolling/) or this [one](https://css-tricks.com/how-to-create-a-horizontally-scrolling-site/). Or in the Reddit App to view subreddits.

The following examples will have some default table styling taken from the [CSS-Tricks article](https://css-tricks.com/responsive-data-tables/) or you can checkout the [gist](https://gist.github.com/tyler-vs/d13b992db765c443e804c4c97917eaac).

```css

/* 
Generic Styling, for Desktops/Laptops 
*/
table { 
  width: 100%; 
  border-collapse: collapse; 
}
/* Zebra striping */
tr:nth-of-type(odd) { 
  background: #eee; 
}
th { 
  background: #333; 
  color: white; 
  font-weight: bold; 
}
td, th { 
  padding: 6px; 
  border: 1px solid #ccc; 
  text-align: left; 
}

```

### Some Options for fixing overflowing tables

Responsive table patterns/techniques include:

- [Hidden Columns](#hidden-columns)
- [No More Tables](#no-more-tables)
- [Contained Tables or Contained Scrolling](#contained-tables-or-contained-scrolling)

**tip:** The answer may depend on the content itself. Start small and ask yourself _"what is the most important information?"_.

### Hidden Columns

The **hidden columns** solutions to responsive tables, essentially hides columns based on their importance as the viewport size gets smaller.

A potential issue with using this responsive pattern is that you are hiding content from the user. A possible way to circumvent this issue is by _using abbreviated data instead of hiding it completely_.


```html

<table class="scores__table">
    <thead>
        <tr>
            <th>date</th>
            <th class="gametime">game time</th>
            <th>team</th>
            <th colspan="2">score</th>
            <th>team</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Friday</td>
            <td class="gametime">7:05pm</td>
            <td>Royals</td>
            <td>2</td>
            <td class="winner">3</td>
            <td class="winner">Giants</td>
        </tr>
    </tbody>
</table>

```

```css

@media screen and (max-width: 499px) {
    .gametime {
        display: none;
    }
}

```

View [pen](https://codepen.io/tvs/full/9568b6163e803ab797da948b5e7f9c72/).

### CSS properties `dislay:none` vs `visibility:hidden`

[Article](https://www.lifewire.com/display-none-vs-visibility-hidden-3466884)

### No More Tables

The __"no more tables"__ technique, below a certain viewport width, the table is _collapsed_ and resembles a long list as opposed to a table data, so that all the data is still visible.

This [codepen example](https://codepen.io/JohnMav/pen/BoGJNy) showcases this technique or [locally in this repo](./no-more-tables-pattern.html).

> it's all about the specific context of your data table that dictates what solution to go with.
> ~ Chris Coyier, [CSS-Tricks](https://css-tricks.com/responsive-data-tables/)

### Contained Tables or Contained Scrolling

The __Contained Tables__ or __Contained Scrolling__ pattern involved wrapping the entire table's `<table>` HTML element in a `<div>` that acts as a _container div_ that applies the following CSS code (example uses pattern CSS with the class of `.container_table`).

```css
/*
 * 1. make table as large as the viewport
 * 2. instead of breaking out of the viewport, the table will instead take 
 *    up the same width as the viewport and allow a user to 
 *    touch scroll horizontally.
 */

div.container_table {
    width: 100%; /* 1. */
    overflow-x: auto; /* 2. */
}

```


## Responsive Typography

### Words per line and ideal "measure" or "line length"

Too short can be confusing yet too long can be difficult to track line-by-line and the user may end up _skimming_ instead of actual reading.

__Measure__ is the length of a line of text.

Some factors for determining an _ideal measure_ may include font being used, device, medium (print or digital). 

General rule of thumb is to use ~65 characters per link (CPL) for the web.

Considering how people read as we create our design as it can affect the layout and perhaps even breakpoints.

Good starter font size CSS:

```css

body {
    font-size: 16px;
    line-height: 1.2;
}

```

Making sure type is bumped up for larger screens.


## Minor Breakpoints

__Major Breakpoints__ - where layout changes significantly.

__Minor Breakpoints__ - for smaller changes.

Examples:

- font size
- margins/padding
- icon sizes


## Quiz: Home Town App part 3 of 3




--- 

- https://developers.google.com/web/fundamentals/design-and-ux/responsive/images
- https://responsiveimages.org/demos/
- https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images
- https://internetingishard.com/html-and-css/responsive-images/
- https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML
- https://www.lifewire.com/display-none-vs-visibility-hidden-3466884
- https://developer.mozilla.org/en-US/docs/Web/CSS/display
- https://css-tricks.com/responsive-data-tables/
- [CSS Tricks round up of possible responsive table solutions/patterns](https://css-tricks.com/responsive-data-table-roundup/).
- https://en.wikipedia.org/wiki/Responsive_web_design
- 