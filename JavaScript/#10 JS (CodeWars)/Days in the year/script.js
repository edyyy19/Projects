const daysInAYear = (year) => {
  let result = 365;

  if (year % 400 === 0 || (year % 4 === 0 && year % 100 == 0)) {
    result = 366;
  }
  console.log(`The year ${year} has ${result} days.`);
};
daysInAYear(2050);
