/* exported take */
function take(array, count) {
  var output = [];
  for (var i = 0; i < count; i++) {
    if (count < array.length) {
      output.push(array[i]);
    }
  }
  return output;
}
