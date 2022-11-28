/* exported isPalindromic */
function isPalindromic(string) {
  var word = '';
  var input = '';
  for (var i = string.length - 1; i >= 0; i--) {
    if (string[i] !== ' ') {
      word += string[i];
    }
  }
  for (var j = 0; j < string.length; j++) {
    if (string[j] !== ' ') {
      input += string[j];
    }
  }
  if (word === input) {
    return true;
  } else {
    return false;
  }
}
