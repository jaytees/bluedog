function Toggle(paramsObj) {
  this.elementModificationFlag = paramsObj.elementModificationFlag;
  this.switchModificationFlag = paramsObj.switchModificationFlag;
  this.currentMode = paramsObj.currentMode;
  this.modes = paramsObj.modes;
  this.contentTitleClassName = paramsObj.contentTitleClassName;
  this.contentTextClassName = paramsObj.contentTextClassName;
  this.switchTextClassName = paramsObj.switchTextClassName;
  this.contentStates = paramsObj.content;
  this.toggleSwitch = document.querySelector(paramsObj.toggleSwitchClass);
  this.elementToToggle = document.querySelector(paramsObj.contentContainerClass);
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
