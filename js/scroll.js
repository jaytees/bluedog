// makes the nav bar appear when user begins to scroll up
const scrollAnimation = () => {
  window.onscroll = () => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    // for the navBar
    const navBar = document.querySelector('.nav');
    scrollY <= window.lastScroll ? (navBar.style.visibility = 'visible') : (navBar.style.visibility = 'hidden');

    // for the infoContent
    const infoContent = document.querySelector('.info__content');
    scrollY >= '400'
      ? infoContent.classList.add('info__content--animated')
      : infoContent.classList.remove('info__content--animated');

    window.lastScroll = scrollY;
  };
};

export default scrollAnimation;
