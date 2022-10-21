/* exported initial */
function initial(array) {
  var list = [];
  for (var i = 0; i < array.length - 1; i++) {
    list.push(array[i]);
  }
  return list;
}
