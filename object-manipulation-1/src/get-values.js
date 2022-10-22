/* exported getValues */
function getValues(object) {
  var list = [];
  for (var i in object) {
    list.push(object[i]);
  }
  return list;
}
