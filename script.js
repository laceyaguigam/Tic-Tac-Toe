//The player should be able to click on a square and add an X or an O to the square.
//The player should not be able to choose a square that already has an X or an O.
// The game should handle automatically switching turns.

// The game should alternate between X and O until the game is over.
// The game should keep track of the state of the game.

// When a game ends in a tie, it should display a message indicating that a tie has occurred and no further clicks should be allowed.


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
    [0, 4, 8], //
    [1, 4, 7],
    
];

// Player X turn to start game
let xTurn = true;
let count = 0;

//disable buttons 
const disableButtons = () => {
    gameSquare.forEach ((element) => (element.disabled = true));
};

//re-enable buttons 
const enableButtons = () => {
    gameSquare.forEach ((element) => {
    element.innerText = "";
    element.disabled = false;
}); 
};

//winning alert
const winAlert = (letter) => {
    disableButtons();
    if (letter == "X") {
        window.alert("Player X Wins!");
    } else {
        window.alert("Player O Wins!");
    } 
};

//play again
playButton.addEventListener ("click", () => {
    count = 0;
    enableButtons ();
});

// Check for winner
const checkWin = () => {
    for (let i of winningPattern) {
        let [element1, element2, element3] = [
            gameSquare[i[0]].innerText,
            gameSquare[i[1]].innerText,
            gameSquare[i[2]].innerText,
        ];  //this makes sure all x's or all o's are used to win
        if (element1 != "" &&  (element2 !="") & (element3 != "")) {
            if (element1 == element2 && element2 == element3) {
                winAlert(element1);
            }
        }
    }
};

//draw alert       (order of code matters!)

const drawAlert = () => {
    disableButtons();
    window.alert("It's a Draw!");
};

// X/O shown
gameSquare.forEach((element) => {
    element.addEventListener("click", () => {
        if (xTurn) {
            xTurn = false;
            element.innerText = "X";  //displays X when square clicked
            element.disabled = true;
        } else {
            xTurn = true;
            element.innerText = "O";
            element.disabled = true;
        }
        count += 1;
        if (count == 9) {
            drawAlert ();
        } 
        checkWin();
    });
});
window.onload = enableButtons;