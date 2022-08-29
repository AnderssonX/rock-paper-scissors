// Variable to store computer's weapon
let computerChoice;
let playerChoice;

// Initiate game
startGame();


// Function to initiate the game
function startGame() {
  console.log("Game initiated");

  // Prompt player for weapon choice
  playerChoice = prompt('Choose your weapon. "Rock", "Paper" or "Scissor"');

  // Capitalize first letter in user's input
  playerChoice =
    playerChoice.charAt(0).toUpperCase() +
    playerChoice.substring(1).toLowerCase();
  console.log('User chose: "' + playerChoice + '"');

  // Check user's weapon choice and start game on valid option.
  if (
    playerChoice === "Rock" ||
    playerChoice === "Paper" ||
    playerChoice === "Scissors"
  ) {
    getComputerChoice();
  } else {
    console.log('"' + playerChoice + "  is not a valid option");
    console.log("Use startGame() or reload page to play again...");
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

    console.log("Compter chose: " + computerChoice);

    checkResult(playerChoice, computerChoice);
  }
}

// check values and determine a winner.
function checkResult(playerChoice, computerChoice) {
  if (playerChoice === "Rock" && computerChoice === "Paper") {
    console.log("It's a draw! Rock vs rock!");
  } else if (playerChoice === "Rock" && computerChoice === "Rock") {
    console.log("You lose! Paper beats rock!");
  } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
    console.log("You win! Rock beats scissors!");
  } else if (playerChoice === "Paper" && computerChoice === "Paper") {
    console.log("It's a draw! Paper vs paper!");
  } else if (playerChoice === "Paper" && computerChoice === "Rock") {
    console.log("You win! Paper beats rock!");
  } else if (playerChoice === "Paper" && computerChoice === "Scissors") {
    console.log("You lose! Scissors beats paper!");
  } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
    console.log("You win! Scissors beats paper!");
  } else if (playerChoice === "Scissors" && computerChoice === "Rock") {
    console.log("You lose! Rock beats scissors!");
  } else if (playerChoice === "Scissors" && computerChoice === "Scissors") {
    console.log("It's a draw! Scissors vs scissors");
  }
}
