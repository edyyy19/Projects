/* Ex 1) Sa se creeze o functie care primeste ca parametru un array de produse
Functia sa returneze suma totala de plata. Pretul fiecarui produs sa includa si TVA 19% */

const cartProducts = [
  {
    id: 1,
    price: 20,
    name: 'Product X',
    quantity: 1,
  },
  {
    id: 2,
    price: 35,
    name: 'Product Y',
    quantity: 1,
  },
  {
    id: 3,
    price: 20,
    name: 'Product Z',
    quantity: 2,
  },
];

const tva = 0.19;
const getCartTotal = (parametru) => {
  let total = 0;

  for (i = 0; i < parametru.length; i++) {
    const priceTva = parametru[i].price * tva;
    const productPrice =
      (parametru[i].price + priceTva) * parametru[i].quantity;

    total += productPrice;
  }
  return total;
};
console.log(parseFloat(getCartTotal(cartProducts)).toFixed(2));
//=====================================================================================

/* Ex 2) Sa se creeze o functie care primeste ca parametru un array de produse
Functia sa returneze "Ai livrare gratuita daca cumperi 5 bucati din produsul Z" */

// NOTE: array-ul meu a ramas cel de sus 'cartProducts'

const freeDelivery = (parametru2) => {
  let sumQuantity = 0;

  for (i = 1; i < parametru2.length; i += 2) {
    sumQuantity += parametru2[i].quantity;
  }
  if (sumQuantity < 5) {
    const productsToAdd = 5 - sumQuantity;
    return `Mai adauga ${productsToAdd} bucati din produsul 'Y' pentru a beneficia de livrare gratuita!`;
  } else {
    return 'Ai livrare gratuita!';
  }
};
console.log(freeDelivery(cartProducts));
//=====================================================================================

/* Ex 3) Sa se creeze o functie care primeste ca parametru un array de produse
Functia sa returneze suma totala a produselor care au pretul mai mare decat 80. */
const cartProducts2 = [
  {
    id: 1,
    price: 20,
    name: 'Product X',
    quantity: 4,
  },
  {
    id: 2,
    price: 35,
    name: 'Product Y',
    quantity: 3,
  },
  {
    id: 3,
    price: 20,
    name: 'Product Z',
    quantity: 3,
  },
];

const sumOver80 = (parametru3) => {
  let sumOfProductsOver80 = 0;

  for (i = 0; i < parametru3.length; i++) {
    if (parametru3[i].price * parametru3[i].quantity >= 80) {
      sumOfProductsOver80 += parametru3[i].price * parametru3[i].quantity;
    }
  }
  return sumOfProductsOver80;
};
console.log(sumOver80(cartProducts2));
//=====================================================================================

/* Ex 4.1) Sa se creeze o functie care primeste ca parametru un array de produse
Functia sa returneze numarul total de tipuri de produse din cos */
const typesOfProducts = (parametru4) => {
  let sumTypesOfProducts = parametru4.length;
  return sumTypesOfProducts;
};
console.log(typesOfProducts(cartProducts2));
//=====================================================================================

/* Ex 4.2) Sa se creeze o functie care primeste ca parametru un array de produse
Functia sa returneze numarul total de produse din cos */

const productsQuantity = (parametru5) => {
  let sumOfProductsQuantity = 0;

  for (i = 0; i < parametru5.length; i++) {
    sumOfProductsQuantity += parametru5[i].quantity;
  }
  return sumOfProductsQuantity;
};
console.log(productsQuantity(cartProducts2));
//=====================================================================================

/* Ex 5) Sa se creeze o functie care primeste ca parametru un array de produse
Functia sa returneze numarul total de produse din cos care sunt din categoria 'jewelery' */

const cartProducts3 = [
  {
    id: 83172,
    price: 549,
    name: 'Product A',
    quantity: 2,
    category: 'jewelery',
  },
  {
    id: 897032,
    price: 100,
    name: 'Product B',
    quantity: 4,
    category: 'electronics',
  },
  {
    id: 3821,
    price: 90,
    name: 'Product C',
    quantity: 5,
    category: 'women-clothing',
  },
  {
    id: 319,
    price: 30,
    name: 'Product D',
    quantity: 2,
    category: 'women-clothing',
  },
  {
    id: 9342,
    price: 2000,
    name: 'Product E',
    quantity: 1,
    category: 'jewelery',
  },
  {
    id: 8,
    price: 180,
    name: 'Product F',
    quantity: 2,
    category: 'electronics',
  },
];

