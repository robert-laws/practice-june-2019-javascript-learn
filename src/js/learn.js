// variables that may change their value -> let
// variables that will not change their value -> const

let value = 32;

const name = "Bob";

function getScore(teamOne, teamTwo) {
  if(teamOne > teamTwo) {
    return `Team one is the winner with a score of ${teamOne}.`;
  } else {
    return `team two is the winner with a score of ${teamTwo}.`;
  }
}

result = getScore(43, 63);

name == "Hal" ? "It's Hal" : "Not Hal";

// Unit testing -  Unit testing is testing the smallest unit possible of our program. 

// Integration testing - how do all the units in our program work together?

// End-to-end testing - like the things we'd do in the browser ourselves: 'When I click this button, the card should appear in this location'.

let values = [4, 8, 16, 32]

let numnbers = [1, 2, ...values]

let first = numbers.shift()

let last = numbers.pop()