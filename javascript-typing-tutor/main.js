/*
creat a list of span that can loop
creat a value hold i
*/

var $spanlist = document.querySelectorAll('.text');
var number = 0;
var count = 0;

function Key(event) {
  if (event.key === $spanlist[number].innerHTML) {
    $spanlist[number].className = 'text correct';
    number++;
    count++;
  } else {
    $spanlist[number].className = 'text wrong';
    count++;
  }
  if (number === $spanlist.length) {
    var accuracy = $spanlist.length / count;
    var $accuracy = document.createElement('div');
    $accuracy.setAttribute('class', '.column-relative');
    var $accuracyP = document.createElement('p');
    $accuracyP.textContent = 'Your accuracy is %' + Math.floor(100 * accuracy);
    $accuracy.appendChild($accuracyP);
    var $column = document.querySelector('.column');
    $column.appendChild($accuracy);
  }
}

document.addEventListener('keydown', Key);
