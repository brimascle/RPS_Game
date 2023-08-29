const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const resultText = document.querySelector('#resultText');

const options = ["rock", "paper", "scissor"];
function getComputerChoice() {
    const choice = options[Math.floor(Math.random()*options.length)];
    return choice;
}

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie";
    } else if (playerSelection == "rock" && computerSelection == "scissor" ||
        playerSelection == "paper" && computerSelection == "rock" ||
        playerSelection == "scissor" && computerSelection == "paper") {
        return "Player";
    } else {
        return "Computer";
    }
}
/*
Does not need anymore

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "Tie") {
        return "It's tie.";
    } else if (result == "Player") {
        return `Player Win. ${playerSelection} beats ${computerSelection}.`;
    } else {
        return `Computer Win. ${computerSelection} beats ${playerSelection}`;
    } 
}
*/


/* 
old version for javascript only game

function getPlayerChoice() {
    let validateInput = false;
    while (validateInput == false) {
        const choice = prompt("Rock Paper Scissor");
        if(choice == null) {
            continue;
            // I need to break this loop when cancel button is clicked //
        }

        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)) {
            validateInput = true;
            return choiceInLower;
        }
    }
    
}
*/

const btns = document.querySelectorAll('button');

btns.forEach(button => button.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = button.textContent;

    
    if(checkWinner(playerSelection, computerSelection) == 'Player') {
        playerScore.textContent++;
    } else if(checkWinner(playerSelection, computerSelection) == 'Computer') {
        computerScore.textContent++;
    } else {
        alert("tie");
    }

}))

/*
old version for javascript only game

function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;
    for (let i=0 ; i<5 ; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log(`---------------------------`);

        if(checkWinner(playerSelection, computerSelection) == 'Player') {
            scorePlayer ++;
        } else if(checkWinner(playerSelection, computerSelection) == 'Computer') {
            scoreComputer ++;
        }
    }
    console.log("Game over.")
    if(scorePlayer > scoreComputer) {
        console.log("Player is the winner.");
    } else if(scorePlayer < scoreComputer) {
        console.log("Computer is winner.")
    } else {
        console.log("It was tie game.")
    }
}


game()

*/
