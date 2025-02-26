function getComputerChoice(){
    const minCeiled = Math.ceil(1); // Sets minimum
    const maxFloored = Math.floor(3); // Sets maximum
    let computerChoice = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); //Randomises choice   
    
    return computerChoice
    
}

console.log(getComputerChoice());


