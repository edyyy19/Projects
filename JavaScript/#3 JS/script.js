/* 1. Sa se creeze o functie care primeste trei parametrii ( d, e și f ) 
si returneaza produsul lor */
let sumOfNumber = (d, e, f) => {
  return d + e + f;
};

console.log(sumOfNumber(10, 2, 7));

/* 2. Sa se creeze o functie care primeste un parametru ( x ) si 
returneaza diferența lui cu 10. De exemplu dacă x = 16, funcția sa 
returneze 6 */

let differenceX = (x) => {
  return x - 10;
};
console.log(differenceX(19));

/* 3. Sa se creeze o functie care primeste un parametru ( a ) si 
returneaza opusul lui. De exemplu dacă a este 7 funcția sa returneze -7. */

let opositeNumber = (number) => {
  return -number;
};
console.log(opositeNumber(19));

/* 4. Sa se creeze o functie care primeste doi parametrii ( x si y ) 
si returneaza diferenta lor inmultita cu 2. Ex: dacă x = 24, y = 4, 
funcția sa returneze valoarea 40, adica (24 - 4) * 2 */

let multipliedDifference = (x, y) => {
  return (x - y) * 2;
};
console.log(multipliedDifference(7.5, 3));

/* 5. Sa se creeze o functie care primeste un parametru ( notaMea ) 
si returneaza “Promovat” dacă valoarea parametrului este peste 5 
( inclusiv ), în caz contrar returnează “Picat” */

let qualifying = (notaMea) => {
  if (notaMea >= 5) {
    return console.log('Esti promovat!');
  } else {
    return console.log('Ai picat, poate data viitoare.');
  }
};

console.log(qualifying(9));

/** 6. Sa se creeze o funcție care primeste doi parametrii ( a si b ) 
și dacă diferența lor ( a - b ) este mai mare decât 10, atunci sa 
returneze true, altfel false. */

let differenceAnB = (a, b) => {
  if (a - b > 10) {
    return true;
  } else {
    return false;
  }
};
let parameter1 = 0;
let parameter2 = 1;
let result = differenceAnB(parameter1, parameter2);
console.log(
  `Diferenta numarului ${parameter1} si ${parameter2} este mai mare decat 10? Raspuns: ${result}`
);

/* 7. Sa se creeze o funcție care primeste doi parametrii ( a si b ) 
și dacă cele doua numere sunt egale sa se returneze true, altfel false. */

let equalNumbers = (a, b) => {
  if (a == b) {
    return true;
  } else {
    return false;
  }
};
let numberOne = 19;
let numberTwo = 19;
let result2 = equalNumbers(numberOne, numberTwo);
console.log(
  `Numarul ${numberOne} este egal cu numarul ${numberTwo}? Raspuns: ${result2}`
);

/* 8. Sa se creeze o funcție care primeste doi parametrii ( a si b ) și
dacă este a mai mare decat b, atunci sa se returneze a, altfel b. */
let biggerNumber = (a, b) => {
  if (a > b) {
    return `Numarul ${a} este mai mare decat numarul ${b}.`;
  } else {
    return `Numarul ${b} este mai mare decat numarul ${a}.`;
  }
};
console.log(biggerNumber(9, 19));

/* 9. Sa se creeze un array cu 3 elemente. Puteti sa il denumiti 
"primulMeuArray". Apoi: */
let arr = ['Audi RS6', 'Audi A3', 'Audi TT RS'];
//  - sa se afiseze in consola elementul de pe indexul 2
console.log(arr.slice(2));
//  - sa se stearga elementul de pe indexul 2
arr.splice(2, 2);
// - sa se afiseze in consola tot array-ul
console.log(arr);
// - sa se adauge in array inca un element
arr.push('Audi S5');
// - sa se afiseze in consola tot array-ul
console.log(arr);
// - sa se stearga elementul nou adaugat
arr.splice(2, 2);
// - sa se afiseze in consola tot array-ul
console.log(arr);
