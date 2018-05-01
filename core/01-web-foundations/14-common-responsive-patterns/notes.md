
# 14 common responsive patterns


## RWD Layout Patterns

The following are commonly seen patterns for establishing _responsive __layout__ and include:

- column drop
- mostly fluid
- layout shifter
- off canvas

These patterns were influenced by notable front-end influencer [Luke Wroblewski](https://www.lukew.com/ff/entry.asp?1514). 

## Column Drop

The column drop [live example](https://googlesamples.github.io/web-fundamentals/fundamentals/design-and-ux/responsive/column-drop.html) and [local sample](./pattern-column-drop.html).

The markup, common when using flexbox, will look similar to the below, where there is a container and every immediate child becomes a flex item.

**note:** flexbox is widely supported and used for these examples.

```

<div class="container">
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
</div>

```

## Mostly Fluid



## Layout Shifter

Multiple breakpoints across different screen widths.

Using the `order` CSS property to move sections of layout despite source code order.

```html

<div class="container">
    <div class="box dark_blue"></div>
    <div class="container" id="container2">
        <div class="box light_blue"></div>
        <div class="box green"></div>
    </div>
    <div class="box red"></div>
</div>

```

```css

/*
 * layout shifter css
 */
.container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}

.box {
    width: 100%;
}

/* 500px */
@media screen and (min-width: 500px) {
    .dark_blue {
        width: 50%;
    }

    #container2 {
        width: 50%;
    }
}


/* 600px */
@media screen and (min-width: 600px) {
    .dark_blue {
        width: 25%;
        order: 1;
    }

    #container2 {
        width: 50%;
    }

    .red {
        width: 25%;
        order: -1;
    }
}


```

## Quiz

Quiz starting [point](./Start/index.html) and my [solution](./Solution/index.html).

---

- [Google web fundamentals, contains examples from this lesson as well.](https://developers.google.com/web/fundamentals/design-and-ux/responsive/patterns)
- 
 