const startGameButton = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER_WINS";
const RESULT_COMPUTER_WINS = "COMPUTER_WINS";
let gameIsRunning = false;

const getPlayerChoice = () => {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}`, '').toUpperCase();
    if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
        alert(`Invalid choice, we choose ${DEFAULT_USER_CHOICE} for you`);
        return DEFAULT_USER_CHOICE;
    }
    return selection;
};

const getComputerChoice = () => {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
};

const getWinner = (computerChoice, playerChoice) =>
    computerChoice === playerChoice
        ? RESULT_DRAW
        : computerChoice === ROCK && playerChoice === PAPER ||
            computerChoice === PAPER && playerChoice === SCISSORS ||
            computerChoice === SCISSORS && playerChoice === ROCK
            ? RESULT_PLAYER_WINS : RESULT_COMPUTER_WINS;

startGameButton.addEventListener('click', () => {
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log('game starting ...');
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    const winner = getWinner(computerChoice, playerChoice);
    let message = `You chose ${playerChoice}, computer chose ${computerChoice}, so you `;
    if (winner === RESULT_DRAW) {
        message = message + 'had a draw';
    } else if (winner === RESULT_PLAYER_WINS) {
        message = message + 'won';
    } else {
        message = message + 'lost';
    }
    alert(message);
    gameIsRunning = false;
});