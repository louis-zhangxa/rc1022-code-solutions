/* exported filterOutStrings */
function filterOutStrings(values) {
  var nostring = [];
  for (var i = 0; i < values.length; i++) {
    var num = values[i];
    if (typeof num !== 'string') {
      nostring.push(num);
    }
  }
  return nostring;
}
