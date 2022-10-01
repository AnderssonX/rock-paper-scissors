let computerChoice;       // stores computer's weapon choice
let playerChoice;         // stores player's weapon choice
let rounds = 1;           // counts rounds
let playerScore = 0;      // keeps track of player's score  
let computerScore = 0;    // keeps track of computer's score
let gameOver = false;     // to check if game is over

const playerSound = new Audio ('sound/playerScore.wav');      // play when player wins the round
const computerSound = new Audio ('sound/computerScore.wav');  // play when computer wins the round
const drawSound = new Audio ('sound/drawScore.wav')           // play if the round is a draw

const playerImage = document.getElementById("playerImage");     // show when player wins the round
const computerImage = document.getElementById("computerImage"); // show when computer wins the round

const leftScoreLabel = document.getElementById("leftScoreLabel");   // displays player score
const roundLabel = document.getElementById("roundLabel");           // displays current round
const rightScoreLabel = document.getElementById("rightScoreLabel"); // displays computer score
const outcomeLabel = document.getElementById("outcomeLabel");       // shows round outcome message
const playerCard = document.getElementById("playerCard");           // shows player's chosen weapon for the round
const computerCard = document.getElementById("computerCard");       // shows computer's chosen weapon for the round

const paperButton = document.getElementById("paper");               // paper button
const rockButton = document.getElementById("rock");                 // rock button
const scissorsButton = document.getElementById("scissors");         // scissor button
const messageLabel = document.getElementById("messageLabel");       // to dislay some messages to player during game

const resetButton = document.getElementById("reset");   // Button that calls on reset game function between games

// Start a game of rock, paper, scissors.
function game(){
 getComputerChoice();                           // Randomize weapon for computer.
 checkResult(playerChoice, computerChoice);     // Compare weapons and determine round winner.
  }
  
// Update current scores, play sound and show images depending on which player won the round.
function updateScores(roundWinner) {
if (roundWinner === "player"){
playerSound.play();  
playerImage.style.background = "url('images/playerScore.png') no-repeat";
playerImage.style.backgroundSize = "contain";
computerImage.style.background = "url('') no-repeat";
}
if (roundWinner === "computer"){
  computerSound.play();
computerImage.style.background = "url('images/computerScore.png') no-repeat";
computerImage.style.backgroundSize = "contain";
playerImage.style.background = "url('') no-repeat";
}
if (roundWinner === "draw"){
  drawSound.play();
  playerImage.style.background = "url('') no-repeat";
  computerImage.style.background = "url('') no-repeat";
}
leftScoreLabel.textContent = (playerScore);
rightScoreLabel.textContent = (computerScore);
}

  // Get a random weapon choice for computer and display chosen weapon on the game screen.
  function getComputerChoice() {

    let random = Math.floor(Math.random() * 3) + 1;   
    
    if (random === 1) {
      computerChoice = "rock";
      computerCard.style.background = "url('images/crock.png') no-repeat";
      computerCard.style.backgroundSize = "contain";
    
    } else if (random === 2) {
      computerChoice = "paper";
      computerCard.style.background = "url('images/cpaper.png') no-repeat";
      computerCard.style.backgroundSize = "contain";
    
    } else if (random === 3) {
      computerChoice = "scissors";
      computerCard.style.background = "url('images/cscissors.png') no-repeat";
      computerCard.style.backgroundSize = "contain";
    }

  }


