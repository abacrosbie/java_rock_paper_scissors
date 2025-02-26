function getComputerChoice(){
    const minCeiled = Math.ceil(1); // Sets minimum
    const maxFloored = Math.floor(3); // Sets maximum
    let computerValueChoice = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); //Randomises choice   
    
    if (computerValueChoice === 1){ // Converts random number to 'Rock, Paper or Scissors'
        computerChoice = "Rock";
    }
    else if (computerValueChoice === 2){
        computerChoice = "Paper";
    }
    else if (computerValueChoice === 3){
        computerChoice = "Scissors";
    }
}

function getHumanChoice(){ // Sets human choice
    humanChoice = prompt("Rock, Paper or Scissors?"); // Prompts user to enter choice
}

let humanScore = 0 // Sets scores
let computerScore = 0 

function playRound(humanChoice, computerChoice){
   if (humanChoice === computerChoice){
    return "lol draw";
   }
   else {return "Nah mate";}
}



const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log(humanChoice)
console.log(computerChoice)
console.log(playRound(humanChoice,computerChoice))