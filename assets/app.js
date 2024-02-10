let roundCount = null;
let simonSequence = [];
let playerSequence = [];
const colorBtns = document.querySelectorAll(".light-buttons > div");
const startBtn = document.querySelector(".start");
const counterEl = document.querySelector("#counter");
const messageEl = document.querySelector("#message");

startBtn.addEventListener("click", startGame);
function addPlayerListeners() {
  startBtn.addEventListener("click", startGame);
  colorBtns.forEach((colorButton) => {
    colorButton.addEventListener("click", handlePlayerMove);
  });
}

function removePlayerListeners() {
  colorBtns.forEach((colorButton) => {
    colorButton.removeEventListener("click", handlePlayerMove);
  });
}

function startGame() {
    roundCount = 1;
    counterEl.textContent = roundCount;
    messageEl.textContent = "";
    simonSequence = [];
    playerSequence = [];
    simonTurn();

}

function simonTurn() {
    simonSays = true;
    removePlayerListeners;
    simonSequence = updateSimonSequence(roundCount);
    showSimonSequence(setPlayerTurn);
}

function updateSimonSequence() {
    simonSequence.push(
        colorBtns[Math.floor(Math.random() * colorBtns.length)].id
        );
        return simonSequence;
    }
    
    function showSimonSequence() {
        setTimeout(() => {
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
                setTimeout(setPlayerTurn, simonSequence.length * 1000);
            }, 550);
        }
        
        
        function setPlayerTurn() {
            simonSays = false;
            addPlayerListeners();
        }
        
        
        function handlePlayerMove(event) {
            if (simonSays) {
                return;
            }
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
      removePlayerListeners();
      endGame();
      return;
    }
  }
  if (playerSequence.length === simonSequence.length) {
    removePlayerListeners();
    setTimeout(() => {
      roundCount++;
      counterEl.textContent = roundCount;
      playerSequence = [];
      simonTurn();
    }, 1000);
  }
}

function endGame() {
  counterEl.textContent = "";
  messageEl.textContent = "Try again!";
  colorBtns.forEach((colorButton) => {
    colorButton.removeEventListener("click", handlePlayerMove);
  });
  messageTimeout = setTimeout(() => {
    messageEl.textContent = "";
  }, 2000);
}
