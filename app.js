const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const SCISSORS = 'SCISSORS';
const PAPER = 'PAPER';
const DEFUALT_USER_CHOICE = 'ROCK';
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WIN';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;


const getPlayerChoice = () =>{
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}`, '').toUpperCase();
    if (selection !== ROCK &&
        selection !== SCISSORS &&
        selection != PAPER) {
        alert(`Invalid choice ! We chose ${DEFUALT_USER_CHOICE} for you.`)
        return DEFUALT_USER_CHOICE;
    }
    return selection;
}

const getComputerChoice = ()=> {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
}

const getWinner =  (cChoice, pChoice) =>{
    if (cChoice === pChoice) {
        return RESULT_DRAW;
    } else if (cChoice === ROCK && pChoice === PAPER ||
        cChoice === SCISSORS && pChoice === ROCK ||
        cChoice === PAPER && pChoice === SCISSORS) {
        return RESULT_PLAYER_WINS;
    } else {
        return RESULT_COMPUTER_WINS;
    }
}

startGameBtn.addEventListener('click', ()=> {
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log('Game is starting...');
    const playerSelection = getPlayerChoice();
    const computerChoice = getComputerChoice();
    const winner = getWinner(computerChoice, playerSelection);
    let message = `You picked ${playerSelection} and computer picked ${computerChoice}. Therefore `;
    if(winner===RESULT_DRAW){
        message = message + 'we have a draw.'
    } else if (winner===RESULT_PLAYER_WINS){
        message = message + 'you won.'
    }else{
        message = message + 'you lost.'
    }
    alert(message);
    gameIsRunning=false;
});