// Variable to store computer's weapon
let computerChoice;
let playerChoice;
let rounds = 0;
let playerScore = 0;
let computerScore = 0;

// Initiate game

game(); 

function game(){
    for (let i = 0; i < 5; i++){
playRound();

checkResult(playerChoice, computerChoice);
console.log("Current score - You: "+playerScore+" Computer: "+computerScore)
}
if (playerScore > computerScore){
return console.log("You won! "+playerScore+" against "+computerScore);    
}else if (playerScore < computerScore) {
return console.log("Computer won. "+computerScore+" against "+playerScore);    
} else {
return(console.log("It's a draw! "+playerScore+" against "+computerScore))
}
}

// Function to initiate the game
function playRound() {

  // Prompt player for weapon choice
  playerChoice = prompt('Choose your weapon. "Rock", "Paper" or "Scissor"');

  // Capitalize first letter in user's input
  playerChoice =
    playerChoice.charAt(0).toUpperCase() +
    playerChoice.substring(1).toLowerCase();
  

  // Check user's weapon choice and start game on valid option.
  if (
    playerChoice === "Rock" ||
    playerChoice === "Paper" ||
    playerChoice === "Scissors"
  ) {
    getComputerChoice();
  } else {
    console.log('"' + playerChoice + "  is not a valid option");
    console.log("Choose again");
    playRound();
  }

  // Function to get computer's weapon choice
  function getComputerChoice() {
    // Generate a random number between 1 - 3
    let random = Math.floor(Math.random() * 3) + 1;

    // if number is equal to 1 then computer choice is 'rock'
    if (random === 1) {
      computerChoice = "Rock";

      // else if random number is equal to 2 then computer choice is 'paper'
    } else if (random === 2) {
      computerChoice = "Paper";

      // else if random number is equal to 3 then computer choice is 'scissors'
    } else if (random === 3) {
      computerChoice = "Scissors";
    }

    // Show computer's choice in log
    // console.log("Computer chose: " + computerChoice);

  }
}

// check values and return winner;
function checkResult(playerChoice, computerChoice) {
    console.log("You chose \""+playerChoice+"\", computer chose \""+computerChoice+"\"")
  if (playerChoice === "Rock" && computerChoice === "Paper") {
    console.log("That's a draw!");
    return "draw";
  } else if (playerChoice === "Rock" && computerChoice === "Rock") {
    console.log("Computer won the round, paper beats rock!");
    return computerScore++;
  } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
    console.log("You won the round! Rock beats scissors!");
    return playerScore++;
  } else if (playerChoice === "Paper" && computerChoice === "Paper") {
    console.log("That's a draw!");
    return "draw";
  } else if (playerChoice === "Paper" && computerChoice === "Rock") {
    console.log("You won the round! Paper beats rock!");
    return playerScore++;
  } else if (playerChoice === "Paper" && computerChoice === "Scissors") {
    console.log("Computer won the round! Scissors beats paper!");
    return computerScore++;
  } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
    console.log("You won the round! Scissors beats paper!");
    return playerScore++;
  } else if (playerChoice === "Scissors" && computerChoice === "Rock") {
    console.log("You lost the round! Rock beats scissors!");
    return computerScore++;
  } else if (playerChoice === "Scissors" && computerChoice === "Scissors") {
    console.log("It's a draw! Scissors vs scissors");
    return "draw";
  }
}
