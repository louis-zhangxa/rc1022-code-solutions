/* exported initial */
function initial(array) {
  var list = []; // a new array for values
  for (var i = 0; i < array.length - 1; i++) { // loop through array before last item
    list.push(array[i]); // push the value to new arry
  }
  return list;
}
