const rollButton = document.querySelector('.btn-roll');
const holdButton = document.querySelector('.btn-hold');

const dice = document.querySelector('.dice');

let playerOneCurrentScore = document.querySelector('#current-0');
let playerTwoCurrentScore = document.querySelector('#current-1');
let playerOneScore = document.querySelector('#score-0');
let playerTwoScore = document.querySelector('#score-1');
let playerOnePanel = document.querySelector('.player-0-panel');
let playerTwoPanel = document.querySelector('.player-1-panel');
let activePlayer = 'playerOne';

function reset() {
  playerOneCurrentScore.textContent = 0;
  playerTwoCurrentScore.textContent = 0;
  playerOneScore.textContent = 0;
  playerTwoScore.textContent = 0;
  playerOnePanel.classList.remove('winner');
  playerTwoPanel.classList.remove('winner');
}

function rollDice() {
  let random = Math.floor(Math.random() * 6) + 1;
  dice.src = `dice-${random}.png`;
  if (activePlayer == 'playerOne') {
    handlePlayerOne(random);
  } else {
    handlePlayerTwo(random);
  }
}
reset();
function handlePlayerOne(number) {
  if (number == 1) {
    changePlayer();
  } else {
    playerOneCurrentScore.textContent =
      number + Number(playerOneCurrentScore.textContent);
  }
}
function checkforGameOver() {
  const audio = document.querySelector('audio');
  console.log(audio);

  if (playerOneScore.textContent >= 100) {
    playerOnePanel.classList.add('winner');
    audio.play();
  }
  if (playerTwoScore.textContent >= 100) {
    playerTwoPanel.classList.add('winner');
    audio.play();
  }
}
function handlePlayerTwo(number) {
  if (number == 1) {
    changePlayer();
  } else {
    playerTwoCurrentScore.textContent =
      number + Number(playerTwoCurrentScore.textContent);
  }
}
function changePlayer() {
  if (activePlayer == 'playerOne') {
    playerOneScore.textContent =
      Number(playerOneScore.textContent) +
      Number(playerOneCurrentScore.textContent);
    playerOneCurrentScore.textContent = 0;
    activePlayer = 'playerTwo';
    playerOnePanel.classList.remove('active');
    playerTwoPanel.classList.add('active');
    checkforGameOver();
  } else {
    playerTwoScore.textContent =
      Number(playerTwoScore.textContent) +
      Number(playerTwoCurrentScore.textContent);
    playerTwoCurrentScore.textContent = 0;
    activePlayer = 'playerOne';

    playerOnePanel.classList.add('active');
    playerTwoPanel.classList.remove('active');
    checkforGameOver();
  }
}

rollButton.addEventListener('click', rollDice);

holdButton.addEventListener('click', changePlayer);
document.querySelector('.btn-new').addEventListener('click', reset);
