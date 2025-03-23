let humanScore = 0; // Sets scores and round
let computerScore = 0;

function getComputerChoice(){
    const minCeiled = Math.ceil(1); // Sets minimum
    const maxFloored = Math.floor(3); // Sets maximum
    let computerValueChoice = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); //Randomises choice   
    
    if (computerValueChoice === 1){ // Converts random number to 'Rock, Paper or Scissors'
        computerChoice = "rock";
    }
    else if (computerValueChoice === 2){
        computerChoice = "paper";
    }
    else if (computerValueChoice === 3){
        computerChoice = "scissors";
    }
    return computerChoice;
}

    function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "A draw! Score remains: " + humanScore + " | " + computerScore;
    } 
    else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        return "Ooo bad luck, Paper beats Rock! " + humanScore + " | " + computerScore;
    } 
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        return "Oh man, Scissors beats Paper! " + humanScore + " | " + computerScore;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        return "Whoops! Rock beats Scissors! " + humanScore + " | " + computerScore;
    }
    else {
        humanScore++;
        return "Nice! " + humanChoice + " beats " + computerChoice + " " + humanScore + " | " + computerScore;
    }
    }

    function buttonClick(event) {
        let humanChoice = event.target.textContent.toLowerCase();
        let computerChoice = getComputerChoice();

        let result = playRound(humanChoice, computerChoice);
        console.log(result);
    }

    document.getElementById("btnRoc").addEventListener("click", buttonClick);
    document.getElementById("btnPap").addEventListener("click", buttonClick);
    document.getElementById("btnSci").addEventListener("click", buttonClick);