// Variable to store computer's weapon
let computerChoice;
let playerChoice;
let rounds = 0;
let playerScore = 0;
let computerScore = 0;
let gameOver = false;
let clickSound = new Audio ('click.mp3');
let lost = new Audio ('_click.mp3');

const rockButton = document.getElementById("rock");
const vs = document.getElementById("vs");
const paperButton = document.getElementById("paper");
const resetButton = document.getElementById("reset");
const scissorsButton = document.getElementById("scissors");
const uiText = document.getElementById("uiText");
const uiOutcome = document.getElementById("uiOutcome");
const playerCard = document.getElementById("playerCard");
const computerCard = document.getElementById("computerCard");
const pScore = document.getElementById("pScore");
const cScore = document.getElementById("cScore");
console.log(uiText);
// uiText.innerText = "";
const currentScore = document.getElementById("score");
const round = document.getElementById("round");
// score.innerText = ("You: "+playerScore+" - Computer: "+computerScore);
// Initiate the game.
// game(); 

round.textContent = ((playerScore)+" - "+(computerScore));       

function paintScore() {
//   pScore.textContent = (playerScore);
// cScore.textContent = (computerScore);
round.textContent = ((playerScore)+" - "+(computerScore));       
}

function game(){
  console.log("Current round ="+rounds);
   
  //round.textContent = ("Round "+(rounds));       
    // for (let i = 0; i < 5; i++){
    

  
console.log(rounds+" round");

playRound(playerChoice);

checkResult(playerChoice, computerChoice);




// currentScore.textContent = ("Current score - You: "+playerScore+" Computer: "+computerScore);

      
// }


}
// Function to initiate the game
function playRound() {
  
  // Prompt player for weapon choice
  // playerChoice = prompt('Choose your weapon. "Rock", "Paper" or "Scissor"');

  // Capitalize first letter in user's input
  // playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.substring(1).toLowerCase();
  

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

  
  // uiText.textContent = ("You chose \""+playerChoice+"\", computer chose \""+computerChoice+"\" ")
  if (playerChoice === "Rock" && computerChoice === "Paper") {
//  uiOutcome.textContent = ("Computer won the round! Paper beats rock!");
    computerScore++;
  } else if (playerChoice === "Rock" && computerChoice === "Rock") {
    // uiOutcome.textContent = ("That's a draw!");
    
    
  } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
    // uiOutcome.textContent = ("You won the round! Rock beats scissors!");
     playerScore++;
  } else if (playerChoice === "Paper" && computerChoice === "Paper") {
    // uiOutcome.textContent = ("That's a draw!");
    
  } else if (playerChoice === "Paper" && computerChoice === "Rock") {
    // uiOutcome.textContent = ("You won the round! Paper beats rock!");
   playerScore++;
  } else if (playerChoice === "Paper" && computerChoice === "Scissors") {
    // uiOutcome.textContent = ("Computer won the round! Scissors beats paper!");
  computerScore++;
  } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
    // uiOutcome.textContent = ("You won the round! Scissors beats paper!");
     playerScore++;
  } else if (playerChoice === "Scissors" && computerChoice === "Rock") {
    // uiOutcome.textContent = ("You lost the round! Rock beats scissors!");
     computerScore++;
  } else if (playerChoice === "Scissors" && computerChoice === "Scissors") {
    // uiOutcome.textContent = ("It's a draw! Scissors vs scissors");
    
  }
  console.log("paintscore1")
  paintScore();
  if (rounds == 5){
   rockButton.hidden = true;
  scissorsButton.hidden = true;
  paperButton.hidden = true;
  resetButton.hidden = false;

    gameOver = true;
    rounds = 0;
    // pScore.textContent = "0";
// cScore.textContent = "0";
  if (playerScore > computerScore){
    console.log("paintscore2")
    paintScore();
    
 
    // currentScore.textContent = ("You won the game! "+playerScore+" against "+computerScore);    
  playerScore = 0;
  computerScore = 0;
  
  return; 
  }else if (playerScore < computerScore) {
    console.log("paintscore3")
    paintScore();
    
    
    //currentScore.textContent = ("Game over! Computer won, "+computerScore+" against "+playerScore);    
  playerScore = 0;
  computerScore = 0;
  return; 
  } else {
    console.log("paintscore4")
    paintScore();
    
    
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
    vs.textContent =("VS");
    clickSound.play();
    console.log("game is not over!")
playerChoice = this.id.toString();
playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.substring(1).toLowerCase();
console.log(playerChoice);
if (playerChoice == "Rock"){
  rockButton.style.border = "thick solid rgb(9, 250, 130)";
  rockButton.style.backgroundColor = "rgb(166, 166, 166)";
  paperButton.style.border = "thick solid rgb(40, 40, 40)";
  scissorsButton.style.border = "thick solid rgb(40, 40, 40)";
  playerCard.style.background = "url('rock.png') no-repeat";
    playerCard.style.backgroundSize = "contain";
} else if (playerChoice == "Paper") {
  paperButton.style.backgroundColor = "rgb(166, 166, 166)";
  rockButton.style.border = "thick solid rgb(40, 40, 40)";
  paperButton.style.border = "thick solid rgb(9, 250, 130)";
  scissorsButton.style.border = "thick solid rgb(40, 40, 40)";
  playerCard.style.background = "url('paper.png') no-repeat";
  playerCard.style.backgroundSize = "contain";
} else if (playerChoice == "Scissors") {
  scissorsButton.style.backgroundColor = "rgb(166, 166, 166)";
  rockButton.style.border = "thick solid rgb(40, 40, 40)";
  paperButton.style.border = "thick solid rgb(40, 40, 40)";
  scissorsButton.style.border = "thick solid rgb(9, 250, 130)";
  playerCard.style.background = "url('scissors.png') no-repeat";
  playerCard.style.backgroundSize = "contain";
}
rounds ++; 
game();

}
}

function reset()  {
resetButton.hidden = true;
rockButton.hidden = false;
paperButton.hidden = false;
scissorsButton.hidden = false;
rockButton.style.border = "thick solid gray";
  paperButton.style.border = "thick solid gray";
  scissorsButton.style.border = "thick solid gray";
round.textContent = ((playerScore)+" - "+(computerScore));
vs.textContent ="";
playerCard.style.backgroundImage = "";
computerCard.style.backgroundImage = "";
initiate();

}

rockButton.addEventListener('click', initiate);
paperButton.addEventListener('click', initiate);
scissorsButton.addEventListener('click', initiate);
resetButton.addEventListener('click', reset);


