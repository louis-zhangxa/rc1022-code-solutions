/* exported titleCase */
function titleCase(title) {
  var output = '';
  var word = '';
  var final = '';
  title += ' ';
  for (var i = 0; i < title.length; i++) {
    word += title[i];
    if (title[i - 1] === '-') {
      output += word[0].toUpperCase();
      for (var q = 1; q < word.length - 1; q++) {
        output += word[q].toLowerCase();
      }
      output += word[word.length - 1].toUpperCase();
      word = '';
    }
    if (word.toLowerCase() === 'javascript') {
      word = 'JavaScript ';
      output += word;
      word = '';
    }
    if (title[i] === ' ') {
      if (word.length >= 5) {
        output += word[0].toUpperCase();
        for (var j = 1; j < word.length; j++) {
          output += word[j].toLowerCase();
        }
        word = '';
      } else if (word !== 'as, at, by, for, in, of, on, per, and, to') {
        for (var s = 0; s < word.length; s++) {
          output += word[s].toLowerCase();
        }
        word = '';
      }

    }
  }
  for (var b = 0; b < output.length - 1; b++) {
    final += output[b];
  }
  return final;
}
