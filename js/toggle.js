function Toggle({
  elementModificationFlag,
  switchModificationFlag,
  currentMode,
  modes,
  contentTitleClassName,
  contentTextClassName,
  switchTextClassName,
  toggleSwitchClass,
  contentContainerClass
}) {
  this.elementModificationFlag = elementModificationFlag;
  this.switchModificationFlag = switchModificationFlag;
  this.currentMode = currentMode;
  this.modes = modes;
  this.contentTitleClassName = contentTitleClassName;
  this.contentTextClassName = contentTextClassName;
  this.switchTextClassName = switchTextClassName;
  this.contentStates = {
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
  };
  this.toggleSwitch = document.querySelector(toggleSwitchClass);
  this.elementToToggle = document.querySelector(contentContainerClass);
}

Toggle.prototype.createEventListener = function () {
  this.toggleSwitch.addEventListener('click', () => {
    // returns true if it turns light mode on
    this.elementToToggle.classList.toggle(this.elementModificationFlag);
    this.toggleSwitch.classList.toggle(this.switchModificationFlag);
    this.updateUi();
  });
};

// handles different stages of the toggle
Toggle.prototype.updateUi = function () {
  const newMode = this.modes[this.currentMode];
  this.toggleTitleDisplayProperty(newMode);
  this.changeTextContent({ className: this.contentTextClassName, newText: this.contentStates[newMode].text });
  this.changeTextContent({ className: this.switchTextClassName, newText: this.contentStates[newMode].button });
  this.currentMode = newMode;
};

// set current display none && new to inline
Toggle.prototype.toggleTitleDisplayProperty = function (newMode) {
  document.querySelector(`${this.contentTitleClassName}${this.currentMode}`).style.display = 'none';
  document.querySelector(`${this.contentTitleClassName}${newMode}`).style.display = 'inline-block';
};

Toggle.prototype.changeTextContent = function ({ className, newText }) {
  document.querySelector(className).textContent = newText;
};

export default Toggle;
