const choices = ["rock", "paper", "scissors"]
const score = [0, 0] // score[0] - player, score[1] - computer
const numOfRounds = 5
let currentRound = 1;

const rockBtn = document.getElementById('rock-btn')
const paperBtn = document.getElementById('paper-btn')
const scissorsBtn = document.getElementById('scissors-btn')
const playAgainBtn = document.getElementById('playAgain-btn')
const displayEl = document.getElementById('display')

playAgainBtn.style.backgroundColor = 'pink'

rockBtn.addEventListener('click', () => {
    game('rock')
})

paperBtn.addEventListener('click', () => {
    game('paper')
})

scissorsBtn.addEventListener('click', () => {
    game('scissors')
})

playAgainBtn.addEventListener('click', () => {
    currentRound = 1;
    document.getElementById('display').textContent = ""
    score[0] = 0
    score[1] = 0
})

function getComputerChoice() {
    const rand = Math.floor(Math.random() * 3);
    return choices[rand];
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

    return result
}

function game(pSelection) {
    let result = ""

    let cSelection = ""

    cSelection = getComputerChoice()

    if(currentRound <= numOfRounds) {
        let roundText = ""
        roundText += `Round ${currentRound}: <br />`

        roundText += `___Computer: ${cSelection} <br />`
        roundText += `___Player: ${pSelection} <br />`

        result = playRound(pSelection, cSelection)

        if (result.includes("You Lose")) {
            score[1]++
        } else if (result.includes("You Win")) {
            score[0]++
        }

        roundText += `___${result}`;

        displayEl.innerHTML += roundText + '<br /> <br />'

        if(currentRound === numOfRounds) {
            let totalText = "------------------ <br />"
            totalText += "Total Score: <br />"
            totalText += `  Player: ${score[0]}, Computer: ${score[1]} <br />` 
            if(score[0] > score[1]) {
                totalText += "Player is the Winner"
            } else if (score[0] < score[1]) {
                totalText += "Computer is the Winner"
            } else totalText += "DRAW"
            displayEl.innerHTML += totalText
        }

        roundText = ""
        totalText = ""
        currentRound++;
    }  
}