// Ex: 1 - Sa se creeze o variabila reprezentand numele userului curent. Variabila sa fie de tip string.

let curentUser = 'Eduard';
console.log(curentUser);
// -------------------------------------------------------------------------------------------------

// Ex: 2 - Sa se creeze o variabila reprezentand statusul userului curent - daca este administrator sau nu.
// Variabila sa aiba numele esteAdmin si sa fie de tip boolean.

let esteAdmin = true;
let statusAdmin = 'Admin status = ';
console.log(statusAdmin + esteAdmin);
// -------------------------------------------------------------------------------------------------

// Ex3: Sa se creeze o variabila a de tip number si sa aiba valoarea 20, o variabila de tip number si sa aiba valoarea 7,
//  sa se afiseze in consola suma, diferenta, inmultirea si impartirea lor.

let numberUnu = 20;
let numberDoi = 7;
console.log(numberUnu + numberDoi);
console.log(numberUnu - numberDoi);
console.log(numberUnu * numberDoi);
console.log(numberUnu / numberDoi);
// -------------------------------------------------------------------------------------------------

// Ex4: Extra - sa se afiseze in consola lungimea string-ului de la exercitiul 1. De exemplu, daca nunele userului curent este
// "Cristian" sa se afiseze in consola 8.
let text = 'Eduard';
let length = text.length;
document.getElementById('demo').innerHTML = length;
console.log(curentUser.length);
