/* exported isUpperCased */
function isUpperCased(word) {
  for (var i = 0; i < word.length; i++) { // loop through all the char in word
    if (word[i] === word[i].toLowerCase()) { // if one char is not uppercase, return false from the funtion
      return false;
    }
  }
  return true; // otherwise, return trun from the funtion
}
