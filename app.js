const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const playerDisplay = document.querySelector('#playerSelection');
const computerDisplay = document.querySelector('#computerSelection');
const h2 = document.querySelector('h2');
const result = document.createElement('h4');
const pDisplay = document.querySelector('#pScore');
const cDisplay = document.querySelector('#cScore');
const wDisplay = document.querySelector('#subtitle');

let pScore = 0;
let cScore = 0;

const positions = ['👊', '🤚', '✌'];

rockButton.addEventListener('click', function () {
  playerDisplay.textContent = this.value;
  computerDisplay.textContent = computerSelection();
  if (playerDisplay.textContent === computerDisplay.textContent) {
    result.textContent = 'draw';
    result.classList.value = '';
    result.classList.add('draw');
    h2.appendChild(result);
  } else if (
    playerDisplay.textContent === this.value &&
    computerDisplay.textContent === '🤚'
  ) {
    result.textContent = 'you lose the round!';
    result.classList.value = '';
    result.classList.add('loser');
    h2.appendChild(result);
    cScore += 1;
    cDisplay.textContent = cScore;
    gameOver();
  } else {
    result.textContent = 'you win the round!';
    result.classList.value = '';
    result.classList.add('winner');
    h2.appendChild(result);
    pScore += 1;
    pDisplay.textContent = pScore;
    gameOver();
  }
});

paperButton.addEventListener('click', function () {
  playerDisplay.textContent = this.value;
  computerDisplay.textContent = computerSelection();
  if (playerDisplay.textContent === computerDisplay.textContent) {
    result.textContent = 'draw';
    result.classList.value = '';
    result.classList.add('draw');
    h2.appendChild(result);
  } else if (
    playerDisplay.textContent === this.value &&
    computerDisplay.textContent === '✌'
  ) {
    result.textContent = 'you lose the round!';
    result.classList.value = '';
    result.classList.add('loser');
    h2.appendChild(result);
    cScore += 1;
    cDisplay.textContent = cScore;
    gameOver();
  } else {
    result.textContent = 'you win the round!';
    result.classList.value = '';
    result.classList.add('winner');
    h2.appendChild(result);
    pScore += 1;
    pDisplay.textContent = pScore;
    gameOver();
  }
});

scissorsButton.addEventListener('click', function () {
  playerDisplay.textContent = this.value;
  computerDisplay.textContent = computerSelection();
  if (playerDisplay.textContent === computerDisplay.textContent) {
    result.textContent = 'draw';
    result.classList.value = '';
    result.classList.add('draw');
    h2.appendChild(result);
  } else if (
    playerDisplay.textContent === this.value &&
    computerDisplay.textContent === '👊'
  ) {
    result.textContent = 'you lose the round!';
    result.classList.value = '';
    result.classList.add('loser');
    h2.appendChild(result);
    cScore += 1;
    cDisplay.textContent = cScore;
    gameOver();
  } else {
    result.textContent = 'you win the round!';
    result.classList.value = '';
    result.classList.add('winner');
    h2.appendChild(result);
    pScore += 1;
    pDisplay.textContent = pScore;
    gameOver();
  }
});

function computerSelection() {
  return positions[Math.floor(Math.random() * positions.length)];
}

function gameOver() {
  if (pScore === 5) {
    result.textContent =
      'You are the best! Congrats on defeating the computer! 😉';
    h2.appendChild(result);
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
  } else if (cScore === 5) {
    result.textContent = 'Computer wins... better luck next time 😕';
    h2.appendChild(result);
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
  }
}
