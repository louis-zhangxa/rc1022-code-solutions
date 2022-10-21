/* exported capitalize */
function capitalize(word) {
  var words = '';
  for (var i = 1; i < word.length; i++) {
    words += word[i].toLowerCase();
  }
  return word[0].toUpperCase() + words;
}
