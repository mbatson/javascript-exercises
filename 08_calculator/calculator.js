const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(array) {
  // let sum = 0;

  // for (let num of array) sum += num;

  // return sum;
  if (array.length > 0) {
    return array.reduce((sum, num) => sum += num);
  } else return 0;
};

const multiply = function(nums) {
  if (nums.length > 0) {
    return nums.reduce((sum, num) => sum *= num);
  } else return 0;
};

const power = function(num1, num2) {
  return num1**num2;
};

const factorial = function(num) {
  if (num === 0 || num === 1) return 1;

  let factorial = 1;
  for (let factor = 1; factor <= num; factor++) {
    factorial *= factor;
  }

  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
