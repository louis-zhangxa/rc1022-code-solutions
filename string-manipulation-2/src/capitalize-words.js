/* exported capitalizeWords */
function capitalizeWords(string) {
  var output = '';
  for (var i = 1; i < string.length; i++) {
    if (string[i] === ' ') {
      output += string[i] + string[i + 1].toUpperCase();
      i++;
    } else {
      output += string[i].toLowerCase();
    }
  }
  return string[0].toUpperCase() + output;
}
