/* exported takeRight */
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
