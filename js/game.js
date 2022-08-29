// Variable to store computer's weapon
let computerChoice; 
startGame();
// Function to initiate the game
function startGame() {
  console.log("Game initiated");

  // Prompt player for weapon choice
  let playerChoice = prompt(
    "Choose your weapon. \"Rock\", \"Paper\" or \"Scissor\""); 

    // Capitalize first letter in user's input
playerChoice = playerChoice.charAt(0).toUpperCase()+playerChoice.substring(1).toLowerCase();
console.log("User input: \""+playerChoice+"\"");

// Check user's weapon choice and start game on valid option.
  if (playerChoice === "Rock" || playerChoice === "Paper" || playerChoice === "Scissors") {
    getComputerChoice();
  } else {
    console.log("\""+playerChoice+"\  is not a valid option");
    console.log("Use startGame() or reload page to play again...");
    }
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

  // Return computer's choice
  return console.log("Computer chose " + random + ' "' + computerChoice + '"'); 
}
