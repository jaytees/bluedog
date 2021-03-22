import { create } from './toggle.js';
document.addEventListener('DOMContentLoaded', () => {
  create({
    toggleSwitchClass: '.toggle-switch',
    contentContainerClass: '.info'
  });
  window.onscroll = () => {
    var scrollY = window.pageYOffset || document.documentElement.scrollTop;
    var navBar = document.querySelector('.nav');

    scrollY <= window.lastScroll ? (navBar.style.visibility = 'visible') : (navBar.style.visibility = 'hidden');

    window.lastScroll = scrollY;
  };
});
