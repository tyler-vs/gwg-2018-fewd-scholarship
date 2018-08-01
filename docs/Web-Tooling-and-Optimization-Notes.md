
# Web Tooling and Optimization Notes

From Udacity 

## Intro

### Being cost effective when doing optimizations

### Common sense  

01. I can build a better tool from scratch
02. Idealistic vs pragmatic, i.e. long term value for your project
03. Tool promises to do it all in itself
04. No micro-optimizations

## Your main tools: your editor

State of mind called flow.

### Know your favorite editor's shortcut keys, become a ninja about it

- [ST3 Keyboard Shortcuts](http://docs.sublimetext.info/en/latest/reference/keyboard_shortcuts_osx.html)
- tab completion
- snippets
- multiple selection 
- and more features ...


## Build tools

[Google Docs](https://developers.google.com/web/tools/setup/) on setting up local development build tools

### what qualities should you look for in a build tool?

01. fast
02. a healthy community
03. modular and extendable
04. feature rich

For example: <https://gulpjs.com/>

### Procs and cons with using Gulp.js as a build tool

Project is [here](https://github.com/udacity/ud892.git).

### Streams in Gulp.js, why so important?

Gulp converts into an in memory stream.


## Live Editing

- Using live reload


## JS Linting

Linting can occur at:

1. via editor
2. build process (gulp)
3. pre-commit hook in version conrol (i.e. git)


Flavors of linting:

1. code style
2. syntax/structural linting

**linter only checks for potential errors**

Stick to ESlint variant. Must be configured in order for you to see 
the linters feedback, as well as installing a plugin to allow the linter 
to work in your editor of choice. 

## Optimizations and Development & Production Modes

__Development__ tasks neede for while developing.

__Production__ be sure to test, when all minification, optimization occurs.


