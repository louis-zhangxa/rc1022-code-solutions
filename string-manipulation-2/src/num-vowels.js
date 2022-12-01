/* exported numVowels */
/* list all the vowels on a array
define output
loop through all the letter in string
for each target, loop through the vowels array to compare
if the lowercase of target exist in vowel array
push to output
return the length of output */
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
