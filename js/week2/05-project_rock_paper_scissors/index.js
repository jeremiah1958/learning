const choices = ["rock", "paper", "scissors"];
let player1Score = 0;
let player2Score = 0;

const player1ScoreDisplay = document.getElementById("player1-score");
const player2ScoreDisplay = document.getElementById("player2-score");
const resultDisplay = document.getElementById("result");

document.getElementById("rock").addEventListener("click", () => playGame("rock"));
document.getElementById("paper").addEventListener("click", () => playGame("paper"));
document.getElementById("scissors").addEventListener("click", () => playGame("scissors"));
document.getElementById("reset").addEventListener("click", resetGame);

function playGame(player1Choice) {
  const player2Choice = choices[Math.floor(Math.random() * 3)];
  const winner = determineWinner(player1Choice, player2Choice);

  if (winner === "player1") {
    player1Score++;
    resultDisplay.textContent = `You chose ${player1Choice}, opponent chose ${player2Choice}. You win!`;
  } else if (winner === "player2") {
    player2Score++;
    resultDisplay.textContent = `You chose ${player1Choice}, opponent chose ${player2Choice}. You lose!`;
  } else {
    resultDisplay.textContent = `You chose ${player1Choice}, opponent chose ${player2Choice}. It's a tie!`;
  }

  player1ScoreDisplay.textContent = player1Score;
  player2ScoreDisplay.textContent = player2Score;
}

function determineWinner(player1Choice, player2Choice) {
  if (player1Choice === player2Choice) {
    return "tie";
  }
  if (
    (player1Choice === "rock" && player2Choice === "scissors") ||
    (player1Choice === "paper" && player2Choice === "rock") ||
    (player1Choice === "scissors" && player2Choice === "paper")
  ) {
    return "player1";
  }
  return "player2";
}

function resetGame() {
  player1Score = 0;
  player2Score = 0;
  player1ScoreDisplay.textContent = player1Score;
  player2ScoreDisplay.textContent = player2Score;
  resultDisplay.textContent = "";
}
