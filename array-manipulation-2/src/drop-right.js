/* exported dropRight */
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
