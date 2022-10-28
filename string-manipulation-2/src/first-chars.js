/* exported firstChars */
function firstChars(length, string) {
  var output = '';
  var count = 0;
  for (var i = 0; i < length; i++) {
    count++;
    if (count <= string.length) {
      output += string[i];
    }
  }
  return output;
}
