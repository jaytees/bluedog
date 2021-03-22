import { create } from './toggle.js';
document.addEventListener('DOMContentLoaded', () => {
  // sets up the event listener and functionality
  create({
    toggleSwitchClass: '.toggle-switch',
    contentContainerClass: '.info'
  });
  // makes the nav bar appear when user begins to scroll up
  window.onscroll = () => {
    var scrollY = window.pageYOffset || document.documentElement.scrollTop;
    var navBar = document.querySelector('.nav');

    scrollY <= window.lastScroll ? (navBar.style.visibility = 'visible') : (navBar.style.visibility = 'hidden');

    window.lastScroll = scrollY;
  };
});
