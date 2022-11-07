/* exported drop */
/* define output
loop through array and get number of the item that not count by count varible
give the value to output
return output */
function drop(array, count) {
  var output = [];
  for (var i = count; i < array.length; i++) {
    if (count < array.length) {
      output.push(array[i]);
    }
  }
  return output;
}
