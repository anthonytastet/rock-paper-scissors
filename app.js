function getUserChoice(){
    let userChoice = ""
    let userInput = ""

    while(userInput !== "ROCK" || userInput !== "PAPER" || userInput !== "SCISSORS"){

        userInput = window.prompt("Make your choice : ROCK | PAPER | SCISSORS")

        if(userInput === "ROCK" || userInput === "PAPER" || userInput === "SCISSORS"){

            userChoice = userInput
            console.log(userChoice)
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
            break;

        case (computerInput> (1/3) && computerInput <= (2/3)):
            computerChoice = "PAPER"
            break;
        
        case (computerInput > (2/3)):
            computerChoice = "SCISSORS"
            break;
    }


    console.log(computerInput)
    console.log(computerChoice)
}
getComputerChoice()