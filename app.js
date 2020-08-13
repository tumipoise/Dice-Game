const reset = document.getElementById("reset");
const dice1 = document.querySelectorAll("#dice")[0];
const dice2 = document.querySelectorAll("#dice")[1];
const player = document.getElementById("player");
const play = document.getElementById("play");
const round = document.querySelectorAll(".list-group-item");

let roundChecker = 0;

play.addEventListener("click", function () {
  let randomNo1 = Math.floor(Math.random() * 6 + 1);
  console.log(randomNo1);
  let randomDiceImage = `dice${randomNo1}.png`;
  let randomImageSource = `images/${randomDiceImage}`;
  dice1.setAttribute("src", randomImageSource);

  let randomNo2 = Math.floor(Math.random() * 6 + 1);
  let randomDice = `dice${randomNo2}.png`;
  let randomDiceSource = `images/${randomDice}`;
  dice2.setAttribute("src", randomDiceSource);

  if (roundChecker === 0) {
    round[0].innerHTML =
      randomNo1 === randomNo2
        ? "Round I : draw"
        : randomNo1 > randomNo2
        ? "Round I : Nengi"
        : "Round I : Ozo";

    roundChecker += 1;
  }

  if (roundChecker === 1) {
    round[1].innerHTML =
      randomNo1 === randomNo2
        ? "Round II : draw"
        : randomNo1 > randomNo2
        ? "Round II : Nengi"
        : "Round II : Ozo";

    roundChecker += 1;
  }

  if (roundChecker === 2) {
    round[2].innerHTML =
      randomNo1 === randomNo2
        ? "Round III : draw"
        : randomNo1 > randomNo2
        ? "Round III : Nengi"
        : "Round III : Ozo";

    roundChecker += 1;
  }



  // player.innerHTML =
  //   randomNo1 === randomNo2
  //     ? "It's a draw!"
  //     : randomNo1 > randomNo2
  //     ? "🏳 Nengi wins!"
  //     : "🏳 Ozo wins!";
});
