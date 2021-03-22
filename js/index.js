console.log('Hello Bluedog');

const toggle = {
  currentMode: 'lightMode',
  // opposite values for new mode
  modes: {
    darkMode: 'lightMode',
    lightMode: 'darkMode'
  },
  contentStates: {
    lightMode: {
      text:
        'As we shed light on the intricacies of psoriasis pathogenesis, we now know that other proinflammatory cytokines supplement the IL-17/23 axis and charge the immune cells in circulation.',
      button: 'RESET THE SWITCH'
    },
    darkMode: {
      text:
        'The complex immunopathogenic mechanisms driving psoriasis involve interactions between keratinocytes and immunecells, overloading the cycle of inflammation that keeps patients plugged into their psoriasis – bound by skin plaques causing clinical symptoms of pain, itching, and burning sensations.',
      button: 'FLIP THE SWITCH'
    }
  },
  toggleState() {
    const newMode = this.modes[this.currentMode];
    this.toggleTitleDisplayProperty(newMode);
    this.changeTextContent({ className: '.info__content-text', newText: this.contentStates[newMode].text });
    this.changeTextContent({ className: '.toggle-switch__text', newText: this.contentStates[newMode].button });
    this.currentMode = newMode;
  },
  // set current display none && new to inline
  toggleTitleDisplayProperty(newMode) {
    document.querySelector(`.info__content-title--${this.currentMode}`).style.display = 'none';
    document.querySelector(`.info__content-title--${newMode}`).style.display = 'inline-block';
  },
  changeTextContent({ className, newText }) {
    document.querySelector(className).textContent = newText;
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const toggleSwitch = document.querySelector('.toggle-switch');
  const elementToToggle = document.querySelector('.info');
  toggleSwitch.addEventListener('click', () => {
    // returns true if it turns light mode on
    let activateLightMode = elementToToggle.classList.toggle('light-mode');
    toggleSwitch.classList.toggle('active');
    toggle.toggleState();
  });
});
