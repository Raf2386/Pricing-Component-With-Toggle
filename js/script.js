'use strict';

const changeBtn = document.querySelector('.button__change');
const monthlyPrices = document.querySelectorAll('.card__price-monthly');
const annuallyPrices = document.querySelectorAll('.card__price-annually');

changeBtn.addEventListener('click', () => {
  changeBtn.classList.toggle('flex-start');
  monthlyPrices.forEach(item => item.classList.toggle('hidden'));
  annuallyPrices.forEach(item => item.classList.toggle('hidden'));
});
