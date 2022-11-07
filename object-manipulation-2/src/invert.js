/* exported invert */
function invert(source) {
  var output = {};
  var las = [];
  var keys = Object.keys(source);
  for (var i = 0; i < keys.length; i++) {
    las.push(source[keys[i]]);
  }
  for (var j = 0; j < las.length; j++) {
    output[las[j]] = keys[j];
  }
  return output;
}
