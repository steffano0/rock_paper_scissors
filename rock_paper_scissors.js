function getComputerChoice() {
    let optionNumber = Math.floor(Math.random() * 3)
    switch (optionNumber){
        case 0 :
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
    }
}


