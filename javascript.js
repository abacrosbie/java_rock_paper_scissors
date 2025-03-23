//container in html
const container = document.querySelector("#container");

// Sets scores and round
let humanScore = 0; 
let computerScore = 0;
const maxScore = 5;

//randomly gets computer choice
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

//plays a round
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

//winner message function
function declareWinner(message) {
    const winnerMessage = document.createElement("h2");
    winnerMessage.textContent = message;
    container.appendChild(winnerMessage);
}

//button click function to play a round
function buttonClick(event) {
    //stops game if there's a winner
    if (humanScore >= maxScore || computerScore >= maxScore) {
        return;
    }

    let humanChoice = event.target.textContent.toLowerCase();
    let computerChoice = getComputerChoice();
    let result = playRound(humanChoice, computerChoice);

        //append round results to container
        const content = document.createElement("div");
        content.classList.add("content");
        content.textContent = result;
        container.appendChild(content);
    
    //calls declare winner function
    if (humanScore === maxScore) {
        declareWinner("You Won! Have a peanut!");
    } else if (computerScore === maxScore) {
        declareWinner("Ooo tough luck buddy, you lost!");
    }
}

//button listeners
document.getElementById("btnRoc").addEventListener("click", buttonClick);
document.getElementById("btnPap").addEventListener("click", buttonClick);
document.getElementById("btnSci").addEventListener("click", buttonClick);