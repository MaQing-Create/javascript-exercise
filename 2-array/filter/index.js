function chooseMultiplesOfThree(collection) {
  return collection.filter(number => number % 3 === 0);
}

function chooseNoRepeatNumber(collection) {
  const res = [];
  collection.forEach(number => {
    if (res.indexOf(number) === -1) res.push(number);
  });
  return res;
}

export { chooseMultiplesOfThree, chooseNoRepeatNumber };
