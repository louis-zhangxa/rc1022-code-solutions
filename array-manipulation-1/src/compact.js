/* exported compact */
function compact(array) {
  var word = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      word.push(array[i]);
    }
  }
  return word;
}
