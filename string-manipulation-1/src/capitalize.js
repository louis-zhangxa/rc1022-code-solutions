/* exported capitalize */
/*
// empty string for output
// loop through the char after first char
// put all the lowercase char after first to string
// return the first char in uppercase with the rest char in lowercase from the funtion */

function capitalize(word) {
  var words = '';
  for (var i = 1; i < word.length; i++) {
    words += word[i].toLowerCase();
  }
  return word[0].toUpperCase() + words;
}
