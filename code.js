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
        result = "Tie";
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        result = "You Lose! Paper beats Rock";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        result = "You Win! Rock beats Scissors";
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        result = "You Win! Scissors beats Paper";
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        result = "You Lose! Rock beats Scissors";
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        result = "You Win! Paper beats Rock";
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        result = "You Lose! Scissors beats Paper";
    }
    
    return result;
}

// if player === rock and 
// 
// 
//  
//  
//  
// Computer chooses rock, paper, or scissors
// User inputs rock, paper, or scissors
// 
// Compare the computer and user guesses
// 1. Rock beats paper
// 2. Paper beats rock
// 3. Scissors beats paper
// 4. Tie if both guess the same
//
// Log whether the computer or user wins

