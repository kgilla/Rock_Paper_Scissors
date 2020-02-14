//sets some variables
let player = ""; let computer = "";
let playerScore = 0; let computerScore = 0;

//win statements
const playerWin = `${player} beats ${computer}, you win!`;
const computerWin = `${computer} beats ${player} you lose.`;
const tie = 'Its a tie, go again!';

//assigns variables for on click events && transfers to playerMove function    
const rock = document.querySelector('#rock');
    rock.addEventListener('click', playerMove);
const paper = document.querySelector('#paper')
    paper.addEventListener('click', playerMove);
const scissors = document.querySelector('#scissors')    
    scissors.addEventListener('click', playerMove); 

//assigns variables for the score
const pScore = document.querySelector('#playerScore');
const cScore = document.querySelector('#computerScore');

//assigns variables for the messaging boxes
const outcome = document.querySelector('#outcome'); 

//function for player choice
function playerMove (e) {
        player = this.id;
        game(player);   
    }
//generates a computer move    
function computerMove() {
    let a = [rock, paper, scissors];
    let b =  Math.floor(Math.random() * 3);
    computer = a[b];
    computer = computer.id;
}    
//tallies the score
function tally(player, computer) {
    if (player === computer) {
        return tie;
    } else if (player == rock.id && computer == paper.id) {
        computerScore++; return computer;
    } else if (player == rock.id && computer == scissors.id) {
        playerScore++; return player;
    } else if (player == paper.id && computer == scissors.id) {
        computerScore++; return computer;
    } else if (player == paper.id && computer == rock.id) {
        playerScore++; return player;
    } else if (player == scissors.id && computer == rock.id) {
        computerScore++; return computer;
    } else if (player == scissors.id && computer == paper.id) {
        playerScore++; return player; 
    } 
}

//updates the score numbers
function updateScore(playerScore, computerScore) {
pScore.textContent = playerScore;
cScore.textContent = computerScore;
}

//updates the messages
function message(result, player, computer) {
    if (result === player) {
        let playerWin = `${player} beats ${computer}, you get a point! `;
        let capitalize = playerWin[0]; let temp = "";
        capitalize = capitalize.toUpperCase();
        temp = playerWin.substr(1);
        playerWin = capitalize + temp;
        outcome.textContent = playerWin;
    } else if (result === computer) {
        let computerWin = `${computer} beats ${player}, computer gets a point.`;
        let capitalize = computerWin[0]; let temp = "";
        capitalize = capitalize.toUpperCase();
        temp = computerWin.substr(1);
        computerWin = capitalize + temp;
        outcome.textContent = computerWin;
    } else {
        outcome.textContent = 'Its a tie, go again!';
        
    }
}

//runs the game
function game(player) {
    computerMove();
    result = tally(player, computer);
    message(result, player, computer);
    updateScore(playerScore, computerScore);
}


         