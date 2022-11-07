/* exported take */
/* define output
loop through array and get number of item by count varible
give the value to output
return output */
function take(array, count) {
  var output = [];
  for (var i = 0; i < count; i++) {
    if (count < array.length) {
      output.push(array[i]);
    }
  }
  return output;
}
