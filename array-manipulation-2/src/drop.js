/* exported drop */
function drop(array, count) {
  var output = [];
  for (var i = count; i < array.length; i++) {
    if (count < array.length) {
      output.push(array[i]);
    }
  }
  return output;
}
