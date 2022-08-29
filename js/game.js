// Variable to store computer's weapon
let computerChoice; 

// Function to initiate the game
function startGame() {
  console.log("Game initiated");

  // Prompt player for weapon choice
  let playerChoice = prompt(
    "Choose your weapon. 1 = rock, 2 = paper & 3 = scissors"); 

// Parse user's input to int
playerChoice = parseInt(playerChoice);

// Get computer's weapon choice if user input 1, 2 or 3 otherwise restart game.  
  if (playerChoice === 1 || playerChoice === 2 || playerChoice === 3) {
    getComputerChoice();
  } else {
    console.log(playerChoice);
    console.log("Invalid choice, please choose 1, 2 or 3. Reload to play again");
    console.log("Use startGame() to play again...");
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