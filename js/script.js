import calculator from './modules/calculator';
import forms from './modules/forms';
import timer from './modules/timer';
import cards from './modules/cards';
import modals from './modules/modals';
import slider from './modules/slider';
import tabs from './modules/tabs';

window.addEventListener('DOMContentLoaded', () => {

  const showModalId = setTimeout(() => (openModal('[data-modal]', showModalId)), 500000)


  calculator();

  timer('2020-06-26', '.timer');
  cards();
  modals('[data-modal]','[data-modalClose]', '.modal', showModalId );
  tabs('.tabheader__item', '.tabheader__items', '.tabcontent', 'tabheader__item_active');
  forms('form', showModalId);
  slider({
    container: '.offer__slider',
    slide: '.offer__slide',
    nextArrow: '.offer__slider-next',
    prevArrow: '.offer__slider-prev',
    totalCounter: '#total',
    currentCouner: '#current',
    wrapper: '.offer__slider-wrapper',
    field: '.offer__slider-inner'
  });
});