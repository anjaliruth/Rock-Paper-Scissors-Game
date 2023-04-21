//Rock Paper Scissors plan

// get user move
//get computer move✅
//compare moves and store scores and ties✅
//alert winner✅
//ask if player wants to play again
//update stats
//playgame function

//ask for username
// let username = prompt("Please enter a username");
// while (!username.match(/^[A-Z][a-zA-Z0-9]{0,9}$/)) {
//   username = prompt(
//     "Username must be 10 characters or less and start with a capital letter."
//   );
// }
let numGames = 0;
let userScore = 0;
let userWins = 0;
let userLoss = 0;
let userTies = 0;
function playGame(move) {
 let userMove = move;
 numGames++
 let computerMove = getComputerMove()
 console.log(computerMove)
alertMoves(userMove, computerMove)
setTimeout(()=>getOutcome(userMove, computerMove), 1000)
//setTimeout(()=>showStats())
showStats()
document.querySelector("#playAgain").style.display = "block"
document.querySelector("#playAgain").addEventListener("click", () => loopGame())
}
//get user move
//triggers the playgame function with the move as an argument
document.querySelector("#RockButton").addEventListener("click",() => playGame("rock"));
document.querySelector("#PaperButton").addEventListener("click", () =>playGame("paper"));
document.querySelector("#ScissorsButton").addEventListener("click", () =>playGame("scissors"));


//get computer move
function getComputerMove() {
  let options = ["rock", "paper", "scissors"];
  let i = Math.floor(Math.random() * options.length);
  let computerMove = options[i];
  return computerMove;
}

//inform user about the moves

function alertMoves(userMove, computerMove) {
  document.querySelector("#moves").textContent = `Your move is ${userMove} and the computer's move is ${computerMove}`
}




//compare user move and computerMove
function getOutcome(userMove, computerMove) {
  if (
    (userMove === "rock" && computerMove === "rock") ||
    (userMove === "paper" && computerMove === "paper") ||
    (userMove === "scissors" && computerMove === "scissors")
  ) {
   document.querySelector("#result").textContent = 'You draw'
    userTies++;
  } else if (
    (userMove === "rock" && computerMove === "scissors") ||
    (userMove === "paper" && computerMove === "rock") ||
    (userMove === "scissors" && computerMove === "paper")
    
  ) {
    document.querySelector("#result").textContent = 'You win'
    userScore++;
    userWins++;
  } else {
    document.querySelector("#result").textContent = 'You lose'
    userScore--;
    userLoss++;
  }
}

function showStats() {
  document.querySelector("#numGames").textContent = `Games Played: ${numGames}` 
  document.querySelector("#score").textContent = `Score: ${numGames}` 
  document.querySelector("#wins").textContent = ` Wins: ${userWins}` 
  document.querySelector("#losses").textContent = ` Losses: ${userLoss}` 
  document.querySelector("#ties").textContent = `Ties: ${userTies}`
}
// //test
// function playGame() {
//   let userMove = getUserMove();
//   let computerMove = getComputerMove();
//   alertMoves(userMove, computerMove);
//   getOutcome(userMove, computerMove);
//   loopGame();
// }
// playGame();
function loopGame() {
  document.querySelector("#result").textContent = ""
  document.querySelector("#moves").textContent = ""
}