const displayJewelery = (parameter) => {
  let numberOfJeweleryProducts = 0;

  for (i = 0; i < parameter.length; i++) {
    if (parameter[i].category === 'jewelery') {
      numberOfJeweleryProducts += parameter[i].quantity;
    }
  }
  return numberOfJeweleryProducts;
};
console.log(displayJewelery(cartProducts3));
//=====================================================================================

/* Ex 6) Sa se creeze o functie care primeste ca parametru un array de produse
Functia sa returneze mesajul "Ai cumparat produse din categoria de bijuterii in valoare de X lei */

const displayJeweleryPrice = (parameter2) => {
  let jeweleryPrice = 0;

  for (i = 0; i < parameter2.length; i++) {
    if (parameter2[i].category === 'jewelery') {
      jeweleryPrice += parameter2[i].quantity * parameter2[i].price;
    }
  }
  return `Ai cumparat produse din categoria 'jewelery' in valoare de ${jeweleryPrice} RON.`;
};
console.log(displayJeweleryPrice(cartProducts3));
//=====================================================================================

/* Ex 7) Sa se creeze o functie care primeste ca parametru un array de produse
Functia sa returneze mesajul "Cel mai scump produs pe care l-ai selectat este X, ai comandat o
cantitate de Y si vei plati Z lei" */

// ====== VARIANTA 1 ====== //
const displayMostExpensiveProduct = (parameter3) => {
  let mostExpensivePrice = parameter3[0].price;

  for (i = 1; i < parameter3.length; i++) {
    if (parameter3[i].price > mostExpensivePrice) {
      mostExpensivePrice = parameter3[i].price;
    }
  }

  for (i = 1; i < parameter3.length; i++) {
    if (parameter3[i].price === mostExpensivePrice) {
      return `Cel mai scump produs pe care l-ai selectat este '${
        parameter3[i].name
      }', cantitatea comandata este de ${parameter3[i].quantity} si vei plati ${
        mostExpensivePrice * parameter3[i].quantity
      } RON.`;
    }
  }
};
console.log(displayMostExpensiveProduct(cartProducts3));

// ====== VARIANTA 2 ====== //
const displayMostExpensiveProduct1 = (parameter31) => {
  let mostExpensivePrice1 = parameter31[0].price;
  let index = 0;

  for (i = 1; i < parameter31.length; i++) {
    if (parameter31[i].price > mostExpensivePrice1) {
      mostExpensivePrice1 = parameter31[i].price;
      index = i;
    }
  }
  return `Cel mai scump produs pe care l-ai selectat este '${
    parameter31[index].name
  }', cantitatea comandata este de ${
    parameter31[index].quantity
  } si vei plati ${mostExpensivePrice1 * parameter31[index].quantity} LEI.`;
};
console.log(displayMostExpensiveProduct1(cartProducts3));
//=====================================================================================

/* Ex 8) Sa se creeze o functie care primeste ca parametru un array de produse
Functia sa returneze mesajul "Cel mai ieftin produs pe care l-ai selectat are id-ul X" */

const cheapestProduct = (parameter5) => {
  let minPrice = parameter5[0].price;
  let index2 = 0;

  for (i = 1; i < parameter5.length; i++) {
    if (parameter5[i].price < minPrice) {
      minPrice = parameter5[i].price;
      index2 = i;
    }
  }
  return `Cel mai ieftin produs pe care l-ai selectat are id-ul ${parameter5[index2].id}.`;
};
console.log(cheapestProduct(cartProducts3));
//=====================================================================================

/* Ex 9) Sa se creeze o functie care primeste ca parametru un array de produse
Functia sa returneze mesajul "Ai castigat o bratara" daca suma produselor din categoria 
"women-clothing" depaseste 300 */

const productWon = (parameter4) => {
  let priceHigherThan300 = 0;

  for (i = 0; i < parameter4.length; i++) {
    if (parameter4[i].category === 'women-clothing') {
      priceHigherThan300 += parameter4[i].quantity * parameter4[i].price;
    }
  }
  if (priceHigherThan300 > 300) {
    return `Ai castigat o bratara!`;
  } else {
    return `Mai adauga produse din categoria 'women-clothing' in valoare de ${
      300 - priceHigherThan300
    } RON pentru a castiga o bratara!`;
  }
};
console.log(productWon(cartProducts3));
