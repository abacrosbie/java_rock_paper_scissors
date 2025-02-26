function getComputerChoice(){
    const minCeiled = Math.ceil(1); // Sets minimum
    const maxFloored = Math.floor(3); // Sets maximum
    let computerChoiceValue = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); //Randomises choice   
    let computerChoice = "";

    if (computerChoiceValue === 1){ // Converts random number to 'Rock, Paper or Scissors'
        computerChoice = "Rock";
    }
    else if (computerChoiceValue === 2){
        computerChoice = "Paper";
    }
    else if (computerChoiceValue === 3){
        computerChoice = "Scissors";
    }
}

function getHumanChoice(humanChoice){ // Sets human choice
    humanChoice = prompt("Rock, Paper or Scissors?"); // Prompts user to enter choice
}

let humanScore = 0 // Sets scores
let computerScore = 0 

function playRound(computerChoice,humanChoice){
    
}