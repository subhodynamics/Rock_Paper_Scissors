var playerScore = 0;
var compScore = 0;
let winner ='';
let finalWinner = '';

let rock_btn = document.getElementById('rock');
let paper_btn = document.getElementById('paper');
let scissors_btn = document.getElementById('scissors');
let currChoiceContainer = document.getElementById('currChoice');
let currWin = document.getElementById('currWin');

const scoreContainer = document.getElementById('score');


rock_btn.addEventListener('click', function(){
    playRound('rock');
});

paper_btn.addEventListener('click', function(){
    playRound('paper');
});

scissors_btn.addEventListener('click', function(){
    playRound('scissors');
});

function getComputerChoice() {
    let arr = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random()*3);
    return arr[choice];
}

// pc = player's choice
function playRound(pc) {
    let cc = getComputerChoice(); //computer choice

    currChoiceContainer.textContent = `\nYou chose ${pc}\nand Computer chosen ${cc}`;

    switch (true) {

        //? case for tie
        case (pc === cc):
            winner = 'tie';
            currWin.textContent = '\n Its a Tie'
            break;

        //? case for computer win
        case (  (cc === "rock" && pc === "scissors") ||
                (cc === "scissors" && pc === "paper") ||
                (cc === "paper" && pc === "rock")   ):
            winner = 'comp';
            currWin.textContent = '\n Computer won this'
            break;

        //? case for player win
        default:
            winner = 'player';
            currWin.textContent = '\n You won this'
    }
    scoreWinner();
    console.log(winner);
}


function scoreWinner() {
    if (winner === 'comp') {
        compScore++;
        scoreContainer.textContent = `You = ${playerScore}\nComputer = ${compScore}`;
    }
    else if (winner === 'player') {
        playerScore++;
        scoreContainer.textContent = `You = ${playerScore}\nComputer = ${compScore}`;
    }

    if (compScore === 5 || playerScore === 5)
    getWinner();
}

function getWinner() {
    let final = '';
    if(compScore === 5)
    {
        scoreContainer.textContent += '\n' + 'Computer wins';
        console.log('computer wins');
    }
    else
    {
        scoreContainer.textContent += '\n' + 'You win';
        console.log(' wins');
    }
    compScore = 0;
    playerScore = 0;
}

