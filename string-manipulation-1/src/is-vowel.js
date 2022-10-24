/* exported isVowel */
/*
// set array for the value
// loop through the string
// if one char is equal to the vawel, return true from the funtion
// otherwise, return false */
function isVowel(char) {
  var Vowel = ['a', 'e', 'i', 'o', 'u'];
  for (var i = 0; i < Vowel.length; i++) {
    if (char.toLowerCase() === Vowel[i]) {
      return true;
    }
  }
  return false;
}
