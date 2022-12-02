/* exported omit */
/* define output
list all the key in source object
loop through all the key in source object
loop through all the item in keys array to see if they exist in source
if exist, next key
if not, add to output */
function omit(source, keys) {
  var output = {};
  for (var i = 0; i < keys.length; i++) {
    for (var key in source) {
      if (key !== keys[i]) {
        break;
      } else {
        output[key] = source[key];
      }
    }
  }
  return output;

}

// var output = {};
// var list = Object.keys(source);
// for (var i = 0; i < keys.length; i++) {
//   for (var j = 0; j < list.length; j++) {
//     if (keys[j] === list[i]) {
//       break;
//     } else {
//       output[list[i]] = source[list[i]];
//     }
//   }
// }
// return output;
