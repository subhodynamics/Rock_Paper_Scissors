function getComputerChoice() {
    let arr = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random()*3);
    return arr[choice];
}

function winnerCC(cc, pc) {
    console.log(`You Lose! ${cc} beats ${pc}`);
}

function winnerPC(cc, pc) {
    console.log(`You Won! ${pc} beats ${cc}`);
}

function playRound() {
    let pc = prompt("Enter your choice"); // player choice (pc)
    pc = pc.toLowerCase();
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
            break;
    
        case ( (cc != "rock") && (cc != "paper") && (cc != "scissors") 
            || (pc != "rock") && (pc != "paper") && (pc != "scissors") ):
            
            console.log("please enter correct choice! (rock / paper/ scissors)");
            break;
            
        default:
            winnerPC(cc,pc);
    }
}

for (let i = 0; i < 5; i++) playRound();
