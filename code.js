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

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("What do you choose?");
    computerSelection = getComputerChoice();
    
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
    console.log(result);
    return winner;
}

function game() {

    let playerScore = 0;
    let computerScore = 0;
    let winnnerMsg;
    let whoWon;
    let winner;

    for (let i = 0; i < 5; i++) {
        winner = playRound();
        if (winner === "Player") {
            playerScore += 1
        } else if (winner === "Computer") {
            computerScore += 1
        }
    }

    if (playerScore > computerScore) {
        whoWon = "Player"
    } else if (playerScore < computerScore) {
        whoWon = "Computer"
    } else {
        whoWon = "No one"
    }

    winnnerMsg = `Good game! You won ${playerScore} rounds. Computer won ${computerScore} rounds. ${whoWon} won the game.`;
    console.log(winnnerMsg);

}
