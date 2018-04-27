
# 02 HTML Syntax

## TOC

- [HTML Doctypes](#html-doctypes)
- [Text Editors](#text-editors)
- [Encoding](#encoding)
- [HTML and Trees](#html-and-trees)
- [Some basic HTML Elements](#some-basic-html-elements)
- [Paths](#paths)
- [Mock-up to Website](#mock-up-to-website)

## HTML Doctypes

Browsers looks for the doctype declaration to determine which rendering mode to use to render the site. Without a declared doctype, the browser will default to trying to render in "quirks mode", which may cause rendering issues/errors.

[MDN on doctypes](https://developer.mozilla.org/en-US/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)

## Text Editors

- http://aquamacs.org/
- http://emacsrocks.com/
- https://www.gnu.org/software/emacs/
- http://www.openvim.com/
- http://www.vim.org/index.php

https://en.wikipedia.org/wiki/Editor_war


A modern basic web page.

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <meta name="description" content="This extra meta data helps page's SEO by desribing the page's content.">
</head>
<body>
    <h1>Hello world</h1>
</body>
</html>

```

## Encoding

### the `<meta>` tag, usually found in the `<head>` element.

`<meta charset="UTF-8">` is a meta tag with `charset` HTML attribute to declare the text's encoding.

### [HTML validators](https://validator.w3.org/)

HTML validation includes simple tools that will scan your page for HTML related errors or issues. Different issues will be reported based on the HTML `doctype` declared for the document. If omitted it will default to HTML 4.

## HTML and Trees

There exists a relationship between data trees and HTML. 

- tree structures allow you to organize HTML docs into meaningful sections
- helpful for readability _and_ to provide a consistent structure for styling and programmatic control with CSS and JavaScript.

## Some basic HTML Elements

- HTML button element
- Headers (h1-h4)
- Lists
- Anchor links
- Images
- HTML [`<figure>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure) element.

## Paths

A path is the route we take along branches of the tree (file system) to get to the directory or file we want.

A path is a way of desribing where a file is stored.

When it comes to front end web development there are two domains for paths that need to be considered:

- **local** files, paths to find files on your computer
- **external** files, paths to find files on other computers


### Local Paths

- **file system**, OS way of organizing your files into a tree-like structure of directories.
- **root**, the top-most directory, containing all other directories.
- the **current working directory**, the directory which we currently are located within at any given time on an OS
- the **home directory**
- the **parent directory**

### Absolute pathnames

An *absolute pathname* begins with the root directory and follows the tree branch by branch until the path to the desired directory or file is completed.

`/User/MyUser/Documents/file.txt`

### Relative pathnames

A *relative pathname* starts from the working directory instead of the root directory.

`/images/image01.png`

`../images/images02.png`

`./css/styles.css`

```

- project
    - css/
        - styles.css
    - images/
        - image01.png
        - image02.png
        - ...
    - js/

    index.html

```


### External Paths

**Server**, the computer that is responsible for *serving* a given website files. Servers store files and send them to computers who request them (the requesting computers are called clients).


### Figures

…

## Mock-up to Website

### Relationship between devs and designers

Web developers commonly work with designers, while the designers usually focus on creating _user experience_ and _user interfaces_ the web developer usually takes the designers composition/mock-ups and transforms it to work on the web medium.

Web developers _translates_ a designer's mock-up into a live site, _translate_ because the web developer can create the the same website design using different HTML elements (i.e. using generic `<div>`'s and `<span>` compared to using semantic HTML5 elements like `<header>`, `<footer>`, ect.)

### The process of _translating_ a mock-up into a live site

First and foremost, start by taking a few minutes to analyze the mock-up and ask yourself some questions related to implementing the site.

- what text changed?
- what images are there?

When _translating_ things onto the web medium, your typically generally thinking in squares, positioning and complex nesting in order to acheive layouts.

A general workflow may look like:

- position text content to match mock-up
    + _Note:_ If using a CMS like WordPress, this may entail an additional step of getting the correct data flowing from back-end to front-end.
- style the content to match the mock-up
- add any images that are missing, and make it a concern to provide accessible enhancements, such as using the `alt` attribute with meaningful content.


---


#### Resources

- [MDN's HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [Unicode Character Table](https://unicode-table.com/en/)
- Wikipedia Articles
    + [Unicode](https://en.wikipedia.org/wiki/Unicode)
    + [Character encoding](https://en.wikipedia.org/wiki/Character_encoding)
- [Joel on Software - what every developer should know about text](https://www.joelonsoftware.com/2003/10/08/the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/)
- <http://www.i18nguy.com/unicode/codepages.html#msftdos>
- <https://www.unicode.org/>
- [markdown language documentation](https://daringfireball.net/projects/markdown/)
