// VARIANTA 1:
// const calculatorCalculateButton = document.querySelector('.calculator-button');
// const firstNumberInput = document.querySelector('[name="first-number"]');
// const secondNumberInput = document.querySelector('[name="second-number"]');
// const calculatorResult = document.querySelector('.calculator-result');

// const calculate = () => {
//   firstNumber = Number(firstNumberInput.value);
//   secondNumber = Number(secondNumberInput.value);
//   calculatorResult.innerText = `Result: ${firstNumber + secondNumber}`;
// };

// calculatorCalculateButton.addEventListener('click', calculate);

// VARIANTA 2: (este o varianta mai practica)
const calculatorForm = document.querySelector('.calculator-form');
const calculatorResult = document.querySelector('.calculator-result');
const plusButton = document.querySelector('[value="plus"]');
const minusButton = document.querySelector('[value="minus"]');
const multiplyButton = document.querySelector('[value="multiply"]');
const divideButton = document.querySelector('[value="divide"]');
const calculate = (e) => {
  e.preventDefault(); // nu se mai da refresh la pagina cand este un 'form'
  const formData = new FormData(calculatorForm);

  let firstNumber = formData.get('first-number');
  let secondNumber = formData.get('second-number');
  // SETUP INPUT-URI - VARIANTA 2:
  if (firstNumber.includes('e') || secondNumber.includes('e')) {
    alert(`Please enter only numbers!`);
    return;
  }

  firstNumber = parseFloat(firstNumber);
  secondNumber = parseFloat(secondNumber);

  if (
    Number.isInteger(firstNumber) === false ||
    Number.isInteger(secondNumber) === false
  ) {
    alert(`Please enter only numbers!`);
    return;
  }
  // ============================================
  if (plusButton.selected == true) {
    calculatorResult.innerText = `Result: ${firstNumber + secondNumber}`;
  }
  if (minusButton.selected == true) {
    calculatorResult.innerText = `Result: ${firstNumber - secondNumber}`;
  }
  if (multiplyButton.selected == true) {
    calculatorResult.innerText = `Result: ${firstNumber * secondNumber}`;
  }
  if (divideButton.selected == true) {
    calculatorResult.innerText = `Result: ${firstNumber / secondNumber}`;
  }
};
calculatorForm.addEventListener('submit', calculate);
// ================== SETUP INPUT-URI ================== //

// VARIANTA 1:
// const firstNumberInput = document.querySelector('[name="first-number"]');
// const secondNumberInput = document.querySelector('[name="second-number"]');

// const handleFirstNumberInputChanges = () => {
//   console.log(firstNumberInput.value);
//   if (
//     firstNumberInput.value.length === 0 ||
//     firstNumberInput.value.includes('e')
//   ) {
//     firstNumberInput.value = firstNumberInput.value.replace('e', '');
//   }
// };

// firstNumberInput.addEventListener('input', handleFirstNumberInputChanges);

// VARIANTA 2:
// varianta 2 e mai sus
