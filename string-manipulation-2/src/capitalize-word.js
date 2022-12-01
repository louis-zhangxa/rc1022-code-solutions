/* exported capitalizeWord */
/* define the output
make first letter of word argument to uppercase
loop through the rest of the output, make alll the letter to lowercase
if word argument is equal to 'javascript'
make it to 'JavaScript'
return the value
} */

function capitalizeWord(word) {
  var output = '';
  output += word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    output += word[i].toLowerCase();
  }
  if (word.toLowerCase() === 'javascript') {
    output = 'JavaScript';
  }
  return output;
}
