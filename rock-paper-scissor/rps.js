const resetBtn = document.querySelector(`.game-reset`);
const playBtn = document.querySelector(`.play`);
const roundNumber = document.querySelector(`.round-number`);
const gameResult = document.querySelector(`.game-result`);
let userScore = document.querySelector(`.user-score`);
let computerScore = document.querySelector(`.computer-score`);
const userChoiceScissor = document.querySelector(`.user-choice-scissor`);
const userChoicePaper = document.querySelector(`.user-choice-paper`);
const userChoiceRock = document.querySelector(`.user-choice-rock`);
const computerChoiceDiv = document.querySelector(`.computer-choice`);
const userChoiceText = document.querySelector(`.user-choice-text`);
const computerChoiceText = document.querySelector(`.computer-choice-text`);

userChoiceScissor.addEventListener("click", function () {
  calculate("scissor");
});
userChoicePaper.addEventListener("click", function () {
  calculate("paper");
});
userChoiceRock.addEventListener("click", function () {
  calculate("rock");
});

resetBtn.addEventListener("click", reset);

const choices = ["rock", "paper", "scissor"];
const useChoice = "scissor";

function calculate(userInput) {
  let choice = Math.floor(Math.random() * 3);
  console.log(choice);
  let computerChoice = choices[choice];
  if (computerChoiceDiv.firstChild != null) {
    computerChoiceDiv.firstChild.remove();
  }
  const computerImg = document.createElement("img");
  userChoiceText.innerHTML = userInput;
  computerChoiceText.innerHTML = computerChoice;
  computerImg.src = `./assets/${computerChoice}.png`;
  computerChoiceDiv.append(computerImg);

  if (computerChoice == userInput) {
    gameResult.innerHTML = "Its a draw!";
    return;
  } else if (userInput == "paper") {
    if (computerChoice == "scissor") {
      gameResult.innerHTML = "CPU Won!";
      newScore = parseInt(computerScore.innerHTML) + 1;
      computerScore.innerHTML = newScore.toString();
    } else if (computerChoice == "rock") {
      gameResult.innerHTML = "You Won!";

      newScore = parseInt(userScore) + 1;
      userScore = newScore.toString();
    }
  } else if (userInput == "rock") {
    if (computerChoice == "paper") {
      gameResult.innerHTML = "CPU Won!";

      newScore = parseInt(computerScore.innerHTML) + 1;
      computerScore.innerHTML = newScore.toString();
    } else if (computerChoice == "scissor") {
      gameResult.innerHTML = "You Won!";

      newScore = parseInt(userScore.innerHTML) + 1;
      userScore.innerHTML = newScore.toString();
    }
  } else if (userInput == "scissor") {
    if (computerChoice == "rock") {
      gameResult.innerHTML = "CPU Won!";

      newScore = parseInt(computerScore.innerHTML) + 1;
      computerScore.innerHTML = newScore.toString();
    } else if (computerChoice == "paper") {
      gameResult.innerHTML = "You Won!";

      newScore = parseInt(userScore.innerHTML) + 1;
      userScore.innerHTML = newScore.toString();
    }
  }
  newScore = parseInt(roundNumber.innerHTML) + 1;
  roundNumber.innerHTML = newScore.toString();
  if (computerScore.innerHTML == "5") {
    alert("Sorry! You lost!");
    reset();
  } else if (userScore.innerHTML == "5") {
    alert("You won!");
    reset();
  }
}

function reset() {
  roundNumber.innerHTML = "0";
  userScore.innerHTML = "0";
  computerScore.innerHTML = "0";
  gameResult.innerHTML = "";
}
