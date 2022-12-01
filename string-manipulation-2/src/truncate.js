/* exported truncate */
/* define the output
if the length of string is small or equal to length give by user,
loop through the string in the length that user gives
add all the letter to output
if string is empty, output equal to empty string
return the value of output with '...'
*/
function truncate(length, string) {
  var output = '';
  if (length <= string.length) {
    for (var i = 0; i < length; i++) {
      output += string[i];
    }
  } else {
    output = string;
  }
  return output + '...';
}
