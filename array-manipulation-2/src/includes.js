/* exported includes */
/* define output
loop through array to check each item
if value matches item in array, return true. otherwise, return false */
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
