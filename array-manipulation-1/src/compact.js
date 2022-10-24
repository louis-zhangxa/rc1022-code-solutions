/* exported compact */
/*
a new array for values
loop through array
if array item is not falsy value
push the value to new arry */

function compact(array) {
  var word = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      word.push(array[i]);
    }
  }
  return word;
}
