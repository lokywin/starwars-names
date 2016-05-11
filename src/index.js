import uniqueRandomArray from 'unique-random-array';
import starWarsNames from './starwars-names.json';

var getRandomItem = uniqueRandomArray(starWarsNames);

module.exports = {
  all: starWarsNames,
  random: random
};

function random(n) {
  if (n === undefined) {
    return getRandomItem();
  } else {
    var randomItems = [];
    for (var i = 0; i < n; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
}
