function alertFunction() {
    alert("hey game over");
  }
  const btn = document.querySelector("#btnRoc");
  //const btn = document.querySelector("#btnPap");
  //const btn = document.querySelector("#btnSci");

  btn.addEventListener("click", alertFunction);



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

function getHumanChoice(){ // Sets human choice
    humanChoice = prompt("Rock, Paper or Scissors?").toLowerCase(); // Prompts user to enter choice
    return humanChoice;
}


function playGame(){

    let humanScore = 0; // Sets scores and round
    let computerScore = 0;

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


    //    for (roundNumber = 0; roundNumber < 5; roundNumber++) { // Counts round numbers
    //        playRound(getHumanChoice(), getComputerChoice());
    //    }
        console.log("Game Over final score: You Got: " + humanScore + " | I got: " + computerScore); // Outputs final results
}

playGame()