console.log("Hello World!");


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
    playerSelection = this.id.toString();
    let computerSelection = getComputerChoice();
    
    let firstLetter = playerSelection.slice(0,1).toUpperCase();
    playerSelection = firstLetter + playerSelection.slice(1).toLowerCase(); 

    let result;

    if (playerSelection === computerSelection) {
        winner = "Tie";
        result = "Tie";
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        winner = "Computer";
        result = "You Lose! Paper beats Rock";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        winner = "Player";
        result = "You Win! Rock beats Scissors";
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        winner = "Player";
        result = "You Win! Scissors beats Paper";
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        winner = "Computer";
        result = "You Lose! Rock beats Scissors";
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        winner = "Player";
        result = "You Win! Paper beats Rock";
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        winner = "Computer";
        result = "You Lose! Scissors beats Paper";
    }

    document.querySelector(".result-container").textContent = result;
    console.log(result);
    return winner;
}


const buttonChoices = document.querySelectorAll(".choice");
for (let buttonChoice of buttonChoices) {
    buttonChoice.addEventListener("click", playRound);
}