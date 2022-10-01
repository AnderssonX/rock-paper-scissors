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




// Update scores on screen and display image on scoring side.
// Passing "player", "compuyter" or "draw" to roundWinner to establish scoring side.

function updateScores(roundWinner) {
if (roundWinner === "player"){
playerSound.play();  
playerImage.style.background = "url('playerScore.png') no-repeat";
playerImage.style.backgroundSize = "contain";
computerImage.style.background = "url('') no-repeat";
}
if (roundWinner === "computer"){
  computerSound.play();
computerImage.style.background = "url('computerScore.png') no-repeat";
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

function game(){
  console.log("Current round ="+rounds);
   
   
    // for (let i = 0; i < 5; i++){
    

  
console.log(rounds+" round");

playRound(playerChoice);

checkResult(playerChoice, computerChoice);

}

function playRound() {
  
  
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
      computerCard.style.background = "url('crock.png') no-repeat";
      computerCard.style.backgroundSize = "contain";
      // else if random number is equal to 2 then computer choice is 'paper'
    } else if (random === 2) {
      computerChoice = "Paper";
      computerCard.style.background = "url('cpaper.png') no-repeat";
      computerCard.style.backgroundSize = "contain";
      // else if random number is equal to 3 then computer choice is 'scissors'
    } else if (random === 3) {
      computerChoice = "Scissors";
      computerCard.style.background = "url('cscissors.png') no-repeat";
      computerCard.style.backgroundSize = "contain";
    }

    

    // Show computer's choice in log
    // console.log("Computer chose: " + computerChoice);

  }
}

// check values and return winner;
function checkResult(playerChoice, computerChoice) {

  
  // Computer score
  if (playerChoice === "Rock" && computerChoice === "Paper") {
  outcomeLabel.textContent = ("Paper beats rock!");
    computerScore++;
    updateScores("computer");
  
  // Draw
  } else if (playerChoice === "Rock" && computerChoice === "Rock") {
    outcomeLabel.textContent = ("Rock against rock, no score!");
    updateScores("draw");

  // Player score
  } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
    outcomeLabel.textContent = ("Rock beats scissors!");
     playerScore++;
     updateScores("player");

  // Draw
    } else if (playerChoice === "Paper" && computerChoice === "Paper") {
    outcomeLabel.textContent = ("Paper against paper, no score!");
    updateScores("draw");

  // Player score 
  } else if (playerChoice === "Paper" && computerChoice === "Rock") {
    outcomeLabel.textContent = ("Paper beats rock!");
   playerScore++;
   updateScores("player");
  
  // Computer score 
  } else if (playerChoice === "Paper" && computerChoice === "Scissors") {
    outcomeLabel.textContent = ("Scissors beats paper!");
  computerScore++;
  updateScores("computer");

// Player score
} else if (playerChoice === "Scissors" && computerChoice === "Paper") {
    outcomeLabel.textContent = ("Scissors beats paper!");
     playerScore++;
     updateScores("player");
  
  // Computer score
    } else if (playerChoice === "Scissors" && computerChoice === "Rock") {
    outcomeLabel.textContent = ("Rock beats scissors!");
     computerScore++;
     updateScores("computer");
  
  // Draw
    } else if (playerChoice === "Scissors" && computerChoice === "Scissors") {
    outcomeLabel.textContent = ("Scissors against scissors, no score!");
    updateScores("draw");
  }
  
  
  if (rounds == 6){
    
    if (playerScore > computerScore){
      messageLabel.innerText = "";
      roundLabel.innerText ="You won the game!"
      playerImage.style.background = "url('playerScore.png') no-repeat";
      playerImage.style.backgroundSize = "contain";
      computerImage.style.background = "url('') no-repeat";
    }
    if (playerScore < computerScore){
      messageLabel.innerText = "";
      roundLabel.innerText = "Computer won the game!";
      playerImage.style.background = "url('') no-repeat";
      computerImage.style.background = "url('computerScore.png') no-repeat";
        computerImage.style.backgroundSize = "contain";
    }
    if (playerScore = computerScore){
      messageLabel.innerText = ""
      roundLabel.innerText = "The game is a draw!"
    }
   rockButton.hidden = true;
  scissorsButton.hidden = true;
  paperButton.hidden = true;
  resetButton.hidden = false;

    gameOver = true;
    rounds = 1;
    // pScore.textContent = "0";
// cScore.textContent = "0";
  if (playerScore > computerScore){
    // console.log("paintscore2")
    paintScore();
    
 
    // currentScore.textContent = ("You won the game! "+playerScore+" against "+computerScore);    
  playerScore = 0;
  computerScore = 0;
  
  return; 
  }else if (playerScore < computerScore) {
    
    updateScores();
    
    
    //currentScore.textContent = ("Game over! Computer won, "+computerScore+" against "+playerScore);    
  playerScore = 0;
  computerScore = 0;
  return; 
  } else {
    
    updateScores();
    
    
    // currentScore.textContent = ("Game over, and it's a draw! "+playerScore+" against "+computerScore);
  playerScore = 0;
  computerScore = 0;
  return; 
  }
  }
}



function initiate (e){
  if (gameOver) {
    
computerScore = 0;
playerScore = 0;

gameOver = false;
console.log("Uh oh, game is over!")
// round.textContent = "Round 1";
  }
  else {
    // vs.textContent =("VS");
    // clickSound.play();
    
    console.log("game is not over!")
playerChoice = this.id.toString();
playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.substring(1).toLowerCase();
console.log(playerChoice);
if (playerChoice == "Rock"){
  
  playerCard.style.background = "url('rock.png') no-repeat";
    playerCard.style.backgroundSize = "contain";
} else if (playerChoice == "Paper") {
  
  playerCard.style.background = "url('paper.png') no-repeat";
  playerCard.style.backgroundSize = "contain";
} else if (playerChoice == "Scissors") {
  
  playerCard.style.background = "url('scissors.png') no-repeat";
  playerCard.style.backgroundSize = "contain";
}
rounds ++; 
roundLabel.textContent = ("Round "+(rounds));      
game();

}
}

function reset()  {
  rounds = 1;
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



rockButton.addEventListener('click', initiate);
paperButton.addEventListener('click', initiate);
scissorsButton.addEventListener('click', initiate);
resetButton.addEventListener('click', reset);


