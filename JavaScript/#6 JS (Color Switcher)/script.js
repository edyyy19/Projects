const listOfcolors = ['#AD636C', '#009B72', '#6761A8', '#347E8D', '#798186'];

const nextBtn = document.querySelector('.color-switcher-next');
const previousBtn = document.querySelector('.color-switcher-previous');
const colorSwitcherContainer = document.querySelector(
  '.color-switcher-container'
);
const colorSwitcherHexCode = document.querySelector(
  '.color-switcher-text-hexcode'
);
const colorSwitcherNumberOfClicks = document.querySelector(
  '.color-switcher-text-numberofclicks'
);
const resetBtn = document.querySelector('.color-switcher-reset');
const colorSwitcherNumberOfResets = document.querySelector(
  '.color-switcher-text-numberofresets'
);

// NEXT BUTTON
let index = 0;
let counterClicks = 0;

const switchNextColor = () => {
  index++;
  if (index === 5) {
    index = 0;
  }
  colorSwitcherContainer.style.backgroundColor = listOfcolors[index];
  colorSwitcherHexCode.innerText = listOfcolors[index];
  colorSwitcherHexCode.style.color = listOfcolors[index];

  // CONTORIZATOR:
  counterClicks++;
  colorSwitcherNumberOfClicks.innerText = `Number Of Clicks: ${counterClicks}`;
};

nextBtn.addEventListener('click', switchNextColor);

// PREVIOUS BUTTON
const switchPreviousColor = () => {
  index = index - 1;
  if (index === -1) {
    index = 4;
  }
  colorSwitcherContainer.style.backgroundColor = listOfcolors[index];
  colorSwitcherHexCode.innerText = listOfcolors[index];
  colorSwitcherHexCode.style.color = listOfcolors[index];

  // CONTORIZATOR:
  counterClicks++;
  colorSwitcherNumberOfClicks.innerText = `Number Of Clicks: ${counterClicks}`;
};

previousBtn.addEventListener('click', switchPreviousColor);

// RESET BUTTON:
let counterResets = 0;

const resetColor = () => {
  index = index - index;
  colorSwitcherContainer.style.backgroundColor = listOfcolors[index];
  colorSwitcherHexCode.innerText = listOfcolors[index];
  colorSwitcherHexCode.style.color = listOfcolors[index];

  // CONTORIZATOR:
  counterResets++;
  colorSwitcherNumberOfResets.innerText = `Number Of Resets: ${counterResets}`;
};

resetBtn.addEventListener('click', resetColor);
