/* exported swapChars */
/*
define output
loop through the string
if i is equal to firstIndex, output will equal to string[secondIndex]
if i is equal to secondIndex, output will equal to string[firstIndex]
swap completed
else output is gonna add the string
return the value of output to the function */
function swapChars(firstIndex, secondIndex, string) {
  var output = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      output += string[secondIndex];
    } else if (i === secondIndex) {
      output += string[firstIndex];
    } else {
      output += string[i];
    }
  }
  return output;
}
