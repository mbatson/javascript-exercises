const ftoc = function(temp) {
  const tempConverted = (temp - 32) * (5 / 9);
  return Math.round(tempConverted * 10) / 10;
};

const ctof = function(temp) {
  const tempConverted = temp * (9 / 5) + 32;
  return Math.round(tempConverted * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
