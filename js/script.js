let playerSelection;
let computerSelection = {Value: ""};
let playerChoiceInt = 0;
let computerChoiceInt = 0;
let playerScore = 0;
let computerScore = 0;

const player = document.querySelector("#player");
player.textContent = `Player Score: ${playerScore}`;

const computer = document.querySelector("#computer");
computer.textContent = `Computer Score: ${computerScore}`;

const output = document.querySelector(".output");
output.textContent = "Who's the winner? Try a guess before playing!";

const buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {button.addEventListener('click', () => {
    playerSelection = button.id;
    if (playerSelection == "rock") {
        playerChoiceInt = 0;
    }
    else if (playerSelection == "paper") {
        playerChoiceInt = 1;
    }
    else if (playerSelection == "scissors") {
        playerChoiceInt = 2;
    }
    computerChoiceInt = computerPlay(computerSelection);
    game();
})
});

function computerPlay(computerSelection) {
    let selectionNum = Math.floor(Math.random() * 3);
    if (selectionNum == 0) {
        computerSelection.Value = "rock";
    }
    else if (selectionNum == 1) {
        computerSelection.Value = "paper";
    }
    else if (selectionNum == 2) {
        computerSelection.Value = "scissors";
    }
    return selectionNum;
}

function playRound() {
    let matrixWin = [[0, -1, 1], [1, 0, -1], [-1, 1, 0]];
    let point = matrixWin[playerChoiceInt][computerChoiceInt];
    if (point == 0) {
        output.textContent = `It's a tie! Your selection is ${playerSelection} and the computer's selection is ${computerSelection.Value}`;
    }
    else if (point == 1) {
        output.textContent = `You won! Your selection is ${playerSelection} and the computer's selection is ${computerSelection.Value}`;
        playerScore++;
    }
    else if (point == -1) {
        output.textContent = `You lost! Your selection is ${playerSelection} and the computer's selection is ${computerSelection.Value}`;
        computerScore++;
    }
}

function game() {
    output.textContent = "Continue! Choosing Rock, Paper, Scissors";
    playRound();

    player.textContent = `Player Score: ${playerScore}`;
    computer.textContent = `Computer Score: ${computerScore}`;
    if (playerScore == 5) {
        output.textContent = "You won the game!";
        playerScore = 0;
        computerScore = 0;
        player.textContent = `Player Score: ${playerScore}`;
        computer.textContent = `Computer Score: ${computerScore}`;
    }
    else if (computerScore == 5) {
        output.textContent = "You lost the game! Do you wanna try again?";
        playerScore = 0;
        computerScore = 0;
        player.textContent = `Player Score: ${playerScore}`;
        computer.textContent = `Computer Score: ${computerScore}`;
    }
}