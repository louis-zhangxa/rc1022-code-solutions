/* exported reverse */
/*
// a new array for values
// loop through item from last to first
/// / push the value to new arry */
function reverse(array) {
  var list = [];
  for (var i = array.length - 1; i >= 0; i--) {
    list.push(array[i]);
  }
  return list;
}