// compare weapons and determine round winner.
function checkResult(playerChoice, computerChoice) {

  // Computer scored
  if (playerChoice === "rock" && computerChoice === "paper") {
  outcomeLabel.textContent = ("Paper beats rock!");
    computerScore++;
    updateScores("computer");
  
  // Draw
  } else if (playerChoice === "rock" && computerChoice === "rock") {
    outcomeLabel.textContent = ("Rock against rock, no score!");
    updateScores("draw");

  // Player scored
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    outcomeLabel.textContent = ("Rock beats scissors!");
     playerScore++;
     updateScores("player");

  // Draw
    } else if (playerChoice === "paper" && computerChoice === "paper") {
    outcomeLabel.textContent = ("Paper against paper, no score!");
    updateScores("draw");

  // Player scored
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    outcomeLabel.textContent = ("Paper beats rock!");
   playerScore++;
   updateScores("player");
  
  // Computer scored
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    outcomeLabel.textContent = ("Scissors beats paper!");
  computerScore++;
  updateScores("computer");

// Player scored
} else if (playerChoice === "scissors" && computerChoice === "paper") {
    outcomeLabel.textContent = ("Scissors beats paper!");
     playerScore++;
     updateScores("player");
  
  // Computer scored
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
    outcomeLabel.textContent = ("Rock beats scissors!");
     computerScore++;
     updateScores("computer");
  
  // Draw
    } else if (playerChoice === "scissors" && computerChoice === "scissors") {
    outcomeLabel.textContent = ("Scissors against scissors, no score!");
    updateScores("draw");
  }
  
  console.log(rounds)
  if (rounds == 6){   // run endGame function when round 5 is finished.
  
    endGame();
    
      }
          else {    // update scores and round number if the game is still on.
            roundLabel.textContent = ("Round "+(rounds));      
  }
  }

function initiate (e){
  if (gameOver) {
    
computerScore = 0;
playerScore = 0;

gameOver = false;


  }
  else {
    
playerChoice = this.id.toString();  // pass button id as string to playerChoice variable to store weapon choice.
if (playerChoice == "rock"){
  
  playerCard.style.background = "url('images/rock.png') no-repeat";
    playerCard.style.backgroundSize = "contain";
} else if (playerChoice == "paper") {
  
  playerCard.style.background = "url('images/paper.png') no-repeat";
  playerCard.style.backgroundSize = "contain";
} else if (playerChoice == "scissors") {
  
  playerCard.style.background = "url('images/scissors.png') no-repeat";
  playerCard.style.backgroundSize = "contain";
}
rounds ++; 

game();

}
}

function reset()  {
  //rounds = 0;
  roundLabel.innerText = "Round "+rounds;
  resetButton.hidden = true;
  rockButton.hidden = false;
  paperButton.hidden = false;
  scissorsButton.hidden = false;
  rockButton.style.border = "thick solid rgb(40, 40, 40)";
    paperButton.style.border = "thick solid rgb(40, 40, 40)";
    scissorsButton.style.border = "thick solid rgb(40, 40, 40)";
  
  leftScoreLabel.textContent = (playerScore);
  rightScoreLabel.textContent = (computerScore);
  
  playerCard.style.backgroundImage = "";
  computerCard.style.backgroundImage = "";
  playerImage.style.backgroundImage = "";
  computerImage.style.backgroundImage = "";
  outcomeLabel.innerText = "";
  leftScoreLabel.innerText = "0";
  rightScoreLabel.innerText = "0";
  messageLabel.innerText = "Choose your weapon!";
  
  initiate();
  
  }

  // Announce the winner and end the game
  function endGame(){
    console.log(playerScore+" "+(computerScore));
    if (playerScore > computerScore){
      messageLabel.innerText = "";
      roundLabel.innerText ="You won the game!"
      playerImage.style.background = "url('images/playerScore.png') no-repeat";
      playerImage.style.backgroundSize = "contain";
      computerImage.style.background = "url('') no-repeat";
    }
    if (playerScore < computerScore){
      messageLabel.innerText = "";
      roundLabel.innerText = "Computer won the game!";
      playerImage.style.background = "url('') no-repeat";
      computerImage.style.background = "url('images/computerScore.png') no-repeat";
        computerImage.style.backgroundSize = "contain";
    }
    if (playerScore == computerScore){
      messageLabel.innerText = "";
      roundLabel.innerText = "The game is a draw!";
     }


    
    
   rockButton.hidden = true;
  scissorsButton.hidden = true;
  paperButton.hidden = true;
  resetButton.hidden = false;

    gameOver = true;
    rounds = 1;

  }



rockButton.addEventListener('click', initiate);
paperButton.addEventListener('click', initiate);
scissorsButton.addEventListener('click', initiate);
resetButton.addEventListener('click', reset);


