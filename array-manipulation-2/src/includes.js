/* exported includes */
function includes(array, value) {
  var output;
  for (var i = 0; i < array.length; i++) {
    if (value === array[i]) {
      output = true;
      break;
    } else {
      output = false;
    }
  }
  if (output === undefined) {
    output = false;
  }
  return output;
}
