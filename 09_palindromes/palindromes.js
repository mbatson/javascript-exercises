const palindromes = function (string) {
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  let currentString = string.toLowerCase().split('');
  let currentStringStripped = [];

  for (let character of currentString) {
    if (alpha.includes(character)) {
      currentStringStripped.push(character);
    }
  }

  let reversed = currentStringStripped.slice().reverse();

  return currentStringStripped.join('') === reversed.join('');
};

// Do not edit below this line
module.exports = palindromes;
