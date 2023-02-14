'use strict';
// console.log('Pavel Yakovlev');

let score0Element = document.querySelector('#score--0');
let score1Element = document.querySelector('#score--1');
let diceElement = document.querySelector('.dice');

score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');

let btnNewElement = document.querySelector('.btn--new');
let btnRollElement = document.querySelector('.btn--roll');
let btnHoldElement = document.querySelector('.btn--hold');
let currentScore = Number(document.getElementById('current--0').textContent);

btnRollElement.addEventListener('click', function(){
  let diceNumber = Math.trunc(Math.random() * 6) + 1;
  if(diceNumber !== 1) {
  currentScore = currentScore + diceNumber;
  document.getElementById('current--0').textContent = currentScore;
  }else if (diceNumber == 1) {
    document.getElementById('current--0').textContent = 0;
  }
})
