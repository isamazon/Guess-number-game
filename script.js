'use strict';
/*
document.querySelector('.message').textContent = 'Correct Number';

document.querySelector('.guess').value = 0;
console.log(document.querySelector('.guess').value);
*/
// 1) First off we want to create our target number and we want it to be a randomized number from 1-... so were going to create a variable named targetNum and make sure its accessible to the global scale.
let targetNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
console.log(targetNum);

// 2) Secondly we want to bring functionality to clicking on the 'Check' button to see if whatever number we put in equals the targetNum
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // Had to pur the !guess === 'no number' statement because of the order of operations if i put it at the end it would be over ran by the other if statements.
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number!';
  } else if (guess === targetNum) {
    document.querySelector('.message').textContent = '🎉 Correct Number! 🎉';
    document.querySelector('.number').textContent = targetNum;
    document.body.style.backgroundColor = 'green';
    document.querySelector('.highscore').textContent = score;
  } else if (guess > targetNum) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.body.style.backgroundColor = 'Red';
    }
  } else if (guess < targetNum) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.body.style.backgroundColor = 'Red';
    }
  }
});

// 3) now we add an event listener to the Again button so we can reset the message, body color and score but we keep
document.querySelector('.again').addEventListener('click', function () {
  // Reset the score back to 20 and make sure the DOM is equal to the score
  score = 20;
  targetNum = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = score;
  // Reset the boy background color to black
  document.body.style.backgroundColor = 'black';
  // Reset the number to "?"\
  document.querySelector('.number').textContent = '?';
  // Reset the message
  document.querySelector('.message').textContent = 'Start Guessing...';
  // Reset info box to empty
  document.querySelector('.guess').value = '';
});
