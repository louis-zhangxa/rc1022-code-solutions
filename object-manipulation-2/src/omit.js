/* exported omit */
function omit(source, keys) {
  var output = {};
  var list = Object.keys(source);
  for (var i = 0; i < list.length; i++) {
    if (keys[i] !== list[i]) {
      output[keys[i]] = source[keys[i]];
    }
  }
  return output;
}

// function pick(source, keys) {
//   var output = {};
//   for (var i = 0; i < keys.length; i++) {
//     if (source[keys[i]] !== undefined) {
//       output[keys[i]] = source[keys[i]];
//     }
//   }
//   return output;
// }
