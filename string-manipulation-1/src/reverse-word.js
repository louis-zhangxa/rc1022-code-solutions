/* exported reverseWord */
function reverseWord(word) {
  var reverse = ''; // creat a storage array for output
  for (var i = word.length - 1; i >= 0; i--) { // loop through the char in oppisite way
    reverse += word[i]; // add char to the output array
  }
  return reverse; // return the output from the funtion
}
