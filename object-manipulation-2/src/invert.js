/* exported invert */
/* define output
define the array for store proprety
list all the key in object and store to an array
loop through all the value and put in the array
lopp through all the value then add to output object with proprety */
function invert(source) {
  var output = {};
  for (var key in source) {
    output[source[key]] = key;
  }
  return output;
}

// var output = {};
// var las = [];
// var keys = Object.keys(source);
// for (var i = 0; i < keys.length; i++) {
//   las.push(source[keys[i]]);
// }
// for (var j = 0; j < las.length; j++) {
//   output[las[j]] = keys[j];
// }
// return output;
