// ==================== Calculator ====================
const plusBtn = document.querySelector('.plus-btn');
const minusBtn = document.querySelector('.minus-btn');
const multiplyBtn = document.querySelector('.multiply-btn');
const divideBtn = document.querySelector('.devide-btn');
const calculatorNumber = document.querySelector('.calculator-number');
const helpBtn = document.querySelector('.calculator-help');
const resetBtn = document.querySelector('.calculator-reset');
const resetTimes = document.querySelector('.calculator-reset-text');

// ========= Add, Minus, Multiply, Devide one =========
let number = 0;

/* Daca cifra din calculator este mai mare decat 10 atunci textul din calculator sa aiba
un font size mai mare ( cand scadeti sub 10 sa revina la ce am pus noi ) */
// REZOLVARE:
const updateFontSize = () => {
  calculatorNumber.innerText = number;
  if (number > 10) {
    calculatorNumber.style.fontSize = '75px';
  }
  if (number < 10) {
    calculatorNumber.style.fontSize = '60px';
  }
};

const addOne = () => {
  number++;
  calculatorNumber.innerText = number;
  updateFontSize();
};
const minusOne = () => {
  number--;
  calculatorNumber.innerText = number;
  updateFontSize();
};
// De completat functionalitatea pentru butoanele de inmultire si impartire
// REZOLVARE:
const multiplyByTwo = () => {
  number = number * 2;
  calculatorNumber.innerText = number;
  updateFontSize();
};
const divideByTwo = () => {
  number = number / 2;
  calculatorNumber.innerText = number;
  updateFontSize();
};

// =============== Add function to BTN ===============
plusBtn.addEventListener('click', addOne);
minusBtn.addEventListener('click', minusOne);
multiplyBtn.addEventListener('click', multiplyByTwo);
divideBtn.addEventListener('click', divideByTwo);

// ===================================================================================== //

/* Undeva in dreapta jos pe ecran sa apara un buton de help care odata apasat sa afiseze un 
alert cu instructiuni de folosire al calculatorului */
// REZOLVARE:

const alertHelp = () => {
  alert(`Instructiuni de folosire:
  - Butonul ' + ' adauga 1 la numarul actual.
  - Butonul ' - ' scade 1 la numarul actual.
  - Butonul ' x ' inmulteste numarul cu 2 numarul actual.
  - Butonul ' / ' imparte numarul la 2 numarul actual.
  - Butonul 'reset' reseteaza valoarea afisata pe calculator.`);
};

helpBtn.addEventListener('click', alertHelp);

// ===================================================================================== //

/* de adaugat buton de reset ( odata apasat sa reseteze cifra la zero ) */
// REZOLVARE:

const resetCalculator = () => {
  number -= number;
  calculatorNumber.innerText = number;
};

resetBtn.addEventListener('click', resetCalculator);

// ===================================================================================== //

/* Undeva pe ecran sa apara numarul de resetari ale calculatorului "Calculatorul a fost
resetat de X ori" */
// REZOLVARE:

let counter = 0;

const countReset = () => {
  counter = counter + 1;
  resetTimes.innerText = `Calculatorul a fost resetat de ${counter} ori.`;

  // dupa 2 secunde dispare
  resetTimes.style.display = 'block';
  setTimeout(() => {
    resetTimes.style.display = 'none';
  }, 2000); // dupa 2 secunde dispare
};

resetBtn.addEventListener('click', countReset);
