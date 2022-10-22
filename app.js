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

    switch(playerSelection){
        case "ROCK":
            switch(computerSelection){
                case "ROCK":
                    console.log("EGALITE")
                    break
                case "PAPER":
                    console.log("PERDU")
                    break
                case "SCISSORS":
                    console.log("GAGNE")
            }
            break
        case "PAPER":
            switch(computerSelection){
                case "ROCK":
                    console.log("GAGNE")
                    break
                case "PAPER":
                    console.log("EGALITE")
                    break
                case "SCISSORS":
                    console.log("PERDU")
            }
            break
        case "SCISSORS":
            switch(computerSelection){
                case "ROCK":
                    console.log("PERDU")
                    break
                case "PAPER":
                    console.log("GAGNE")
                    break
                case "SCISSORS":
                    console.log("EGALITE")
            }
            break
    }
}
compareChoices(getUserChoice(),getComputerChoice())