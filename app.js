const p1 = {
    score: 0,
    button: document.querySelector(".p1Button"),
    display: document.querySelector(".scorePlayer1")
}

const p2 = {
    score: 0,
    button: document.querySelector(".p2Button"),
    display: document.querySelector(".scorePlayer2")
}


const resetButton = document.querySelector(".reset");
const maxScore = document.querySelector(".max");
const playBy2 = document.querySelectorAll(".playBy2");



let winningScore = 3;
let isGameOver = false;
let isPlayBy2Checked = false;

function updateScore(player, opponent){
    if (!isGameOver) {
        player.score++;
    }
    if (isPlayBy2Checked && player.score - opponent.score === 2) {
        isGameOver = true;
        player.display.classList.add("has-text-success");
        opponent.display.classList.add("has-text-danger");
        player.button.setAttribute("disabled", true);
        opponent.button.setAttribute("disabled", true);
    }
    if (!isPlayBy2Checked && player.score === winningScore) {
         isGameOver = true;
         player.display.classList.add("has-text-success");
         opponent.display.classList.add("has-text-danger");
         player.button.setAttribute("disabled", true);
         opponent.button.setAttribute("disabled", true);
    }
    player.display.textContent = player.score;
}


p1.button.addEventListener("click", () => {
    updateScore(p1, p2);
});

p2.button.addEventListener("click", () => {
    updateScore(p2, p1);
});


resetButton.addEventListener("click", reset);

function reset() {
    isGameOver = false;
    for (let p of [p1,p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove("has-text-success", "has-text-danger");
        p.button.removeAttribute("disabled");
    }
}

maxScore.addEventListener("change", function () {
    winningScore = parseInt(this.value);
    reset();
});


playBy2.forEach(radioElement => {
    radioElement.addEventListener("click", () => {
        reset();
        if (radioElement.value = "yes") {
            isPlayBy2Checked = true;
        }
    });
});