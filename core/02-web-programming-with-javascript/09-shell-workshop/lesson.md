
# Notes for ud206-command-line-workshop course

Notes from the Udacity course called Command Line Workshop.

**!!PLEASE NOTE, THIS CONTENT MAY BE OUTDATED!! this content is a duplicate of an existing used for learning about command line. See my [Learning Command Line](https://github.com/tyler-vs/learning-command-line) repo.**


<!-- MarkdownTOC -->

- welcome
- windows: installing git bash
- opening terminal app
- `echo` command
- navigating directories \(`ls`,`cd`,`..`\)
- current working directory  \(`pwd`\)
- parameters and options \(`ls -l`\)
- organizing your files \(`mkdir`, `mv`\)
- downloading \(`curl`\)
- viewing files \(`cat`, `less`\)
- removing thing \(`rm`, `rmdir`\)
- searching and pipes \(`grep`, `wc`\)
- shell and environment variables
- startup files \(`.bash_profile`\)
- controlling the shell prompt \(`$PS1`\)
- aliases
- keep learning
- glossary
- further reading

<!-- /MarkdownTOC -->


## welcome

the __shell__ is a _command line interface_ for running programs on your computer.

you type commands in the prompt and the shell runs programs for you and shows you their output.

developers use the shell a lot because it is fast and flexible.

the vast majority of web servers run on Linux and the shell is a vital tool for deployment and remote administration on linux servers.

the trade off between using the GUI and the shell is that you have to learn a lot word (shell programs) but in exchange, once you practice and memorize you can accomplish tasks very quickly without a lot of pointing and clicking.

shell concept is similar to using the JS console in browsers, you enter a command and the results are returned and then prompts you for another command.

the program used to interact with the _shell_ is called a _[terminal program](https://en.wikipedia.org/wiki/Terminal_emulator)_.

_bash_ shell, is the most popular shell used.


## windows: installing git bash


To get a u*nix style shell, u*nix style means compatible with linux.

Using Git Bash for a window's styled shell. [Download here](https://git-scm.com/download/win).


## opening terminal app

terminal is just an interface to the shell and to other command line programs that we can run inside it, similar to how a web browser is a shell to access different websites and services.

can have multiple terminals opened at once, each will have it's own instance of the shell, a separate process on your computer.


## `echo` command


the __shell prompt__ (or command line) is where one types commands, it can be customized to a user's preferences. 

if you type in the shell prompt and hit `enter`, the shell will try to run whatever you typed as a _command_.

the `echo` command, is a command is how we get the shell to print messages back to us. like `console.log` in javascript.

`echo Hello, world!`

**protip** certain characters used for typing commands have special meaning to the shell, it is best practice to not confuse the shell by wrapping commands in `'` single quotation marks.

example of printing the dimensions of your terminal window, using environment variables:

`echo $COLUMNS x $LINES`


## navigating directories (`ls`,`cd`,`..`)

using the `ls`, list command, to list directory content.

change directory with `cd` command.

**protip** many shell commands default to working with the current working directory.

to navigate to the parent directory, we can use the special `..` command to go to the parent directory of the current directory.

the `;` semi-colon allows you to write two commands on the same line, the shell will simply run them in order.

example: change directory, then list that directories contents:

`cd ~/Desktop; ll` or `cd ~/Desktop/; ls -la`

## current working directory  (`pwd`)

the _shell prompt_ may or may not indicate which directory that you are working in, if you get lost you can find out where you are currently located in the unix system by using the "print working directory" command `pwd`.

using the `pwd`, print working directory command.

the _working directory_ is a term used for whatever directory the shell is currently looking at.

what is important to note about the _working directory_ is that it is the default directory for working with commands like `ls` and it is the default place that shell commands will look for data files.

the names of directories are separated by slashes ("/"), the unix system uses _forward slash_ not the _backslash_ to separate the names of directories. 

forward slashes is the same used on URLs on the web.

the _path_ is the string composed of directory names, separated by slashes.

special directory names:

- `..`, the parent directory
- `.`, the current directory
- `~`, tilde symbol, my _home_ directory


## parameters and options (`ls -l`)

Most commands operate like this:

`command -options arguments`

where _command_ is the name of command, `-option` is one or more adjustments to the command's behavior, and _arguments_ is one or more "things" upon which the command operates.

for example, when running `ls -l`, `ls` is the _command_ and `-l` is an _option_ passed in that modifies the commands behavior. If running `ls ~/Desktop`, the `~/Desktop` would an _argument_, some "thing" upon which the `ls` command will act upon.

using special characters for patterns when using `ls -l` such as `*` for wild card pattern, `ls -l ~/Desktop/*.pdf`.


## organizing your files (`mkdir`, `mv`)

`mkdir` to _make directory_. `mv` to _move directory_.

**protip** use only single quotes in the shell, double quotes has a slightly different meaning in the shell.


## downloading (`curl`)


`curl -o <file> <file location>`

`curl` to "c" a "url" (a webpage).

Add the `-L` option to follow redirects.

`curl -L http://www.google.com` to view source.

CURL is better used to download page and files by URL.

To get the URL by file and not display directly in the terminal window, use the `-o` option followed by the filename which you would like to save it under.

```
curl -o <filename to save as> -L <url of resource>
```

or 

```
curl -o google.html -L http://google.com
```

try yourself! Try downloading this `dictionary.txt` file using `curl`

```
curl -o dictionary.txt -L https://tinyurl.com/zeyq9vc
```

**protip** a lot of URLs have special characters in them, such as the `&` sign, which have unusual meanings to the shell. That is why it is better to wrap those URL values with single quotes.

## viewing files (`cat`, `less`)


`cat` - reads the files and outputs them. `cat` is short for concatenate, means to run several things together.

`less` - shows one full screen of a file at a time. e.g. `less filename.txt`.

use the `/` slash while in `less` to search for something in a file when using less.

use `q` to quit the program.

## removing thing (`rm`, `rmdir`)

`rm` - to delete/remove files.

use `rm -i` for _interactive_, so you can see what files you are about to remove before removing them.

`rmdir` - remove directories.

unlike the GUI, there is no trash bin for files to go to after being removed, so it is better to use `rm -i` than simply `rm`.


## searching and pipes (`grep`, `wc`)

`grep` command used for searching text files for lines with particular content.

`grep <needle> <haystack>`, `grep shell dictionary.txt`.

more lines than we can see at once while using `grep`? Use `pipe` or `|` (vertical bar character) to pipe to another program (e.g. less). `grep sell dictionary.txt | less`.

`wc`, a _word count_ program. `-l` option to count number of lines.

`grep -c` where `-c` option in grep is for count.

_regular expressions_ or `regex` - is a term used for the patterns that grep lets you use.

## shell and environment variables

creating or modifying a variable in the shell:

for example: running `numbers='one two three'` in the shell to assign the value `one two three` to the variable name `numbers`. __note__ you cannot add any spaces around the equal sign.

_shell variables_ - internal to the shell program itself.

_environment variables_ - are shared with programs that you from from within the shell. e.g. the `PATH` variable.

adding new directories to your path variable. `PATH=$PATH:/new/dir/here`, to preserve this path, it will need to be added to the shell's `.bash_profile`.


## startup files (`.bash_profile`)


the shell is also a programming languages, shell scripts are files containing shell commands. (e.g. `.bash_profile`)

customizing the shell via _startup files_.

adding your modified PATH variable to the `.bash_profile` so the shell will always know where to look for certain programs to run (like the `subl` command for Sublime Text 3).

to use the same shell on different operating systems, you can write an if conditional in your machines `.bash_profile` file that checks if there is a `.bashrc` file to use:

```
# .bash_profile

if [-f ~/.bashrc ] ; then
  source ~/.bashrc
fi
```

configuration files that the shell reads at startup to get its configurations settings:

- `.bash_profile`, windows and mac
- `.bashrc`, linux

it is common for shell users to install programs into a sub directory of the home directory called `bin` that stands for `binary`. 


## controlling the shell prompt (`$PS1`)

- http://bashrcgenerator.com/

## aliases

a way of making long shell commands even shorter.

```
alias <new shortname command>='<long form of a command>'

```

```
alias ll='ls -la'
```

some starter aliases

```
alias ll="ls -la"
alias cl="curl -L"
alias ..="cd .."
alias ...="cd ..."
alias now='date +"%T"'
alias sl="ls"
```

to see all available alias commands that are on your machine, run `alias` with no options or arguments.

save aliases to your shell's starter files to have them available when you start a shell.


## keep learning


---

# glossary

- __terminal application__, is a program that emulates a video terminal within some other display architecture. Obtained from <https://en.wikipedia.org/wiki/Terminal_emulator>.
- __command line interface (CLI)__, is a means of interacting with a computer program where the user (or client) issues commands to the program in the form of successive lines of texts (command lines).
- __shell__, in computing, a _shell_ is a user interface for access to an operating system's services. Obtained from <https://en.wikipedia.org/wiki/Shell_(computing)>.
- __Terminal (Terminal.app) (macOS)__, is the terminal emulator included in the macOS operating system by Apple. Obtained from <https://en.wikipedia.org/wiki/Terminal_(macOS)>.
- __shell prompt__, is where one types in commands. Obtained from <https://en.wikibooks.org/wiki/Guide_to_Unix/Explanations/Shell_Prompt>.
- __working directory__ is a term used for whatever directory the shell is currently looking at.
- __path__ - is an environment variable that consists of a colon-delimited list of directories that your shell searches through when you enter a command.
- __program files (executables)__, are kept in many different places on the Unix system, the path (environment variable) ells the Unix shell where to look on the system when you request a particular program. Obtained from <https://kb.iu.edu/d/acar>.
- __regular expressions__ or `regex`, is a term used for the patterns that grep lets you use.
- __shell variables__, internal to the shell program itself.
- __environment variables__, are shared with programs that you from from within the shell.
- __shell scripts__, are files containing shell commands.

---

# further reading

- https://www.bash.academy/
- http://www.tldp.org/LDP/Bash-Beginners-Guide/html/
- http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO.html
- https://regexr.com/
- http://bashrcgenerator.com/

- https://en.wikipedia.org/wiki/Grep
- https://en.wikibooks.org/wiki/Guide_to_Unix/Explanations/Shell_Prompt
- https://github.com/GoogleChrome/lighthouse/blob/master/CONTRIBUTING.md
- https://conventionalcommits.org/
- https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes#_showing_your_remotes
- https://help.github.com/articles/connecting-to-github-with-ssh/
- https://www.die.net/
- https://en.wikibooks.org/wiki/Guide_to_Unix/Explanations/Shell_Prompt
- https://www.cprogramming.com/tutorial/cfileio.html
- https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop
