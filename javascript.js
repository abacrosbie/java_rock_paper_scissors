function getComputerChoice(){
    const minCeiled = Math.ceil(1); // Sets minimum
    const maxFloored = Math.floor(3); // Sets maximum
    let computerChoice = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); //Randomises choice   
    
    if (computerChoice === 1){ // Converts random number to 'Rock, Paper or Scissors'
        return "Rock";
    }
    else if (computerChoice === 2){
        return "Paper";
    }
    else if (computerChoice === 3){
        return "Scissors";
    }
}

console.log(getComputerChoice());


