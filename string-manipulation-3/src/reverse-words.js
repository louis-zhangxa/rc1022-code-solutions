/* exported reverseWords */
function reverseWords(string) {
  var output = '';
  var word = '';
  for (var i = 0; i < string.length; i++) {
    word += string[i];
    if (string[i] === ' ') {
      for (var j = word.length - 2; j >= 0; j--) {
        output += word[j];
      }
      word = '';
      output += ' ';
    }
  }
  for (var b = word.length - 1; b >= 0; b--) {
    output += word[b];
  }
  word = '';
  return output;
}
