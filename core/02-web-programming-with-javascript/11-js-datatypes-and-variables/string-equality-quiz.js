/*
 * Programming Quiz: String Equality for All (2-4)
 */

// fix the right side of the expression
var answer = "ALL Strings are CrEaTeD equal" == "All STRINGS are CrEaTED Equal";

var leftText = "ALL Strings are CrEaTeD equal";
console.log(`left text length: ${leftText.length}.`);
var rightText = "All STRINGS are CrEaTED Equal";
console.log(`right text length: ${rightText.length}.`);

var fixedRightText = [];

for (var i = 0; i < leftText.length; i++ ) {

    if ( leftText[i] != rightText[i]) {

        if (leftText[i] > rightText[i]) {
            // rightText[i].toLowerCase();
            fixedRightText.push(rightText[i].toLowerCase());
            // fixedRightText[i] == rightText[i].toLowerCase();
        } else if (leftText[i] < rightText[i]) {
            fixedRightText.push(rightText[i].toUpperCase());
            // fixedRightText[i] == rightText[i].toUpperCase();
        }
    } else {
        fixedRightText[i] = rightText[i]; //.push(rightText[i]);
    }
}

console.log(leftText);
console.log(rightText);
console.log(fixedRightText.join(''));

rightText = fixedRightText.join('');

answer = leftText == rightText;

console.log(answer);
