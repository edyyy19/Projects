/* Ex 1) Sa se creeze o variabila reprezentand numărul de produse pe care 
le are un user în cos. Daca numărul de produseeste peste 5 ( inclusiv ) 
afișează în consola “Ai transport gratuit”.*/
let userGoods = 4;

if (userGoods > 5) {
  console.log('Ai transport gratuit.');
} else {
  console.log('Transportul nu este gratuit.');
}

/* Ex 2) Sa se creeze o variabila reprezentand parola userului curent 
(ca valoarea a variabilei puneti orice string, ex: "pisicutsa123"). Apoi sa 
se afiseze in consola "Lungimea parolei este de X caractere" */
let userPassword = 'parolameaesteputernica';
console.log(`Lungimea parolei este de ${userPassword.length} de caractere.`);

/* Ex 3) Daca lungimea parolei este mai mare decat 8 sa se afiseze in 
consola "Puternica", altfel sa afiseze in consola "Slaba" */
if (userPassword.length > 8) {
  console.log('Parola puternica.');
} else {
  console.log('Parola este slaba.');
}

/* Ex 4) Sa se creeze o variabila reprezentand numărul de produse pe 
care le are un user în cos. Daca numărul de produse este peste 5 afișează
în consola “Ai transport gratuit”, altfel sa se afișeze “Mai adauga X 
produse ca sa ai transport gratuit”. X reprezintă diferența pana la 5. */
let numberOfProducts = 4;
if (numberOfProducts >= 5) {
  console.log('Ai transport gratuit!');
} else {
  console.log(
    `Mai adauga ${
      5 - numberOfProducts
    } produse pentru a beneficia de transport gratuit`
  );
}

/* Ex 5) Sa se creeze o funcție care primește un parametru ( știm ca e 
de tip number ), iar functia sa returneze valorea parametrului plus 10 */
let numberPlusTen = (number) => {
  return number + 10;
};
console.log(numberPlusTen(9));

/* Ex 6) Sa se creeze o funcție care primește un parametru ( știm ca e 
de tip number ), iar functia sa returneze valorea parametrului inmultita
cu 3 */
let numberMultiplied = (number) => {
  return number * 3;
};
console.log(numberMultiplied(3));

/* Ex 7) Sa se creeze o funcție care primește doi parametrii ( știm ca 
amandoi de tip number ), iar functia sa returneze diferenta lor */
let diferenta = (number1, number2) => {
  return number1 - number2;
};
console.log(diferenta(3, 6));

/* Ex 8) Sa se creeze o funcție care primește un parametru ( știm ca e 
de tip number ), iar functia sa returneze true dacă valoarea parametrului 
este mai mai mare decât 5, iar în caz contrar sa returneze false. */
let numberBiggerThanFive = (number) => {
  if (number > 5) {
    return true;
  } else {
    return false;
  }
};
let parameter = 6;
let result = numberBiggerThanFive(parameter);
console.log(`Este ${parameter} mai mare decat 5? Raspuns: ${result}`);

/* Ex 9) Sa se creeze o funcție care primește doi parametrii ( știm ca 
amandoi sunt de tip number ), iar functia sa returneze true dacă suma 
celor doi este mai mai mare decât 10, iar în caz contrar sa returneze 
false. */

let sumOfNumbers = (number1, number2) => {
  if (number1 + number2 > 10) {
    return true;
  } else {
    return false;
  }
};
let number1 = 8;
let number2 = 1;
let result2 = sumOfNumbers(number1, number2);
console.log(
  `Suma numarului ${number1} si ${number2} este mai mare decat 10? Raspuns: ${result2}`
);

/* Ex 10) Sa se creeze o funcție care primește un parametru ( știm ca e 
de tip string ). Funcția sa returneze lungimea lui. De exemplu, dacă apelam 
funcția cu parametrul “Hello”, functia sa returneze 5 */

let stringLength = (string) => {
  return string.length;
};
let string = 'Salut Cristian, iti place tema mea? :)';
let result3 = stringLength(string);
console.log(`String-ul ${string} contine ${result3} caractere.`);
