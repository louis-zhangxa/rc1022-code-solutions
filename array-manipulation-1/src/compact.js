/* exported compact */
function compact(array) {
  var word = []; // a new array for values
  for (var i = 0; i < array.length; i++) { // loop through array
    if (array[i]) { // if array item is not falsy value
      word.push(array[i]); // push the value to new arry
    }
  }
  return word;
}
