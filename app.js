function getUserChoice(){

    let userChoice = ""
    let userInput = ""

    while(userInput !== "ROCK" || userInput !== "PAPER" || userInput !== "SCISSORS"){

        userInput = window.prompt("Make your choice : ROCK | PAPER | SCISSORS")

        if(userInput === "ROCK" || userInput === "PAPER" || userInput === "SCISSORS"){

            userChoice = userInput
            console.log(`USER CHOSE ${userChoice}`)
            return userChoice
        }
    }
}
// getUserChoice()

function getComputerChoice(){

    let computerChoice = ""
    let computerInput = 0

    computerInput = Math.random()
    
    switch(true){
        case (computerInput <= (1/3)):
            computerChoice = "ROCK"
            break
        case (computerInput> (1/3) && computerInput <= (2/3)):
            computerChoice = "PAPER"
            break
        
        case (computerInput > (2/3)):
            computerChoice = "SCISSORS"
            break
    }

    // console.log(computerInput)
    console.log(`COMPUTER CHOSE ${computerChoice}`)
    return computerChoice
}
// getComputerChoice()

function compareChoices(playerSelection, computerSelection){

    let message = ""

    switch(playerSelection){
        case "ROCK":
            switch(computerSelection){
                case "ROCK":
                    message = "That's a TIE. Try again!"
                    break
                case "PAPER":
                    message = "You LOOSE. PAPER beats ROCK"
                    break
                case "SCISSORS":
                    message = "You WIN. ROCK beats SCISSORS"
                    break
            }
            break
        case "PAPER":
            switch(computerSelection){
                case "ROCK":
                    message = "You WIN. PAPER beats ROCK"
                    break
                case "PAPER":
                    message = "That's a TIE. Try again!"
                    break
                case "SCISSORS":
                    message = "You LOOSE. SCISSORS beats PAPER!"
                    break
            }
            break
        case "SCISSORS":
            switch(computerSelection){
                case "ROCK":
                    message = "You LOOSE. ROCK beats SCISSORS!"
                    break
                case "PAPER":
                    message = "You WIN. SCISSORS beats PAPER"
                    break
                case "SCISSORS":
                    message = "That's a TIE. Try again!"
                    break
            }
            break
    }
    console.log(message)
    return message
}
compareChoices(getUserChoice(),getComputerChoice())