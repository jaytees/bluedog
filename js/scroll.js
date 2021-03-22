// makes the nav bar appear when user begins to scroll up
const scrollAnimation = () => {
  window.onscroll = () => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    const navBar = document.querySelector('.nav');

    scrollY <= window.lastScroll ? (navBar.style.visibility = 'visible') : (navBar.style.visibility = 'hidden');

    scrollY >= '400'
      ? document.querySelector('.info__content').classList.add('info__content--animated')
      : document.querySelector('.info__content').classList.remove('info__content--animated');

    window.lastScroll = scrollY;
  };
};

export default scrollAnimation;
