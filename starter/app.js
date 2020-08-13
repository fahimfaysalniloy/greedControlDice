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
    playerOneCurrentScore.textContent = 0;
    changePlayer();
  } else {
    playerOneCurrentScore.textContent =
      number + Number(playerOneCurrentScore.textContent);
  }
}
function handlePlayerTwo(number) {
  if (number == 1) {
    playerTwoCurrentScore.textContent = 0;
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
    activePlayer = 'playerTwo';
    playerOnePanel.classList.remove('active');
    playerTwoPanel.classList.add('active');
  } else {
    playerTwoScore.textContent =
      Number(playerTwoScore.textContent) +
      Number(playerTwoCurrentScore.textContent);
    activePlayer = 'playerOne';

    playerOnePanel.classList.add('active');
    playerTwoPanel.classList.remove('active');
  }
}
console.log(typeof playerOneScore.textContent);
rollButton.addEventListener('click', rollDice);
console.log(holdButton);
holdButton.addEventListener('click', changePlayer);
document.querySelector('.btn-new').addEventListener('click', reset);
