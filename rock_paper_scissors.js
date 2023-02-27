function getComputerChoice() {
    let optionNumber = Math.floor(Math.random() * 3)
    switch (optionNumber){
        case 0 :
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound (playerSelection, computerSelection) {
    
    switch (true) {

        case (playerSelection === "rock" && computerSelection === "paper"):
            alert("paper beats rock");
            return "You lose!";
        case (playerSelection === "paper" && computerSelection === "scissors"):
            alert("scissors beat paper");
            return "You lose!";
        case (playerSelection === "scissors" && computerSelection === "rock"):
            alert("rock beat scissors");
            return "You lose!";
        case (playerSelection === "paper" && computerSelection === "rock"):
            alert("paper beats rock");
            return "You win!";
        case (playerSelection === "scissors" && computerSelection === "paper"):
            alert("scissors beat paper");
            return "You win!";
        case (playerSelection === "rock" && computerSelection === "scissors"):
            alert("rock beat scissors");
            return "You win!";
        default:
            return "It's a tie"
    }
}




function game() {
    let computerScore = 0;
    let playerScore = 0;
    
    for (let i = 0; i < 5; i++) { 
        const computerSelection = getComputerChoice();
        const playerSelection = prompt("To play enter rock, paper or scissors:").toLowerCase();

        if (playRound(playerSelection, computerSelection) === "You win!") {
            playerScore++;
            alert(`You win ! the ${i + 1} round `)
        } else if (playRound(playerSelection, computerSelection) === "You lose!") {
            computerScore++;
            alert(`You lose! the ${i + 1} round `)
        } else {
            alert("It's a tie!")
        }
    }

    if (playerScore > computerScore) {
        alert(`The computer suck! Player wins ${playerScore} - ${computerScore}`)
    } else if (playerScore < computerScore) {
        alert(`You suck! Computer wins ${computerScore} - ${playerScore}`)
    } else {
        alert(`Both of you suck! ${computerScore} - ${playerScore}`)
    }

}
console.log(game()) 


