import { create } from './toggle.js';
document.addEventListener('DOMContentLoaded', () => {
  create({
    toggleSwitchClass: '.toggle-switch',
    contentContainerClass: '.info'
  });
});
