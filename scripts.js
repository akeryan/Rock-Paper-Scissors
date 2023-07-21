const choices = ["rock", "paper", "scissors"]
const score = [0, 0] // score[0] - player, score[1] - computer

const rockBtn = document.getElementById('rock-btn')
const paperBtn = document.getElementById('paper-btn')
const scissorsBtn = document.getElementById('scissors-btn')

rockBtn.addEventListener('click', () => {
    playRound('rock', getComputerChoice())
})

paperBtn.addEventListener('click', () => {
    playRound('paper', getComputerChoice())
})

scissorsBtn.addEventListener('click', () => {
    playRound('scissors', getComputerChoice())
})

function getComputerChoice() {
    const rand = Math.floor(Math.random() * 3);
    return choices[rand];
}

function getMyChoice() {
    let myChoice = "";
    while(!choices.includes(myChoice.toLowerCase())) {
        myChoice = prompt("Rock, Paper, or Scissors?");
    } 
    return myChoice.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    let result = "draw";
    
    if (playerSelection != computerSelection) {
        switch(playerSelection) {
            case "rock": result = computerSelection === "paper" ? "You Lose! Paper beats Rock" : "You Win! Rock beats Scissors";
            break;
            case "paper": result = computerSelection === "scissors" ? "You Lose! Scissors beat Paper" : "You Win! Paper beats Rock";
            break;
            case "scissors": result = computerSelection === "rock" ? "You Lose! Rock beats Scissors" : "You Win! Scissors beat Paper";
            break;
        }
    } else {
        result = "draw"
    }   

    console.log(result)
}

// function game() {
//     const numOfRounds = 5;
//     let currentRound = 1;
//     let result = ""

//     let cSelection = ""
//     let pSelection = ""

//     while(currentRound <= numOfRounds) {
//         console.log(`Round ${currentRound}:`);

//         cSelection = getComputerChoice();
//         pSelection = getMyChoice();

//         console.log(`  Computer: ${cSelection}`);
//         console.log(`  Player: ${pSelection}`);

//         result = playRound(pSelection, cSelection)

//         if(result.includes('draw')) {
//             score[0]++
//             score[1]++
//         } else if (result.includes("You Lose")) {
//             score[1]++
//         } else score[0]++

//         console.log("  " + result);
//         currentRound++;
//     }  

//     console.log("------------------")
//     console.log("Total Score: ")
//     console.log(`  Player: ${score[0]}, Computer: ${score[1]}`)
//     if(score[0] > score[1]) {
//         console.log("Player is the Winner")
//     } else if (score[0] < score[1]) {
//         console.log("Computer is the Winner")
//     } else console.log("DRAW")
// }

// game();





