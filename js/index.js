import { create } from './toggle.js';
document.addEventListener('DOMContentLoaded', () => {
  // sets up the event listener and functionality
  create({
    toggleSwitchClass: '.toggle-switch',
    contentContainerClass: '.info'
  });
  document.querySelector('.hero__title').classList.add('hero__title--animated');
  // makes the nav bar appear when user begins to scroll up
  window.onscroll = () => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    const navBar = document.querySelector('.nav');

    scrollY <= window.lastScroll ? (navBar.style.visibility = 'visible') : (navBar.style.visibility = 'hidden');

    scrollY >= '400'
      ? document.querySelector('.info__content').classList.add('info__content--animated')
      : document.querySelector('.info__content').classList.remove('info__content--animated');

    // scrollY < '400'
    //   ? document.querySelector('.hero__title').classList.add('hero__title--animated')
    //   : document.querySelector('.hero__title').classList.remove('hero__title--animated');

    window.lastScroll = scrollY;
  };
});
