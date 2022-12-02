/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var first = {};
  var count = 0;
  for (var i = 0; i < firstString.length; i++) {
    if (first[firstString[i]] === undefined) {
      if ([firstString[i]] !== ' ') {
        first[firstString[i]] = 1;
      }
    } else {
      first[firstString[i]]++;
    }
  }
  for (var j = 0; j < secondString.length; j++) {
    if (secondString[j] !== ' ') {
      if (first[secondString[j]] !== undefined) {
        for (var b = 0; b < secondString.length; b++) {
          if (secondString[b] === secondString[j]) {
            count++;
          }
        }
        if (count !== first[secondString[j]]) {
          return false;
        }
        count = 0;
      } else {
        return false;
      }
    }
  }
  return true;
}
