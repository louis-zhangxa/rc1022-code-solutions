/* exported reverseWord */
/*
// creat a storage array for output
// loop through the char in oppisite way
// add char to the output array
// return the output from the funtion */
function reverseWord(word) {
  var reverse = '';
  for (var i = word.length - 1; i >= 0; i--) {
    reverse += word[i];
  }
  return reverse;
}
