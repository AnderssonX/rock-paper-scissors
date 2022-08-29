console.log("Script initiated")

function getComputerChoice(){


 let random = Math.floor(Math.random()*3)   // Generate a random number between 0 - 2


// if number is equal to 0 then computer choice is 'rock'
// else if random number is equal to 1 then computer choice is 'paper'
// else if random number is equal to 2 then computer choice is 'scissors'
return console.log("Computer chose "+random);
}

getComputerChoice();