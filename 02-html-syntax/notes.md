
# 02 HTML Syntax

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

`<meta charset="UTF-8">` is a meta tag with `charset` HTML attribute to declare the text's encoding.

### [HTML validators](https://validator.w3.org/)

HTML validation includes simple tools that will scan your page for HTML related errors or issues. Different issues will be reported based on the HTML `doctype` declared for the document. If omitted it will default to HTML 4.

## HTML and Trees

There exists a relationship between data trees and HTML. 

- tree structures allow you to organize HTML docs into meaningful sections
- helpful for readability _and_ to provide a consistent structure for styling and programmatic control with CSS and JavaScript.

## Some basic HTML Elements

- HTML button
- Headers (h1-h4)
- Lists
- Anchor links
- Images

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
- 
