//The player should be able to click on a square and add an X or an O to the square.
//The player should not be able to choose a square that already has an X or an O.
// The game should handle automatically switching turns.
// X should always go first by default.
// The game should alternate between X and O until the game is over.
// The game should keep track of the state of the game.
// When the game has been won, it should display a message congratulating the winner (X or O) and no further clicks should be allowed.
// When a game ends in a tie, it should display a message indicating that a tie has occurred and no further clicks should be allowed.

// Add a button somewhere that allows the players to play again.
// You might accomplish this by causing a page refresh or writing some JavaScript code that resets everything on the page.
// You should keep track of wins for both X and O that persist after a page refresh.
// You may choose to use local or session storage for this.


let turnTaker = document.getElementById('turn-taker');
let turn = document.getElementById('turn');
let gameBoard = document.getElementById('game-board');
let gameSquare = document.querySelectorAll('.game-square');
let playButton = document.getElementById('button-play-again');
let scoreBoard = document.getElementById('score-board');
let xScore = document.getElementById('scoreboard-x');
let oScore = document.getElementById('scoreboard-y');


//winning combinations
const winningPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [2, 5, 8],
    [6, 7, 8],
    [3, 4, 5],
    [2, 4, 6],
];

// Player X turn to start game
let xTurn = true;
let count = 0;

//disable buttons 
const disableButtons = () => {
    gameSquare.forEach ((element) => (element.disabled = true));
}

//re-enable buttons 
const enableButtons = () => {
    gameSquare.forEach ((element) => {
    element.innerText = "";
    element.disabled = false;
}); 
}

//winning alert
const winAlert = (letter) => {
    disableButtons();
    if (letter == "X") {
        window.alert("Player X Wins!");
    } else {
        window.alert("Player O Wins!");
    } 
};

//draw alert

const drawAlert = () => {
    disableButtons();
    window.alert("It's a Draw!");
}