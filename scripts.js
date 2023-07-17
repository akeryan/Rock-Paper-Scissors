const choices = ["Rock", "Paper", "Scissors"]

function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3);
    return choices[rand];
}

function getMyChoice() {
    let myChoice = "";
    while(!choices.includes(myChoice)) {
        myChoice = prompt("Rock, Paper, or Scissors?");
    } 
    return myChoice;
}

const oponent = getComputerChoice();
const me = getMyChoice();

console.log(`Oponent: ${oponent}`);
console.log(`You: ${me}`);

let result = "";

if (me != oponent) {
    switch(me) {
        case "Rock": result = oponent === "Paper" ? "You lost" : "You win";
        break;
        case "Paper": result = oponent === "Scissors" ? "You lost" : "You win";
        break;
        case "Scissors": result = oponent === "Rock" ? "You lost" : "You win";
        break;
    }

} else {
    result = "draw";
}

console.log("Result: " + result);



