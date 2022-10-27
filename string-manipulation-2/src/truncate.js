/* exported truncate */
function truncate(length, string) {
  var output = '';
  if (length <= string.length) {
    for (var i = 0; i < length; i++) {
      output += string[i];
    }
  } else {
    output = string;
  }
  return output + '...';
}
