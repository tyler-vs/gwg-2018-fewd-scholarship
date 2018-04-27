/*
 * Programming Quiz: Quidditch Cup (6-5)
 */

// your code goes here

var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
console.log(hasEnoughPlayers(team));


function hasEnoughPlayers(teamArr) {
  if (!teamArr) {
    return;
  }

  if (teamArr.length >= 7) {
    return true;
  } else {
    return false;
  }
}