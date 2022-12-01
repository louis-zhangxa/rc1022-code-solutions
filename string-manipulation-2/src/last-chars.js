/* exported lastChars */
/*
define output
define varible to store the time string[i] push to the output
loop through the string from the length give by the length parameter to the end
if count varible exceed the length of the string, output is gonna equal to string argumment.
return the value of output to the function */
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
