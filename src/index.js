  'use strict';
  import "@babel/polyfill";
   import 'nodelist-foreach-polyfill';
  import 'formdata-polyfill';
  import 'es6-promise';
  import 'fetch-polyfill';
  import elementClosest from 'element-closest';
  elementClosest(window);
  

  import countTimer from './modules/countTimer';
  import toggleMenu from './modules/toggleMenu';
  import togglePopup from './modules/togglePopup';
  import tabs from './modules/tabs';
  import slider from './modules/slider';
  import mouseHover from './modules/mouseHover';
  import inputValid from './modules/inputValid';
  import calc from './modules/calc';
  import sendForm from './modules/sendForm';

  // Таймер 
  countTimer('13 October 2019');

  // Меню
  toggleMenu();

  //Popup Window
  togglePopup();

  // Табы 
  tabs();

  // Слайдер 
  slider();

  //Секция наша команда Замена фото при наведении мышы
  mouseHover();

  // Проверка инпутов на число
  inputValid();

  // Калькулятор
  calc(100);

  // Send-Ajax-Form 
  sendForm();