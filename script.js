
let turnTaker = document.getElementById('turn-taker');
let turn = document.getElementById('turn');
let gameBoard = document.getElementById('game-board');
let gameSquare = document.querySelectorAll('.game-square');
let playButton = document.getElementById('button-play-again');
let scoreBoard = document.getElementById('score-board');
let xscoreDisplay = document.getElementById('scoreboard-x');
let oscoreDisplay = document.getElementById('scoreboard-o');

// score

let xScore = 0;
let oScore = 0;
//let turn = 1;

//winning combinations
const winningPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [2, 5, 8],
    [6, 7, 8],
    [3, 4, 5],
    [2, 4, 6],
    [0, 4, 8], 
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
        xScore++; //adds the score
        xscoreDisplay.innerHTML = 'X: ' + xScore; //displays the score 
       
        window.alert("Player X Wins!");
        
        //let xscore = document.getElementById('scoreboard-x').value;
        localStorage.setItem("xScore", xScore);
    } else {
        
        oScore++;
        oscoreDisplay.innerHTML = '0: ' + oScore;
        
       
        localStorage.setItem("oScore", oScore);
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

let currentPlayer = "X";

function updatePlayer() {
    currentPlayer = (currentPlayer == "X") ? "O" : "X";  //this assigns the player either x or o 
    turn.textContent = currentPlayer + "'s turn";
};

// X/O shown
gameSquare.forEach((element) => {
    element.addEventListener("click", () => {
        if (xTurn) {
            xTurn = false;
            element.innerText = "X";  //displays X when square clicked
            element.disabled = true;
            updatePlayer();
        } else {
            xTurn = true;
            element.innerText = "O"; //displays O when square clicked
            element.disabled = true;
            updatePlayer();
        }
        count += 1;
        if (count == 9) { //counts the used squares when no win pattern 
            drawAlert ();
        } 
        checkWin();
    });
});



//turn



window.onload = (event) => {
    enableButtons();
 
    xscoreDisplay.innerHTML = 'X: ' + localStorage.getItem('xScore');
    oscoreDisplay.innerHTML = 'O: ' + localStorage.getItem('oScore'); 
}




