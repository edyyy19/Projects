const array = [1, 5.2, 4, 0, -1];
let total = 0;

const sumOfNumbers = () => {
  if (array.length === 0) {
    return total;
  } else {
    for (let i = 0; i < array.length; i++) {
      total += array[i];
    }
    return total;
  }
};

console.log(sumOfNumbers());
