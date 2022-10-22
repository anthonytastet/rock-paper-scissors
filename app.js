function getUserChoice(){

    let userChoice = ""
    let userInput = ""

    while(userInput !== "ROCK" || userInput !== "PAPER" || userInput !== "SCISSORS"){

        userInput = window.prompt("Make your choice : ROCK | PAPER | SCISSORS")

        if(userInput === "ROCK" || userInput === "PAPER" || userInput === "SCISSORS"){

            userChoice = userInput
            console.log(`>USER CHOSE ${userChoice}`)
            return userChoice
        }
    }
}

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
    console.log(`>COMPUTER CHOSE ${computerChoice}`)
    return computerChoice
}

function compareChoices(playerSelection, computerSelection){

    let message = ""

    switch(playerSelection){
        case "ROCK":
            switch(computerSelection){
                case "ROCK":
                    message = "That's a TIE. Try again!\n"
                    break
                case "PAPER":
                    message = "You LOOSE. PAPER beats ROCK!\n"
                    break
                case "SCISSORS":
                    message = "You WIN. ROCK beats SCISSORS!\n"
                    break
            }
            break
        case "PAPER":
            switch(computerSelection){
                case "ROCK":
                    message = "You WIN. PAPER beats ROCK!\n"
                    break
                case "PAPER":
                    message = "That's a TIE. Try again!\n"
                    break
                case "SCISSORS":
                    message = "You LOOSE. SCISSORS beats PAPER!\n"
                    break
            }
            break
        case "SCISSORS":
            switch(computerSelection){
                case "ROCK":
                    message = "You LOOSE. ROCK beats SCISSORS!\n"
                    break
                case "PAPER":
                    message = "You WIN. SCISSORS beats PAPER!\n"
                    break
                case "SCISSORS":
                    message = "That's a TIE. Try again!\n"
                    break
            }
            break
    }
    console.log(message)
    return message
}

function playRound(){

    let roundScore = 0
    let message = compareChoices(getUserChoice(), getComputerChoice())

    switch(message){
        case "That's a TIE. Try again!\n":
            playRound()
            break
        case "You WIN. ROCK beats SCISSORS!\n":
            roundScore += 1
            break
        case "You WIN. PAPER beats ROCK!\n":
            roundScore += 1
            break
        case "You WIN. SCISSORS beats PAPER!\n":
            roundScore += 1
            break
        case "You LOOSE. PAPER beats ROCK!\n":
            roundScore = 0
            break
        case "You LOOSE. SCISSORS beats PAPER!\n":
            roundScore = 0
            break
        case "You LOOSE. ROCK beats SCISSORS!\n":
            roundScore = 0
            break
    }

    return roundScore
}

function game(){

    let gameScore = 0

    for(i=1; i<=3; i++){

        console.log(`\nROUND ${i}, start!`)

        roundScore = playRound()
        gameScore += roundScore
    }

    console.log(`SCORE: ${gameScore}`)
}
game()