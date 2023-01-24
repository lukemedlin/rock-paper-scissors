function getComputerChoice () {
    let randNum = Math.floor(Math.random() * 3);
    let compChoice;

    switch (randNum) {
        case 0:
            compChoice = "Rock";
            break;
        case 1:
            compChoice = "Paper";
            break;
        case 2:
            compChoice = "Scissors";
    }

    return compChoice;
}



function playRound(event) {
    if (gameOver === true) {
        return;
    }

    playerSelection = this.id.toString();
    let computerSelection = getComputerChoice();
    
    let firstLetter = playerSelection.slice(0,1).toUpperCase();
    playerSelection = firstLetter + playerSelection.slice(1).toLowerCase(); 

    let result;

    if (playerSelection === computerSelection) {
        winner = "Tie";
        result = "Tie";
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        computerScore++;
        result = "You Lose! Paper beats Rock";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        playerScore++;
        result = "You Win! Rock beats Scissors";
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        playerScore++;
        result = "You Win! Scissors beats Paper";
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        computerScore++;
        result = "You Lose! Rock beats Scissors";
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        playerScore++;
        result = "You Win! Paper beats Rock";
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        computerScore++;
        result = "You Lose! Scissors beats Paper";
    }

    updateScores();

    scoreboardResult.textContent = result;

    checkWinner();
}

let gameOver = false;
let playerScore = 0;
let computerScore = 0;


let scoreboardResult = document.querySelector(".result-container");

function checkWinner () {
    if (playerScore > 4) {
        scoreboardResult.textContent = "You win!"
        gameOver = true;
    } else if (computerScore > 4) {
        scoreboardResult.textContent = "You lose!"
        gameOver = true;
    }
}

function updateScores() {
    document.querySelector(".player-score").textContent = playerScore;
    document.querySelector(".computer-score").textContent = computerScore;
}


function newGame() {
    gameOver = false;
    playerScore = 0;
    computerScore = 0;
    updateScores();
    document.querySelector(".result-container").textContent = '';
}



document.querySelector("#new-game").addEventListener("click", newGame);

const buttonChoices = document.querySelectorAll(".choice");
for (let buttonChoice of buttonChoices) {
    buttonChoice.addEventListener("click", playRound);
}