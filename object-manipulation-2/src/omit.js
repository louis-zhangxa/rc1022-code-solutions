/* exported omit */
function omit(source, keys) {
  var output = {};
  var list = Object.keys(source);
  for (var i = 0; i < keys.length; i++) {
    for (var j = 0; j < list.length; j++) {
      if (keys[j] === list[i]) {
        break;
      } else {
        output[list[i]] = source[list[i]];
      }
    }
  }
  return output;
}
