'use strict'

const MENU_ACTIVE_CLASS = 'burger-menu--visible';
const OVERLAY_ACTIVE_CLASS = 'overlay--visible';

const burgerNode = document.querySelector('.burger');
const closeBurgerNode = document.querySelector('.burger-menu__btn');
const menuNode = document.querySelector('.burger-menu');
const overlayNode = document.querySelector('.overlay');

function toggleMenu() {
  document.body.classList.toggle('dis-scroll');
  menuNode.classList.toggle(MENU_ACTIVE_CLASS);
  overlayNode.classList.toggle(OVERLAY_ACTIVE_CLASS);
}

burgerNode.addEventListener('click', toggleMenu);
closeBurgerNode.addEventListener('click', toggleMenu);