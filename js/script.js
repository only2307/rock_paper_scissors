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
                return 'The result is draw';
            }
            else if (computerSelection == 'scissors') {
                return 'You Win! Rock beats Scissors';
            }
            else {
                return 'You Lose! Paper beats Rock';
            }
            break;
        case 'paper':
            if (computerSelection == 'paper') {
                return 'The result is draw';
                break;
            }
            else if (computerSelection == 'rock') {
                return 'You Win! Rock beats Paper';
                break;
            }
            else {
                return 'You Lose! Scissors beats Paper';
            }
            break;
        case 'scissors':
            if (computerSelection == 'scissors') {
                return 'The result is draw';
                break;
            }
            else if (computerSelection == 'paper') {
                return 'You Win! Scissors beats Paper';
                break;
            }
            else {
                return 'You Lose! Rock beats Scissors';
            }
            break;
        default:
            return 'Invalid Input! Run and Type again';
    }
}
//playerSelection = prompt('Your selection is: ');
const playerSelection = 'Rock';
const computerSelection = computerPlay();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection)); 