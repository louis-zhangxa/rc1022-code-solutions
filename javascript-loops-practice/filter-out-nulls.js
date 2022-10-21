/* exported filterOutNulls */
function filterOutNulls(values) {
  var numbers = [];
  for (var i = 0; i < values.length; i++) {
    var num = values[i];
    if (values[i] != null) {
      numbers.push(num);
    }
  }
  return numbers;
}
