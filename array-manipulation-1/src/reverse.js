/* exported reverse */
function reverse(array) {
  var list = []; // a new array for values
  for (var i = array.length - 1; i >= 0; i--) { // loop through item from last to first
    list.push(array[i]); /// / push the value to new arry
  }
  return list;
}
