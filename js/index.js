console.log('Hello Bluedog');

document.addEventListener('DOMContentLoaded', () => {
  const contentStates = {
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
  const toggleSwitch = document.querySelector('.toggle-switch');
  const elementToToggle = document.querySelector('.info');
  toggleSwitch.addEventListener('click', () => {
    // returns true if it turns light mode on
    let activateLightMode = elementToToggle.classList.toggle('light-mode');
    toggleSwitch.classList.toggle('active');

    if (activateLightMode) {
      console.log('change content to light mode');
      toggleState('lightMode', contentStates);
    } else {
      console.log('change content to dark mode');
      toggleState('darkMode', contentStates);
    }
  });
});

const toggleState = (newMode, contentStates) => {
  // newMode === darkMode || lightMode for content obj
  const modeClassNames =
    newMode === 'lightMode'
      ? { currentModeClassName: '--dark-mode', newModeClassName: '--light-mode' }
      : { currentModeClassName: '--light-mode', newModeClassName: '--dark-mode' };
  toggleTitleDisplayProperty(modeClassNames);
  changeTextContent({ className: '.info__content-text', newText: contentStates[newMode].text });
  changeTextContent({ className: '.toggle-switch__text', newText: contentStates[newMode].button });
};

const changeTextContent = ({ className, newText }) => {
  document.querySelector(className).textContent = newText;
};

const toggleTitleDisplayProperty = ({ currentModeClassName, newModeClassName }) => {
  console.log({ currentModeClassName, newModeClassName });
  // set to display none
  document.querySelector(`.info__content-title${currentModeClassName}`).style.display = 'none';
  //   set to display inline
  document.querySelector(`.info__content-title${newModeClassName}`).style.display = 'inline-block';
};
