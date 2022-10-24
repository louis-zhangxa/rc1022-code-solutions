/* exported capitalize */
function capitalize(word) {
  var words = ''; // empty string for output
  for (var i = 1; i < word.length; i++) { // loop through the char after first char
    words += word[i].toLowerCase(); // put all the lowercase char after first to string
  }
  return word[0].toUpperCase() + words; // return the first char in uppercase with the rest char in lowercase from the funtion
}
