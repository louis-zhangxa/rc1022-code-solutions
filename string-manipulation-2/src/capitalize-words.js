/* exported capitalizeWords */
/* define output
loop through string
if a string is ' '
output add it and the item after it will be uppercased
if a string is not ' '
output add it
return output */
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
