const fibonacci = function(fib) {
  if (fib == 1 || fib == 2) return 1;
  if (fib < 1) return "OOPS";

  let num1 = 1, num2 = 1;
  let currentNum;

  for (let i = 3; i <= fib; i++) {
    currentNum = num1 + num2;
    num1 = num2;
    num2 = currentNum;
  }

  return currentNum;
};

// Do not edit below this line
module.exports = fibonacci;
