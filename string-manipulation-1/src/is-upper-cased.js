/* exported isUpperCased */
/*
// loop through all the char in word
// if one char is not uppercase, return false from the funtion
// otherwise, return trun from the funtion */
function isUpperCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] === word[i].toLowerCase()) {
      return false;
    }
  }
  return true;
}
