
# 10 What is JavaScript

In 1995 JavaScript was invented to make it easier to add interactive and dynamic components of websites. Nowadays JavaScript has taken on to more complex roles as a programming language and not a kiddie language.

>JavaScript (JS) is a lightweight interpreted or JIT-compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles. Read more about JavaScript. ~ Mozilla MDN's Definition [See](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## JavaScript's History

[Brendan Eich](https://en.wikipedia.org/wiki/Brendan_Eich) is who invented JavaScript.

**JavaScript**, often abbreviated as JS, is a high-level, dynamic, weakly typed, prototype-based, multi-paradigm, and interpreted programming language. Alongside HTML and CSS, JavaScript is one of the three core technologies of World Wide Web content production. It is used to make webpages interactive and provide online programs, including video games. [See article](https://en.wikipedia.org/wiki/JavaScript).

Despite the different names that JavaScript historical was names such as LiveScript, JavaScript is actually ECMAScript, so the language is standardized by a community, unlike other languages such as PHP.

But the language itself is still referred to as JavaScript.

Since JavaScript is updated on yearly cycle, it's name is changed, such as :

ECMAScript (ES5 or ES6) and moving forward will be named ES2016 or ES2017.

### More on ECMAScript or (ES)

ECMAScript is the scripting language that forms the basis of JavaScript. ECMAScript is standardized by the ECMA International standards organization in the ECMA-262 and ECMA-402 specifications.

See <https://tc39.github.io/ecma262/>.
See <http://www.ecma-international.org/>.
See <https://www.ecma-international.org/publications/standards/Ecma-262.htm>.

> Techinically, JavaScript is an implementation of ECMAScript

ES6 is referred to as "Harmony", "ES6 Harmony", "ES6", "ES2015" and "ECMAScript 2015".

> In November 1996, Netscape submitted JavaScript to Ecma, a private international nonprofit standards organization that carries significant influence in technology and communications industries.

Each of the many JavaScript engines represent a different implementation of JavaScript, all based on the ECMAScript specification, with some engines not supporting the spec fully, and with many engines supporting additional features beyond ECMA.

- <https://en.wikipedia.org/wiki/ECMAScript>
- <https://en.wikipedia.org/wiki/JavaScript_syntax>


### Three Pillars of Front End Web Development (HTML, CSS and JS)

JavaScript is one of the pillars of the three pillars that consist of technologies that make the web possible, along with HTML and CSS. However, unlike HTML and CSS which are **markup languages**, JavaScript is a **programming language**.

#### Wikipedia on Markup languages

A **markup language**, is a system or annotating a document in a way that is syntactically distinguishable from text. The idea and terminology evolved from "marking up" of paper manuscripts. I.e. revision instructions by editors, see <http://tutorials.istudy.psu.edu/makingrevisions/> and <http://tutorials.istudy.psu.edu/makingrevisions/makingrevisions6.html#userbookmark_MarkupSymbols> for examples of marking up.

See <https://en.wikipedia.org/wiki/Markup_language>.

#### MDN on HTML as a markup language

> HTML (HyperText Markup Language) is the most basic building block of the Web. It describes and defines the content of a webpage along with the basic layout of the webpage. Other technologies besides HTML are generally used to describe a webpage's appearance/presentation (CSS) or functionality/behavior (JavaScript).
> …
> "HyperText" refers to links that connect webpages to one another, either within a single website or between websites. Links are a fundamental aspect of the Web. By uploading content to the Internet and linking it to pages created by other people, you become an active participant in the World Wide Web.
> …
> HTML uses "markup" to annotate text, images, and other content for display in a Web browser. HTML markup includes special "elements" such as <head>, <title>, <body>, <header>, <footer>, <article>, <section>, <p>, <div>, <span>, <img>, and many others.
> …
> Obtained from <https://developer.mozilla.org/en-US/docs/Web/HTML>.


#### Lastly, Markdown - a markup language (used for these notes and documentation and not apart of the three languages of front-end web development)

>Markdown is a lightweight markup language with plain text formatting syntax. It is designed so that it can be converted to HTML and many other formats using a tool by the same name. Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor. As the initial description of Markdown contained ambiguities and unanswered questions, many implementations and extensions of Markdown appeared over the years to answer these issues.

See <https://en.wikipedia.org/wiki/Markdown>.


![Image of a C program](../images/C_Hello_World_Program.png)

#### Programming language and JavaScript

A **programming languages**, unlike a markup languages, are used to communicate instructions to a machine.

> A programming language is a formal language that specifies a set of instructions that can be used to produce various kinds of output. *Programming languages generally consist of instructions for a computer*. Programming languages can be used to create programs that implement specific algorithms.

See <https://en.wikipedia.org/wiki/Programming_language>.


## The JavaScript Console

**Pro-tip** Use the Keyboard Shortcut Reference found [here](https://developers.google.com/web/tools/chrome-devtools/shortcuts) for Chrome Dev Tools.

On a Mac, use `cmd + option + J` to open the JavaScript console in Google Chrome Dev Tools.

Some advocate, such as Nick Morgan to use the console to test out JavaScript code snippets within the console. To access DevTools on an empty page, to play around with type `about:blank` in the location bar within the browser.


### Using snippets feature in Google Chrome for running JS scripts from any page

See <https://developers.google.com/web/tools/chrome-devtools/snippets>.


## `console.log` and JavaScript

The **console** is a text-only tool for programmers to help them diagnose their work. Also used for debugging and learning.

Developer tools are often used as a **sandbox**, a place to try out code without any long term consequences.

`console.log` is typically used when debugging JavaScript code.

If writing code snippets in their entirety within the Developer Tools JavaScript console, be sure to use `shift + enter` to add a newline instead of running the code which happens when you simple press only `enter` or `return`.

```javascript

document.body.addEventListener('click', function () {
     var myParent = document.getElementById("Banner"); 
     var myImage = document.createElement("img");
     myImage.src = 'https://thecatapi.com/api/images/get?format=src&type=gif';
     myParent.appendChild(myImage);
     myImage.style.marginLeft = "160px";
});

```

### Cooler `console.log` utilities

Obtained from [wesbos's JavaScript30 course](https://javascript30.com/), the following are alternatives or enhancements to using `console.log`.

```js


console.log();
console.warn();
console.error();
console.info();

console.assert();

// viewing dom elements
console.dir(elem);

// grouping together

console.group(identifier)
console.groupCollapsed(identifier)
console.log(…);
console.groundEnd(identifier)

// counting
console.count('a');
console.count('b');
console.count('c');

// timing
console.time('fetch');
fetch('https://api.github.com/users/tyler-vs')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetch');
    console.log(data);
  });

console.table();

```

### Better development debugging workflow with breakpoints

Rather than using `console.log` when debugging code, take a step into using Chrome DevTools to debug in the browser. See <https://developers.google.com/web/tools/chrome-devtools/javascript/breakpoints> to see how to use breakpoint and <https://developers.google.com/web/tools/chrome-devtools/javascript/> for a tutorial on the whole debugging in the browser process.


## Developer tools in different browsers

Just use [Google Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/), preferably in the [Chrome Canary Browser](https://www.google.com/chrome/browser/canary.html) which has the latest DevTool features. 

IF privacy is a concern then maybe better to use Firefox, 


## Lesson Summary

- Every browser has built-in JavaScript engines. Chrome's is called V8.
- JavaScript console and common uses.

--- 

### further readings

- <https://developer.mozilla.org/en-US/docs/Web/JavaScript>
- <https://developer.mozilla.org/en-US/docs/Web/JavaScript/About_JavaScript>
- <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide>
- <https://developer.mozilla.org/en-US/docs/Learn/JavaScript>
- <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference>
- [Chrome DevTool's keyboard shortcuts](https://developers.google.com/web/tools/chrome-devtools/shortcuts)
- <https://medium.freecodecamp.org/whats-the-difference-between-javascript-and-ecmascript-cba48c73a2b5>
