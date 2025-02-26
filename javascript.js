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
   if (humanChoice === computerChoice) {
    return "A draw! Score remains: " + humanScore + " | " + computerScore;
   } 
   else if (humanChoice === "Rock" && computerChoice === "Paper") {
    computerScore++;
    return "Ooo bad luck, Paper beats Rock! " + humanScore + " | " + computerScore;
   } 
   else if (humanChoice === "Paper" && computerChoice === "Scissors") {
    computerScore++;
    return "Oh man, Scissors beats Paper! " + humanScore + " | " + computerScore;
   }
   else if (humanChoice === "Scissors" && computerChoice === "Rock") {
    computerScore++;
    return "Whoops! Rock beats Scissors! " + humanScore + " | " + computerScore;
   }
   else {
    humanScore++;
    return "Nice! " + humanChoice + " beats " + computerChoice + " " + humanScore + " | " + computerScore;
   }
}



const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log(humanChoice)
console.log(computerChoice)
console.log(playRound(humanChoice,computerChoice))