'use strict';
// console.log('Pavel Yakovlev');

let score0Element = document.querySelector('#score--0');
let score1Element = document.querySelector('#score--1');
let diceElement = document.querySelector('.dice');
let player0 = document.querySelector('.player--0');
let player1 = document.querySelector('.player--1');

score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');
let activePlayer = 0;

let btnNewElement = document.querySelector('.btn--new');
let btnRollElement = document.querySelector('.btn--roll');
let btnHoldElement = document.querySelector('.btn--hold');
let currentScore = Number(document.getElementById(`current--${activePlayer}`).textContent);

btnRollElement.addEventListener('click', function(){
  diceElement.classList.remove('hidden');
  let diceNumber = Math.trunc(Math.random() * 6) + 1;
  diceElement.src = `img/dice${diceNumber}.png`
  if(diceNumber !== 1) {
  currentScore = currentScore + diceNumber;
  document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  } else  {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    // console.log((`current--${activePlayer}`).textContent);
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    `player${activePlayer}` = `player--${activePlayer}`;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
    }
  }
)

btnHoldElement.addEventListener('click', function () {
    document.getElementById(`score--${activePlayer}`).textContent = currentScore;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
})
// })
