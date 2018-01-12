


# 02 html syntax


## HTML Doctypes

Browsers looks for the doctype declaration to determine which rendering mode to use to render the site. Without a declared doctype, the browser will default to trying to render in "quirks mode", which may cause rendering issues/errors.

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

### Encoding

`<meta charset="UTF-8">` is a meta tag with `charset` HTML attribute to declare the text's encoding.

### [HTML validators](https://validator.w3.org/)

HTML validators are simple tools that will scan your page for HTML related errors or issues. Different issues will be reported based on the HTML doctype decalared for the document. If omitted it will default to HTML 4.

### HTML and Trees

#### Resources

- [MDN's HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [Unicode Character Table](https://unicode-table.com/en/)
- ...


