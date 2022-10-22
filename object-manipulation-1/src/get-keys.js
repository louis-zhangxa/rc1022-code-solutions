/* exported getKeys */
function getKeys(object) {
  var list = [];
  for (var i in object) {
    list.push(i);
  }
  return list;
}
