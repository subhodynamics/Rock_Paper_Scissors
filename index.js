let playerScore = 0;
let compScore = 0;

function getComputerChoice() {
    let arr = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random()*3);
    return arr[choice];
}

function winnerCC(cc, pc) {
    compScore++;
    console.log(`You Lose! ${cc} beats ${pc}`);
}

function winnerPC(cc, pc) {
    playerScore++;
    console.log(`You Won! ${pc} beats ${cc}`);
}
// pc = player's choice

function playRound(pc) {

    let cc = getComputerChoice(); //computer choice
    
    let ans = true;
    switch (ans) {
        case (pc === cc):
            console.log("Its a tie !");
            break;
        case (  (cc === "rock" && pc === "scissors") ||
                (cc === "scissors" && pc === "paper") ||
                (cc === "paper" && pc === "rock")   ):
            
            winnerCC(cc,pc);
            // checkScore(playerScore, compScore);
            break;
    
        case ( (cc != "rock") && (cc != "paper") && (cc != "scissors") 
            || (pc != "rock") && (pc != "paper") && (pc != "scissors") ):
            
            console.log("please enter correct choice! (rock / paper/ scissors)");
            break;
            
        default:
            winnerPC(cc,pc);
    }
}

// for (let i = 0; i < 5; i++) playRound();


let rock_btn = document.getElementById('rock');
let paper_btn = document.getElementById('paper');
let scissors_btn = document.getElementById('scissors');

console.log(rock_btn);

rock_btn.addEventListener('click', function(){
    playRound('rock');
});

paper_btn.addEventListener('click', function(){
    playRound('paper');
});

scissors_btn.addEventListener('click', function(){
    playRound('scissors');
});