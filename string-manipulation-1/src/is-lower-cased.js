/* exported isLowerCased */
/*
// loop through all the char in word
// if no char is uppercase, return true from the funtion
 // if one char is not lowercase, return false from the funtion */
function isLowerCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] === word[i].toLowerCase()) {
      return true;
    } else if (word[i] === word[i].toUpperCase()) {
      return false;
    }
  }
}
