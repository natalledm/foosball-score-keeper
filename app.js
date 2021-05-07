const p1Score = document.querySelector(".scorePlayer1");
const p2Score = document.querySelector(".scorePlayer2");

const p1Button = document.querySelector(".p1Button");
const p2Button = document.querySelector(".p2Button");
const resetButton = document.querySelector(".reset");

const maxScore = document.querySelector(".max");

let p1Points = 0;
let p2Points = 0;
let winningScore = 3;
let isGameOver = false;

p1Button.addEventListener("click", () => {
    if (!isGameOver) {
        p1Points++;
    }
    if (p1Points === winningScore) {
         isGameOver = true;
         p1Score.classList.add("has-text-success");
         p2Score.classList.add("has-text-danger");
         p1Button.setAttribute("disabled", true);
         p2Button.setAttribute("disabled", true);
    }
    p1Score.textContent = p1Points;
});

p2Button.addEventListener("click", () => {
    if (!isGameOver) {
        p2Points++;
    }
    if (p2Points === winningScore) {
         isGameOver = true;
         p2Score.classList.add("has-text-success");
         p1Score.classList.add("has-text-danger");
         p1Button.setAttribute("disabled", true);
         p2Button.setAttribute("disabled", true);
    }
    p2Score.textContent = p2Points;
});

resetButton.addEventListener("click", reset);

function reset() {
    p1Points = 0;
    p2Points = 0;
    p1Score.textContent = p1Points;
    p2Score.textContent = p2Points;
    isGameOver = false;
    p1Score.classList.remove("has-text-success", "has-text-danger");
    p2Score.classList.remove("has-text-success", "has-text-danger");
    p1Button.removeAttribute("disabled");
    p2Button.removeAttribute("disabled");
}

maxScore.addEventListener("change", function () {
    winningScore = parseInt(this.value);
    reset();
});