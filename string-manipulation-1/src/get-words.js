/* exported getWords */
function getWords(string) {
  var words = []; // creat a storage array for output
  var word = ''; // creat a empty string for storage string value
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      word += string[i]; // if string value is not space, add it to 'word' string
    } else if (string[i] === ' ') {
      words.push(word); // make string 'word' become a part of words array
      word = ''; // clear 'word' string for restore new values
    }
  }
  if (word !== '') {
    words.push(word); // make string 'word' become a part of words array when it's not empty
  }
  return words;
}
