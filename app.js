function getUserChoice (){
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
getUserChoice()