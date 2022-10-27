/* exported capitalizeWord */
/* function capitalizeWord(word) {
  var output = '';
  for (var i = 1; i < word.legnth; i++) {
    output += word[i].toLowerCase();
  }
  return word[0].toUpperCase() + output;
} */

function capitalizeWord(word) {
  var output = '';
  output += word[0].toUpperCase;
  for (var i = 1; i < word.length; i++) {
    output += word[i].toLowerCase;
  }
  return output;
}
