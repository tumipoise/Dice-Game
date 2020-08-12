let play = document.getElementById("play");
let reset = document.getElementById("reset");
let dice1 = document.querySelectorAll("#dice")[0];
let dice2 = document.querySelectorAll("#dice")[1];
let player = document.getElementById("player");

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

  // if(randomNo1 > randomNo2){
  //     player.innerHTML = "🏳 Nengi wins!"
  // }else if(randomNo2 > randomNo1){
  //     player.innerHTML = "🏳 Ozo wins!"
  // }else{
  //     player.innerHTML = "It's a draw!"
  // }

  player.innerHTML =
    randomNo1 === randomNo2
      ? "It's a draw!"
      : randomNo1 > randomNo2
      ? "🏳 Nengi wins!"
      : "🏳 Ozo wins!";
});
