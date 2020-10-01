const name = prompt("Enter your firstname:", "username");
document.getElementById("name").innerHTML = name;

let playerScore = 0;
let computerScore = 0;

document.getElementById("rock").onclick = playRock;
document.getElementById("paper").onclick = playPaper;
document.getElementById("scissors").onclick = playScissors;

function playRock() {
  play("Rock");
}
function playPaper() {
  play("Paper");
}
function playScissors() {
  play("Scissors");
}

const play = (playerSelection) => {
  const computerSelection = computerPlay();

  document.getElementById("comp").innerHTML = computerSelection;
  document.getElementById("player").innerHTML = playerSelection;

  if (playerSelection === computerSelection) {
    document.getElementById("result").innerHTML = `Its a draw`;
  }
  if (playerSelection === "Rock") {
    if (computerSelection === "Paper") {
      document.getElementById("result").innerHTML = `Paper beats Rock you Lose`;
      computerScore++;
    } else if (computerSelection === "Scissors") {
      document.getElementById(
        "result"
      ).innerHTML = `Rock beats Scissors hurray you win`;
      playerScore++;
    }
  }
  if (playerSelection === "Paper") {
    if (computerSelection === "Rock") {
      document.getElementById(
        "result"
      ).innerHTML = `Paper beats Rock Hurray you win`;
      playerScore++;
    } else if (computerSelection === "Scissors") {
      document.getElementById(
        "result"
      ).innerHTML = `Sciccors beats Paper you lose`;
      computerScore++;
    }
  } else if (playerSelection === "Scissors") {
    if (computerSelection === "Paper") {
      document.getElementById(
        "result"
      ).innerHTML = `Scissors beats Paper hurray you win`;
      playerScore++;
    } else if (computerSelection === "Rock") {
      document.getElementById(
        "result"
      ).innerHTML = `Rock beats Scissors you lose`;
      computerScore++;
    }
  }

  document.getElementById("playerResult").innerHTML = playerScore;
  document.getElementById("computerResult").innerHTML = computerScore;
};
const computerPlay = () => {
  let a = ["Rock", "Paper", "Scissors"];
  let b = Math.floor(Math.random() * a.length);
  let c = a[b];
  return c;
};
