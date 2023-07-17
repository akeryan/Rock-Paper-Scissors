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

const computerSelection = getComputerChoice();
const playerSelection = getMyChoice();

console.log(`Oponent: ${compueterSelection}`);
console.log(`You: ${playerSelection}`);

let result = "";

if (playerSelection != compueterSelection) {
    switch(me) {
        case "rock": result = computerSelection === "paper" ? "You Lose! Paper beats Rock" : "You Win! Rock beats Scissors";
        break;
        case "paper": result = computerSelection === "scissors" ? "You Lose! Scissors beat Paper" : "You Win! Paper beats Rock";
        break;
        case "scissors": result = computerSelection === "rock" ? "You Lose! Rock beats Scissors" : "You Win! Scissors beat Paper";
        break;
    }

} else {
    result = "draw";
}

console.log("Result: " + result);



