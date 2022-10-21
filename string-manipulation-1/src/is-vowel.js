/* exported isVowel */
function isVowel(char) {
  var Vowel = ['a', 'e', 'i', 'o', 'u'];
  for (var i = 0; i < Vowel.length; i++) {
    if (char.toLowerCase() === Vowel[i]) {
      return true;
    }
  }
  return false;
}
