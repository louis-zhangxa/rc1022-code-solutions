/* exported isLowerCased */
function isLowerCased(word) {
  for (var i = 0; i < word.length; i++) { // loop through all the char in word
    if (word[i] === word[i].toLowerCase()) { // if no char is uppercase, return true from the funtion
      return true;
    } else if (word[i] === word[i].toUpperCase()) { // if one char is not lowercase, return false from the funtion
      return false;
    }
  }
}
