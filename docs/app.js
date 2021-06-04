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
const sectionMaxScore = document.querySelector(".maxScore-container");
const playBy2Yes = document.querySelector(".playBy2Yes");
const playBy2No = document.querySelector(".playBy2No");


let winningScore = 3;
let isGameOver = false;
let isPlayBy2Checked = false;

function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score++;
    }
    if (isPlayBy2Checked && player.score - opponent.score === 2) {
        gameOver(player, opponent);
    }
    if (!isPlayBy2Checked && player.score === winningScore) {
        gameOver(player, opponent);
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
    isPlayBy2Checked = false;
    for (let p of [p1,p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove("has-text-success", "has-text-danger");
        p.button.removeAttribute("disabled");
    }
    sectionMaxScore.style.display = "block";
    playBy2Yes.checked = false;
    playBy2No.checked = true;
}

maxScore.addEventListener("change", function () {
    winningScore = parseInt(this.value);
    reset();
});

function gameOver(player, opponent) {
    isGameOver = true;
    player.display.classList.add("has-text-success");
    opponent.display.classList.add("has-text-danger");
    player.button.setAttribute("disabled", true);
    opponent.button.setAttribute("disabled", true);
}


playBy2Yes.addEventListener("click", () => {
    reset();
    isPlayBy2Checked = true;
    playBy2Yes.checked = true;
    sectionMaxScore.style.display = "none";
})

playBy2No.addEventListener("click", () => {
    reset();
})