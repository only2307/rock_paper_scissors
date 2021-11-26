function computerPlay() {
    let choice = ['Rock', 'Paper', 'Scissors'];
    let selection = choice[Math.floor(Math.random() * choice.length)];
    return selection;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    switch(playerSelection) {
        case 'rock':
            if (computerSelection == 'rock') {
                console.log('The result is draw');
                return 0;
            }
            else if (computerSelection == 'scissors') {
                console.log('You Win! Rock beats Scissors');
                return 1;
            }
            else {
                console.log('You Lose! Paper beats Rock');
                return -1;
            }
            break;
        case 'paper':
            if (computerSelection == 'paper') {
                console.log('The result is draw');
                return 0;
            }
            else if (computerSelection == 'rock') {
                console.log('You Win! Paper beats Rock');
                return 1;
            }
            else {
                console.log('You Lose! Scissors beats Paper');
                return -1
            }
            break;
        case 'scissors':
            if (computerSelection == 'scissors') {
                console.log('The result is draw');
                return 0;
            }
            else if (computerSelection == 'paper') {
                console.log('You Win! Scissors beats Paper');
                return 1;
            }
            else {
                console.log('You Lose! Rock beats Scissors');
                return -1;
            }
            break;
        default:
            return 'Invalid Input! Run and Type again';
    }
}

function game() {
    let playerWin = 0, computerWin = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Your selection is: ');
        const computerSelection = computerPlay();
        console.log(computerSelection);
        let result = playRound(playerSelection, computerSelection);
        console.log(result); 
        if (result == 1) {
            playerWin++;
        }
        else if (result == -1) {
            computerWin++;
        }
        else {
            continue;
        }
    }
    if (playerWin > computerWin) {
        console.log('You win!');
    }
    else if (playerWin < computerWin) {
        console.log('You lose!');
    }
    else {
        console.log("It's draw!")
    }
}

game();