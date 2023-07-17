const choices = ["rock", "paper", "scissors"]

function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);
    return choices[rand];
}

function getMyChoice() {
    let myChoice = "";
    while(!choices.includes(myChoice.toLowerCase())) {
        myChoice = prompt("Rock, Paper, or Scissors?");
    } 
    return myChoice.toLowerCase();
}

const oponent = getComputerChoice();
const me = getMyChoice();

console.log(`Oponent: ${oponent}`);
console.log(`You: ${me}`);

let result = "";

if (me != oponent) {
    switch(me) {
        case "rock": result = oponent === "paper" ? "You Lose! Paper beats Rock" : "You Win! Rock beats Scissors";
        break;
        case "paper": result = oponent === "scissors" ? "You Lose! Scissors beat Paper" : "You Win! Paper beats Rock";
        break;
        case "scissors": result = oponent === "rock" ? "You Lose! Rock beats Scissors" : "You Win! Scissors beat Paper";
        break;
    }

} else {
    result = "draw";
}

console.log("Result: " + result);



