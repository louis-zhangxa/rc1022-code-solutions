/* exported omit */
function omit(source, keys) {
  var output = source;
  for (var i = 0; i < keys.length; i++) {
    delete output[keys[i]];
  }
  return output;
}
