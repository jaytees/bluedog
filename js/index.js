import Toggle from './toggle.js';
import content from './content.js';
import scrollAnimation from './scroll.js';

document.addEventListener('DOMContentLoaded', () => {
  // sets up the event listener and functionality
  const infoToggle = new Toggle({
    elementModificationFlag: 'lightMode',
    switchModificationFlag: 'active',
    currentMode: 'darkMode',
    modes: {
      darkMode: 'lightMode',
      lightMode: 'darkMode'
    },
    content: content,
    contentTitleClassName: '.info__content-title--',
    contentTextClassName: '.info__content-text',
    switchTextClassName: '.toggle-switch__text',
    toggleSwitchClass: '.toggle-switch',
    contentContainerClass: '.info'
  });
  infoToggle.createEventListener();

  // creates scroll animation for navBar and info section
  scrollAnimation();
});
