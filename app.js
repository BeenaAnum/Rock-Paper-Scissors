let userScore = 0;
let compScore = 0;
let userChoice;
const choices = ['rock', 'paper', 'scissors'];
const emojis = {
  rock: "👊",
  paper: "📝",
  scissors: "✂️"
};

function play() {
    if (gameOver) return;
  let compChoice = choices[Math.floor(Math.random() * 3)]; //choices.length we can also use this
  let result = "";

  if (userChoice === compChoice) {
    result = `It's a tie! 🤝 You both chose ${emojis[userChoice]}`;
  } else if (
    (userChoice === 'rock' && compChoice === 'scissors') ||
    (userChoice === 'paper' && compChoice === 'rock') ||
    (userChoice === 'scissors' && compChoice === 'paper')
  ) {
    result = `You win 🎉 You chose ${emojis[userChoice]} and computer chose ${emojis[compChoice]}.`;
    userScore++;
  } else {
    result = `Computer wins! 🤖 Computer chose ${emojis[compChoice]} and you chose ${emojis[userChoice]}.`;
    compScore++;
  }

  document.getElementById("result").innerHTML = result;
  document.getElementById("score").innerHTML = `Score: You: ${userScore}, Computer: ${compScore}`;
}

function resetGame() {
  userScore = 0;
  compScore = 0;
  document.getElementById("result").innerHTML = "Game reset! 🧹";
  document.getElementById("score").innerHTML = `Score: You: ${userScore}, Computer: ${compScore}`;
}
// Game Over after 1 minute
let gameOver = false;

setTimeout(() => {
  gameOver = true;
  document.getElementById("result").innerHTML = "⏰ Time's up! Game Over!";
}, 60000); // 60000ms = 1 minute
