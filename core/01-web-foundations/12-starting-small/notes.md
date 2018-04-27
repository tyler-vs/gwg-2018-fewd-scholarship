
# 12 starting small

this lessons content corresponds to this [web fundamentals post](https://developers.google.com/web/fundamentals/design-and-ux/responsive/).

## defining the browser viewport

the __viewport__ defines the area of the screen that the browser can render content too.


## devices, displays and pixels

__device-independent pixels (also _density-independent pixel, dip, or dp_)__ - is a physical unit of measurement based on a coordinate system held by a computer and represents an abstraction of a pixel for use by an application that an underlying system then converts to physical pixels.[1]

supplemental definitions:

- A unit of measurement that relates pixels to real distance.
- __density independence__ refers to the uniform display of UI elements on screens with different densities.
- __dips__, are flexible units that scale to uniform dimensions on any screen.
- A __dp__ is equal to one physical pixel on a screen with a density of 160.

### calculating dp:

`dp = (width in pixels * 160) / screen density`

A __dip pixel__ will take up the same amount of space on a display regardless of the pixel density of a display.

### font boosting

__font boosting__ - is when the browser tries to guess what the primary content on a web page is and then scale it up, usually by increasing the primary content's font size while other text content is not scaled up.

__hardware pixels__ - actual physical pixels on a device.

__device pixel ratio (DPR)__ - 

__pixel density__ - the number of pixels that fit into an inch is referred to as "pixel density". High-density screens have more pixels per inch than low-density ones.

__screen resolution__ - refers to the total number of pixels in a display.

`screen density = screen width (or height) in pixels / screen width (or height) in inches`

__scalable pixels (sp)__ - serve the same functions as __dp__, _but for fonts_. The default value of an sp is the same as the default value for dp.

the primary difference between sp and a dp is that sp perserves a user's font setting, i.e. larger text settings for accessibility.

### designing layout for dp

using the `dp = (width in pixels * 160) / density`

### calculating DPR (device pixel ratio)

### calculating CSS pixels

`number of hardware pixels / DPR = # CSS pixels`


### calculating Viewport widths

`physical pixels / dpr = viewport width`

## setting the viewport

a meta viewport tag gives the browser instructions on how to control the page's dimensions and scaling.

`<meta name="viewport" content="width=device-width, initial-scale=1">`

## large fixed width items

potential issues:

- large fixed with elements
- absolutely positions

solutions:

- using relative units to prevent overflow, (i.e. width: 80% instead of width: 500px;)


## max-width on elements

```css

img,
embed,
object,
video {
    max-width: 100%;
}

```


## relative sizes

see solutions.

## tap target sizes

Human fingers about 10 mm, 1/2 inch or 40 CSS pixels. Golden rule, 48x48, 40 pixels of room between tap targets.

```css

nav a,
button {
    min-width: 48px;
    min-width: 48px;
}

```

simply using `width` and `height` CSS properties may not work because it won't allow element to resize _if the element inside is bigger than the container_.

## start small

mobile-first design, starting with the smallest form factor, is there a need for a design for a wider screen?

See https://en.wikipedia.org/wiki/Responsive_web_design

### prioritize content

content -> upside-down funnel.



---

- https://en.wikipedia.org/wiki/Device-independent_pixel
- http://thenewcode.com/564/Understanding-Pixel-Density-Resolution-and-Retina-Displays
- https://www.html5rocks.com/en/mobile/high-dpi/
- http://alistapart.com/article/responsive-web-design/
- https://developer.chrome.com/devtools
- https://github.com/google/ios-webkit-debug-proxy
- http://sebastien-gabriel.com/designers-guide-to-dpi/
- https://material.io/guidelines/layout/units-measurements.html
- https://www.sitepoint.com/how-to-simulate-mobile-devices-with-device-mode-in-chrome/
- https://developers.google.com/web/tools/chrome-devtools/device-mode/emulate-mobile-viewports
- https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag
- 
