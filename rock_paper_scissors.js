function getComputerChoice() {
    let optionNumber = Math.floor(Math.random() * 3);
    const options = ["rock", "paper", "scissors"];
    return options[optionNumber];
    
}

function playRound (playerSelection, computerSelection) {
    
    
    
    switch (true) {

        case (playerSelection === "rock" && computerSelection === "paper"):
            text.textContent ="That's too bad! paper beats rock";
            return 0
            
        case (playerSelection === "paper" && computerSelection === "scissors"):
            text.textContent ="Bad election! scissors beat paper";
            return 0
            
        case (playerSelection === "scissors" && computerSelection === "rock"):
            text.textContent ="Oh noo! rock beat scissors";
            return  0
        case (playerSelection === "paper" && computerSelection === "rock"):
            text.textContent ="You're really good! paper beats rock";
            return 1
        case (playerSelection === "scissors" && computerSelection === "paper"):
            text.textContent ="Nice election! Scissors beat paper";
            return 1
        case (playerSelection === "rock" && computerSelection === "scissors"):
            text.textContent ="You rock! Rock beat scissors";
            return 1
        default:
            text.textContent ="It's a tie";
            
    }
}

function gameisOver() {
    return (playerScore == 5 || computerScore == 5);

}

function initialState() {
    computerScore = 0;
    playerScore = 0;
    text.textContent = "*Select an option to play";
    score.textContent = "0 - 0";
    
    


}

function updateScore(playerScore, computerScore) {
    score.textContent = `${playerScore} - ${computerScore}`
}


let computerScore = 0;
let playerScore = 0;
const text = document.querySelector(".text");
const score = document.querySelector(".score");
const btns = Array.from(document.querySelectorAll('button'));
btns.forEach(btn => btn.addEventListener('click', game));



function game() {
    const playerSelection = this.className
    const computerSelection = getComputerChoice();

    if (gameisOver()) {
        initialState();
    } 
    playRound(playerSelection, computerSelection) ? playerScore++ : computerScore++;
    updateScore(playerScore, computerScore);


    

}     


