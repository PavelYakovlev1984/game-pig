'use strict';
console.log('Pavel Yakovlev');

let score0Element = document.querySelector('#score--0');
let score1Element = document.querySelector('#score--1');
let diceElement = document.querySelector('.dice');

score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');

