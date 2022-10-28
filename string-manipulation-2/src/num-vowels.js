/* exported numVowels */
function numVowels(string) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var output = '';
  for (var i = 0; i < string.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if (string[i].toLowerCase() === vowels[j]) {
        output += string[i];
      }
    }
  }
  return output.length;
}
