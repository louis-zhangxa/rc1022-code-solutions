/* exported isVowel */
function isVowel(char) {
  var Vowel = ['a', 'e', 'i', 'o', 'u']; // set array for the value
  for (var i = 0; i < Vowel.length; i++) { // loop through the string
    if (char.toLowerCase() === Vowel[i]) { // if one char is equal to the vawel, return true from the funtion
      return true;
    }
  }
  return false; // otherwise, return false
}
