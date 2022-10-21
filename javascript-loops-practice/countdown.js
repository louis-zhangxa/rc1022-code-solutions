/* exported countdown */
function countdown(number) {
  var num = [];
  for (var i = number; i >= 0; i--) {
    num.push(i);
  }
  return num;
}
