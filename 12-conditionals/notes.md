
# Lesson 12 Conditionals

Learn how to add logic to your JS programs with conditional statements.

When writing code, the main purpose is to solve a problem.

The steps it takes to solve a problem is known as an algorithm.

An _expression_ is a special kind of statement that _evaluates to a value_.

There is a distinction between an expression statement, a non-expression statement (does not result in a value).

## Switch 

Use _switch statements_ when repeating `else if` statements when each condition is based on some value/variable.

A _switch statement_ is another way to chain multiple `else if` statements that are based on the same value without using conditional statements.


```
var tier = "nsfw deck";
var output = "You’ll receive "

switch (tier) {
  case "deck of legends":
    output += "a custom card, ";
  case "collector's deck":
    output += "a signed version of the Exploding Kittens deck, ";
  case "nsfw deck":
    output += "one copy of the NSFW (Not Safe for Work) Exploding Kittens card game and ";
  default:
    output += "one copy of the Exploding Kittens card game.";
}

console.log(output);
```


```
var tier2 = "platinum";
var output2 = "You will receive ";

switch (tier2) {
  case "platinum":
    output2 += "a master cheif helmet, ";
  case "gold":
    output2 += "a plasma pistol, ";
  case "silver":
    output2 += "a downloadable skin, ";
  case "broze":
    // output2 += "three free Rare REQ packs.";
    // break;
    output2 += "three free Rare REQ packs, ";
  default:
    output2 += "a free REQ pack.";
    break;   
}

console.log(output2);
```

```
var winner = 3;
var prize = "";

switch (winner) {
  case 1:
    prize += "a trip for two to the Bahamas and ";
  case 2:
    prize += "a four piece furniture set.";
    break;
  case 3:
    prize += "a smartwatch and ";
  default:
    prize += "tickets to the circus.";
}

console.log("You've won " + prize);

```