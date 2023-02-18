'use strict';
// console.log('Pavel Yakovlev');

// let score0Element = document.querySelector('#score--0');
// let score1Element = document.querySelector('#score--1');
// let diceElement = document.querySelector('.dice');
// let player0 = document.querySelector('.player--0');
// let player1 = document.querySelector('.player--1');

// score0Element.textContent = 0;
// score1Element.textContent = 0;
// diceElement.classList.add('hidden');
// let activePlayer = 0;
// let totalScore = [0, 0];

// let btnNewElement = document.querySelector('.btn--new');
// let btnRollElement = document.querySelector('.btn--roll');
// let btnHoldElement = document.querySelector('.btn--hold');
// let currentScore = Number(document.getElementById(`current--${activePlayer}`).textContent);

// btnRollElement.addEventListener('click', function(){
//   diceElement.classList.remove('hidden');
//   let diceNumber = Math.trunc(Math.random() * 6) + 1;
//   diceElement.src = `img/dice${diceNumber}.png`
//   if(diceNumber !== 1) {
//   currentScore = currentScore + diceNumber;
//   document.getElementById(`current--${activePlayer}`).textContent = currentScore;
//   } else  {
//     document.getElementById(`current--${activePlayer}`).textContent = currentScore;
//     activePlayer = activePlayer === 0 ? 1 : 0;
//     document.getElementById(`current--${activePlayer}`).textContent = currentScore;
//     document.getElementById(`current--${activePlayer}`).textContent = 0;
//     player0.classList.toggle('player--active');
//     player1.classList.toggle('player--active');
//     }
//   }
// )

// btnHoldElement.addEventListener('click', function () {
//     document.getElementById(`score--${activePlayer}`).textContent = currentScore;
//     totalScore[activePlayer] += currentScore;
//     // currentScore = 0;
//     document.getElementById(`current--${activePlayer}`).textContent += currentScore;
//     // activePlayer = activePlayer === 0 ? 1 : 0;
//     // document.getElementById(`current--${activePlayer}`).textContent = currentScore;
//     player0.classList.toggle('player--active');
//     player1.classList.toggle('player--active');
// })

let score0Element = document.querySelector('#score--0');
let score1Element = document.querySelector('#score--1');
let current0Element = document.getElementById('current--0');
let current1Element = document.getElementById('current--1');
let diceElement = document.querySelector('.dice');
let btnNew = document.querySelector('.btn--new');
let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');

//Game initial conditions

let totalScore, currentScore, activePlayer, isPlaying;

const initGame = function () {
  totalScore = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  isPlaying  = true;
  score0Element.textContent = 0;
  score1Element.textContent = 0;
  current0Element.textContent = 0;
  current1Element.textContent = 0;
  player0Element.classList.remove('player--winner');
  player1Element.classList.remove('player--winner');
  player0Element.classList.remove('player--active');
  player1Element.classList.remove('player--active');
  player0Element.classList.addd('player--active');
  diceElement.classList.add('hidden');
}

initGame();

const switchActivePlayer = function () {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    activePlayer = activePlayer == 0 ? 1 : 0;
    player0Element.classList.toggle('player--active');
    player1Element.classList.toggle('player--active');
}

// Roll the dice
btnRoll.addEventListener('click', function() {
  if (isPlaying) {
  // 1. Generate a random number
  let diceNumber = Math.trunc(Math.random() * 6) + 1;

  // 2. Display number on the dice
  diceElement.classList.remove('hidden');
  diceElement.src = `img/dice${diceNumber}.png`;
  diceElement.alt = `${diceNumber}`;
  // 3. If the number is 1, switch to the next player, if not - add number to the current score
  if(diceNumber !== 1) {
    currentScore += diceNumber;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    console.log(activePlayer);
  } else {
    switchActivePlayer();
  }
  }

})

btnHold.addEventListener('click', function () {
  if (isPlaying) {
// 1. Add current score to active player total score
  totalScore[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent = totalScore[activePlayer];

  // 2. If total score of active player >= 100, active player won,  if not - switch active player
  if (totalScore[activePlayer] >= 100) {
    isPlaying = false;
    diceElement.classList.remove('hidden');
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
  } else {
  switchActivePlayer();
  }
  }


})

btnNew.addEventListener('click', initGame);
