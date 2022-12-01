/* exported ransomCase */
/*
define output
loop through string
if i is odd make it to uppercase
if i is even make it to lower case
return the value
*/
function ransomCase(string) {
  var output = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 !== 0) {
      output += string[i].toUpperCase();
    } else {
      output += string[i].toLowerCase();
    }
  }
  return output;
}
