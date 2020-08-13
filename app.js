const reset = document.getElementById("reset");
const dice1 = document.querySelectorAll("#dice")[0];
const dice2 = document.querySelectorAll("#dice")[1];
const player = document.getElementById("player");
const play = document.getElementById("play");
const round = document.querySelectorAll(".list-group-item");
const rounds = document.getElementById("rounds");
const playAgain = document.getElementById("playAgain");

let roundChecker = 0;
let nengiWins = 0;
let ozoWins = 0;

function resetAll() {
  dice1.setAttribute("src", "images/dice6.png");
  dice2.setAttribute("src", "images/dice6.png");

  roundChecker = 0;
  nengiWins = 0;
  ozoWins = 0;

  round[0].innerHTML = "Round I : ";
  round[1].innerHTML = "Round II : ";
  round[2].innerHTML = "Round III : ";
  round[3].innerHTML = "<strong>Winner</strong> : ";

  rounds.innerHTML = "⌒(｡･.･｡)⌒ Round I";
  play.removeAttribute("data-toggle");
  play.removeAttribute("data-target");
}

play.addEventListener("click", function () {
  let randomNo1 = Math.floor(Math.random() * 6 + 1);
  let randomDiceImage = `dice${randomNo1}.png`;
  let randomImageSource = `images/${randomDiceImage}`;
  dice1.setAttribute("src", randomImageSource);

  let randomNo2 = Math.floor(Math.random() * 6 + 1);
  let randomDice = `dice${randomNo2}.png`;
  let randomDiceSource = `images/${randomDice}`;
  dice2.setAttribute("src", randomDiceSource);

  function checkWinner(round) {
    return randomNo1 === randomNo2
      ? `${round} : <strong>Draw</strong>`
      : randomNo1 > randomNo2
      ? `${round}  : <strong>Nengi</strong>`
      : `${round}  : <strong>Ozo</strong>`;
  }

  function winnerCount() {
    if (randomNo1 > randomNo2) {
      nengiWins += 1;
    } else if (randomNo2 > randomNo1) {
      ozoWins += 1;
    }
  }

  if (roundChecker === 0) {
    round[0].innerHTML = checkWinner("Round I");
    roundChecker += 1;
    winnerCount();
  } else if (roundChecker === 1) {
    rounds.innerHTML = "⌒(｡･.･｡)⌒ Round II";
    round[1].innerHTML = checkWinner("Round II");

    roundChecker += 1;

    winnerCount();
  } else if (roundChecker === 2) {
    rounds.innerHTML = "⌒(｡･.･｡)⌒ Round III";
    round[2].innerHTML = checkWinner("Round III");

    roundChecker += 1;

    winnerCount();
  } else if (roundChecker === 3) {
    round[3].innerHTML =
      ozoWins === nengiWins
        ? "<strong>Winner : DRAW</strong>"
        : ozoWins > nengiWins
        ? "<strong>Winner : 🏁 OZO</strong>"
        : "<strong>Winner : 🏁 NENGI</strong>";

    play.setAttribute("data-toggle", "modal");
    play.setAttribute("data-target", "#myModal");
  }

  // player.innerHTML =
  //   randomNo1 === randomNo2
  //     ? "It's a draw!"
  //     : randomNo1 > randomNo2
  //     ? "🏳 Nengi wins!"
  //     : "🏳 Ozo wins!";
});

reset.addEventListener("click", () => {
  resetAll();
});

playAgain.addEventListener("click", () => {
  resetAll();
});
