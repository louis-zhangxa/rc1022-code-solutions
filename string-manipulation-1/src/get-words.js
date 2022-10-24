/* exported getWords */
/*
// creat a storage array for output
// creat a empty string for storage string value
// if string value is not space, add it to 'word' string
// make string 'word' become a part of words array
// clear 'word' string for restore new values
// make string 'word' become a part of words array when it's not empty */
function getWords(string) {
  var words = [];
  var word = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      word += string[i];
    } else if (string[i] === ' ') {
      words.push(word);
      word = '';
    }
  }
  if (word !== '') {
    words.push(word);
  }
  return words;
}
