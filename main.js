//Rock Paper Scissors plan

// get user move
//get computer move
//compare moves and store scores and ties,
//alert winner
//ask if player wants to play again


//ask for username
let username = prompt("Please enter a username")
while (!username.match (/^[A-Z][a-zA-Z0-9]{0,9}$/)) 
{
    username=prompt("Username must be 10 characters or less and start with a capital letter.")
}



//get user move
function getUserMove() {
    let userMove = prompt(`Rock, Paper, or Scissors? ${username}`).toLowerCase();
    while (
      userMove !== "rock" &&
      userMove !== "paper" &&
      userMove !== "scissors"
    ) {
      userMove = prompt("Please enter only 'Rock', 'Paper', or 'Scissors'.");
    }
    numGames ++
    return userMove;
  }
  
  //get computer move
  function getComputerMove() {
    let options = ["rock", "paper", "scissors"];
    let i = Math.floor(Math.random() * options.length);
    let computerMove = options[i];
    return computerMove;
  }
  
  //inform user about the moves
  function alertMoves(userMove, computerMove) {
    alert(`Your move is ${userMove} and the computer's move is ${computerMove}`);
  }
  
  let userScore = 0;
  let userWins = 0;
  let userLoss = 0;
  let userTies = 0;
  let numGames = 0;
  
  //compare user move and computerMove
  function getOutcome(userMove, computerMove) {
    if (
      (userMove === "rock" && computerMove === "rock") ||
      (userMove === "paper" && computerMove === "paper") ||
      (userMove === "scissors" && computerMove === "scissors")
    ) {
      alert("You draw");
      userTies++;
    } else if (
      (userMove === "rock" && computerMove === "scissors") ||
      (userMove === "paper" && computerMove === "rock") ||
      (userMove === "scissors" && computerMove === "paper")
    ) {
      alert("You win");
      userScore++;
      userWins ++;
    } else {
      alert("You lose");
      userScore--;
      userLoss ++;
    }
  }
  
  function loopGame() {
  let repeat = prompt("Do you want to play again?").toLowerCase()
  
  if (repeat === "yes") {
      playGame()
  }
  else {
      alert(`Game over:\n Wins: ${userWins}\n Losses: ${userLoss}\n Ties: ${userTies}\n Number of games played: ${numGames}\nYour score is: ${userScore}`)
  }
  
  }
  
  //test
  function playGame(){
  let userMove = getUserMove();
  let computerMove = getComputerMove();
  alertMoves(userMove, computerMove);
  getOutcome(userMove, computerMove);
  loopGame();
  }
  playGame()
  
  