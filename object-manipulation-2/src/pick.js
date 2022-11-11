/* exported pick */
/* define output
loop through all the item in keys array
if the preproty in source object have the same key add it to output */
function pick(source, keys) {
  var output = {};
  for (var i = 0; i < keys.length; i++) {
    if (source[keys[i]] !== undefined) {
      output[keys[i]] = source[keys[i]];
    }
  }
  return output;
}
