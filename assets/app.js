let gameOn = false;
let turn = null;
let roundCount = null;
let simonSequence = [];
let playerSequence = [];

const colorBtns = document.querySelectorAll(".light-buttons > div");
const startBtn = document.querySelector(".start");
const counterEl = document.querySelector("h2");
const messageEl = document.querySelector("#display");

startBtn.addEventListener("click", startGame);
function startGame() {
  gameOn = true;
  turn = "simon";
  simonSequence = [];
  playerSequence = [];
  simonTurn();
}

function startGame() {
  gameOn = true;
  roundCount = 1;
  counterEl.textContent = roundCount;
  simonSequence = [];
  playerSequence = [];
  simonTurn();
}

function simonTurn() {
  turn = "simon";
  removePlayerListeners();
  simonSequence = updateSimonSequence(roundCount);
  showSimonSequence();
}

function updateSimonSequence() {
  simonSequence.push(
    colorBtns[Math.floor(Math.random() * colorBtns.length)].id
  );
  return simonSequence;
}

function showSimonSequence() {
  simonSequence.forEach((color, index) => {
    setTimeout(() => {
      const colorButton = Array.from(colorBtns).find(
        (button) => button.id === color
      );
      colorButton.classList.add("active");
      setTimeout(() => {
        colorButton.classList.remove("active");
      }, 750);
    }, index * 1000);
  });
  setPlayerTurn();
}

function setPlayerTurn() {
  turn = "player";
  addPlayerListeners();
}

function addPlayerListeners() {
  colorBtns.forEach((colorButton) => {
    colorButton.addEventListener("click", handlePlayerMove);
  });
  startBtn.addEventListener("click", startGame);
}

function removePlayerListeners() {
  colorBtns.forEach((colorButton) => {
    colorButton.removeEventListener("click", handlePlayerMove);
  });
  startBtn.removeEventListener("click", startGame);
}

function handlePlayerMove(event) {
  const selectedColor = event.target.id;
  playerSequence.push(selectedColor);
  event.target.classList.add("active");
  setTimeout(() => {
    event.target.classList.remove("active");
  }, 500);
  checkPlayerMove();
}

function checkPlayerMove() {
  for (let i = 0; i < playerSequence.length; i++) {
    if (playerSequence[i] !== simonSequence[i]) {
      endGame();
      return;
    };
  };
  if (playerSequence.length === simonSequence.length) {
    setTimeout(() => {
      roundCount++;
      counterEl.textContent = roundCount;
      playerSequence = [];
      simonTurn();
    }, 1000);
  };
};

function endGame() {
  gameOn = false;
  messageEl.textContent = "Try again!";
  colorBtns.forEach((colorButton) => {
    colorButton.removeEventListener("click", handlePlayerMove);
  });
    messageTimeout = setTimeout(() => {
        messageEl.textContent = "";
      }, 2000);
};