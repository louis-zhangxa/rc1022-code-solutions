/* exported takeRight */
/*  define output
loop through array and get number of the item that not count by count varible
give the value to output
return output */
function takeRight(array, count) {
  var output = [];
  for (var i = array.length - count; i < array.length; i++) {
    if (count < array.length) {
      output.push(array[i]);
    } else {
      output = array;
    }
  }
  return output;
}
