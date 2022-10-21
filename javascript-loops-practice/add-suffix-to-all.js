/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var line = [];
  for (var i = 0; i < words.length; i++) {
    var word = words[i] + suffix;
    line.push(word);
  }
  return line;
}
