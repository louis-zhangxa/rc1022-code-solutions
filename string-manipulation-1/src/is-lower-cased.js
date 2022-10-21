/* exported isLowerCased */
function isLowerCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] === word[i].toLowerCase()) {
      return true;
    } else if (word[i] === word[i].toUpperCase()) {
      return false;
    }
  }
}
