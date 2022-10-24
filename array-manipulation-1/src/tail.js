/* exported tail */
function tail(array) {
  var list = []; // a new array for values
  for (var i = 1; i < array.length; i++) { // loop through array after first item
    list.push(array[i]); // push the value to new arry
  }
  return list;
}
