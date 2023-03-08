function getComputerChoice() {
    let optionNumber = Math.floor(Math.random() * 3);
    const options = ["rock", "paper", "scissors"];
    return options[optionNumber];
    
}

function playRound (playerSelection, computerSelection) {
     
    
    
    
    switch (true) {

        case (playerSelection === "rock" && computerSelection === "paper"):
            text.textContent ="That's too bad! paper beats rock";
            computerScore++
            break
        case (playerSelection === "paper" && computerSelection === "scissors"):
            text.textContent ="Bad election! scissors beat paper";
            computerScore++
            break
        case (playerSelection === "scissors" && computerSelection === "rock"):
            text.textContent ="Oh noo! rock beat scissors";
            computerScore++
            break
        case (playerSelection === "paper" && computerSelection === "rock"):
            text.textContent ="You're really good! paper beats rock";
            playerScore++
            break
        case (playerSelection === "scissors" && computerSelection === "paper"):
            text.textContent ="Nice election! Scissors beat paper";
            playerScore++
            break
        case (playerSelection === "rock" && computerSelection === "scissors"):
            text.textContent ="You rock! Rock beat scissors";
            playerScore++
            break
        default:
            text.textContent ="It's a tie";
            break
            
            
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
    score.textContent = `${playerScore} - ${computerScore}`;
}

function openModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
    initialState();
    
}

let computerScore = 0;
let playerScore = 0;
const text = document.querySelector(".text");
const score = document.querySelector(".score");
const modal = document.querySelector(".modal");
const modalTitle = document.querySelector(".modal-title");
const restart = document.querySelector(".restart");
restart.addEventListener('click', closeModal);
const btns = Array.from(document.querySelectorAll('.btn'));
btns.forEach(btn => btn.addEventListener('click', game));





function game(e) {
    const playerSelection = e.target.alt;
    const computerSelection = getComputerChoice();

    if (gameisOver()) {
        if (playerScore > computerScore) {
            modalTitle.textContent = "You won!!";
        } else {
            modalTitle.textContent = "You lose !!";
        }
        openModal();
    } else {
        playRound(playerSelection, computerSelection);
        updateScore(playerScore, computerScore);
    }
    

}     


