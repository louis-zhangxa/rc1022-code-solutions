/* exported chunk */
/* define output
define a list for the list in output
define a varible to make list length same as size
loop through array, give the array item to list array. increment count everytime
if count is the same value of size
push the list array to output array
return output */
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
