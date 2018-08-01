# 05 ARIA

## Intro to semantics

So far:

- DOM order
- focus
- keyboard
- semantics
- labelling
- headings and semantic page elements
- landmark roles
- creating semantic links


## why ARIA?

in this lesson: how to express elements that native HTML5 cannot do alone.

for when instances when native HTML does not cut the accesibility, the following are initiatives for bringing areas where there is an issue:

__WAI__ - Web Accessibility Initiative
__ARIA__ - Accessible Rich Internet Applications

or commonly seen referred to as: __WIA ARIA__.

__ARIA__ works by adding semantic attributes to elements that modify the way the element is translated into the _accessibility tree_.

__ARIA Relationships__ - are relationship HTML element attributes that creates a semantic relationship between elements on a page.

__Example:__ Notice in the example, how the attribute is applied to the `<div>` element and associated with the `id` attribute of the `<span>` element.

```html

<!-- ARIA relationships -->
<div aria-labelledby="0d01">foo</div>
<span id="0d01">Chapter foo</span>

```

```html

<div class="menu" role="menu">
    <div role="menuitem" aria-haspopup="true">new</div>
    <div aria-owns="submenu"></div><!-- linked -->
</div>
<!-- /.menu -->
<div class="submenu" id="submenu" role="menu"><!-- linked -->
    div[role=menuitem]{document}
</div>
<!-- /#submenu.submenu -->


```

__aria-activedescendant__

```html

<!-- mennu item for screen readers -->
<div role="listbox" tabindex="0" aria-activedescendant="i3">
    <!-- ... -->
    <div role="option" id="i1">Item 1</div>
    <div role="option" id="i2">Item 2</div>
    <div role="option" id="i3">Item 3</div><!-- active descendant -->
    <div role="option" id="i4">Item 4</div>
    <div role="option" id="i5">Item 5</div>
    <!-- ... -->
</div>

```

__aria-describedby__

for supplementary _but_ not essential information.

```html

<!-- exmaple: password input field with supplemental text. -->
<label for="pw">password:</label>
<input type="password" id="pw" ariab-describedby="pw-help">
<div id="pw-help">password must be at least 12 characters long</div>

```

__aria-posinset__ && __aria-setsize__

work together, about defining a relationship between sibling elements.

__aria-posinset__ - position in set.

__aria-setsize__ - size of set.

```html

<!-- example: a set, a list (pretend using lazy loading the full set, avoid loading a large list at one time.) -->
<div role="listbox">
    <div role="option" aria-posinset="857" aria-setsize="1000">Item 857</div>
    <div role="option" aria-posinset="858" aria-setsize="1000">Item 858</div>

</div>

```

only relevant parts of the page are exposed to assistive technology,  

```html

<!-- example: explicitly hidden so not seen in accessibility tree -->

<button style="visibility: hidden;"></button>

<div style="display:none"></div>

<span hidden="hidden"></span>


```

```css

.screenreader {
    position: absolute;
    left: -100000px;
    width: 1px;
    height: 1px;
    overflow: hidden;
}

```

### `aria-live`

```html

<div class="alertbar" aria-live="assertive">
    could not connect!
</div>
<!-- /.alertbar -->

```


