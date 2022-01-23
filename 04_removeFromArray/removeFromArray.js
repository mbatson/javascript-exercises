const removeFromArray = function(array, ...itemsToRemove) {
  // let indexOfItemToRemove = array.indexOf(itemToRemove);
  // array.splice(indexOfItemToRemove, 1);
  // return array;
  for (let itemToRemove of itemsToRemove) {
    array = array.filter(item => item !== itemToRemove);
  }

  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
