// TASK 1

let options = ["rock", "paper", "scissors"];

//TASK 2
//Function here

function rPS(playerMove, computerMove) {
  alert(
    `Your move is ${playerMove} and the computer's move is ${computerMove}`
  );
  // if both are either rock, paper or scissors = draw
  if (playerMove === computerMove) {
    alert("you draw");
    return 0;
  }
  // if user is rock & computer is scissors = userwins
  // if user is paper & computer is rock = userwins
  // if user is scissors & computer is paper = userwins

  //else if??
  else if (
    (playerMove === options[1] && computerMove === options[0]) || //user paper comp rock
    (playerMove === options[2] && computerMove === options[1]) || //user scissors comp paper
    (playerMove === options[0] && computerMove === options[2]) //user rock comp scissors
  ) {
    alert("you win");
    return 1;
  } else {
    alert("you lose");
    return -1;
  }
}

// TASK 5
let username = prompt(`What is your username? `);

while (!username.match(/^[A-Z][a-zA-z0-9]{0,9}$/)) {
  username = prompt(
    `Please enter a username with:\n10 characters or less \n starting with a capital letter`
  );
}
let playerMove = prompt(`Rock, Paper or Scissors, ${username}?`);
let computerMove = options[Math.floor(Math.random() * options.length)];

let ties = 0;
let wins = 0;
let loss = 0;
let score = 0;

function stats(outcome) {
  score += outcome;
  if (outcome === 0) {
    ties += 1;
  } else if (outcome === 1) {
    wins += 1;
  } else {
    loss += 1;
  }
}

let numOfGames = 1;
let outcome = rPS(playerMove, computerMove);
stats(outcome);
let tryAgain = prompt(`Do you want to try again,${username}? (yes or no)`);
while (tryAgain === "yes") {
  playerMove = prompt(`Rock, Paper or Scissors? ${username}`);
  computerMove = options[Math.floor(Math.random() * options.length)];
  outcome = rPS(playerMove, computerMove);
  stats(outcome);
  numOfGames++;
  tryAgain = prompt(`Do you want to try again,${username}? (yes or no)`);
  if (tryAgain !== "yes") {
    break;
  }
}

alert(
  `You have played ${numOfGames} games.\nYour score is ${score}\nStats:\nNumber of wins: ${wins}\nNumber of losses: ${loss}\nNumber of ties: ${ties}`
);
