/* exported lastChars */
function lastChars(length, string) {
  var output = '';
  var count = 0;
  for (var i = string.length - length; i < string.length; i++) {
    count++;
    output += string[i];
    if (count > string.length) {
      output = string;
    }
  }
  return output;
}
