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

