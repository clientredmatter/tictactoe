let gameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

let currentPlayer = 'X';
let xScore = 0;
let oScore = 0;
let isGameOver = false;

const cells = document.querySelectorAll('.cell');
const playerTurnDisplay = document.getElementById('player-turn');
const xScoreDisplay = document.getElementById('x-score');
const oScoreDisplay = document.getElementById('o-score');
const resetButton = document.getElementById('reset-btn');

startGame();

function startGame() {
    isGameOver = false;
    currentPlayer = 'X';
    gameBoard = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];
    updateDisplay();
    renderBoard();
}

function handleCellClick(row, col) {
    if (isGameOver || gameBoard[row][col] !== null) return; // Stop if invalid move

    gameBoard[row][col] = currentPlayer;
    if (checkForWin()) {
        updateScores();
        displayWinner(); 
        return;
    } 

    switchPlayer();
    updateDisplay();
    renderBoard();
}

function checkForWin() {
    // Check rows, columns, diagonals (full implementation not shown for brevity)
    return false; // Replace with actual win check logic
}

function updateScores() {
    if (currentPlayer === 'X') {
        xScore++;
    } else {
        oScore++;
    }
    updateDisplay();
}

// ... (Other functions: displayWinner, switchPlayer, updateDisplay, renderBoard) 
