const getComputerChoice = () => {
  const computerOptions = ["rock", "paper", "scissors"];
  const computerSelection = computerOptions[Math.floor(Math.random() * 3)];
  return computerSelection;
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return "It's a draw!";
  } else if (
    computerSelection === "rock" &&
    playerSelection.toLowerCase() === "paper"
  ) {
    return "You win! Paper beats Rock!";
  } else if (
    computerSelection === "rock" &&
    playerSelection.toLowerCase() === "scissors"
  ) {
    return "You lose! Rock beats Scissors!";
  } else if (
    computerSelection === "paper" &&
    playerSelection.toLowerCase() === "rock"
  ) {
    return "You lose! Paper beats Rock!";
  } else if (
    computerSelection === "paper" &&
    playerSelection.toLowerCase() === "scissors"
  ) {
    return "You win! Scissors beats Paper!";
  } else if (
    computerSelection === "scissors" &&
    playerSelection.toLowerCase() === "paper"
  ) {
    return "You lose! Scissors beats Paper!";
  } else if (
    computerSelection === "scissors" &&
    playerSelection.toLowerCase() === "rock"
  ) {
    return "You win! Rock beats Scissors!";
  }
};

const playerSelection = "ROck";
const computerSelection = getComputerChoice();

const game = () => playRound(playerSelection, computerSelection);
console.log(computerSelection);
console.log(game());
