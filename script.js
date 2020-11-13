'use strict';
/*
document.querySelector('.message').textContent = 'Correct Number';

document.querySelector('.guess').value = 0;
console.log(document.querySelector('.guess').value);
*/
// 1) First off we want to create our target number and we want it to be a randomized number from 1-... so were going to create a variable named targetNum and make sure its accessible to the global scale.
const targetNum = Math.floor(Math.random() * 20) + 1;
console.log(targetNum);

// 2) Secondly we want to bring functionality to clicking on the 'Check' button to see if whatever number we put in equals the targetNum
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (guess === targetNum) {
    document.querySelector('.message').textContent = 'You got it right!';
    document.querySelector('.number').textContent = targetNum;
  } else if (guess > targetNum) {
    document.querySelector('.message').textContent = '📈 Too high!';
  } else if (guess < targetNum && guess > 0) {
    document.querySelector('.message').textContent = '📉 Too Low!';
  } else {
    document.querySelector('.message').textContent = '⛔️ No number!';
  }
});
