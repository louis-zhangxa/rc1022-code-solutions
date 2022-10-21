/* exported tail */
function tail(array) {
  var list = [];
  for (var i = 1; i < array.length; i++) {
    list.push(array[i]);
  }
  return list;
}
