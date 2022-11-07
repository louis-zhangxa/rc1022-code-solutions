/* exported dropRight */
/* define output
loop through array and get number by count varible
give the value to output
return output */
function dropRight(array, count) {
  var output = [];
  for (var i = 0; i < array.length - count; i++) {
    if (count < array.length) {
      output.push(array[i]);
    } else {
      output = array;
    }
  }
  return output;
}
