/* exported chunk */
function chunk(array, size) {
  var output = [];
  var list = [];
  var count = 0;
  for (var j = 0; j < array.length; j++) {
    list.push(array[j]);
    count++;
    if (count === size) {
      output.push(list);
      count = 0;
      list = [];
    }
  }
  if (count / array.length !== 0 && list.length !== 0) {
    output.push(list);
  }
  return output;
}
