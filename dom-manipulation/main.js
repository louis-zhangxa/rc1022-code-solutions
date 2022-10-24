/* define a variable to store the number of times the user has clicked the button
retrieve the '.hot-button' and assign it to a new variable.
retrieve the '.click-count' and assign it to a new variable.
Add a 'click' event listener to your button that increments the counter variable
Add code to my event listener that updates the textContent of the '.click-count' element each time the user clicks.
Add code to my event listener that updates the className of the '.hot-button' depending on the number of times it's clicked.
*/

var clicked = 0;

var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

function clickCount(event) {
  clicked++;
  $clickCount.textContent = 'Clicks: ' + clicked;
  if (clicked < 4) {
    $hotButton.className = 'hot-button cold';
  } else if (clicked < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (clicked < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (clicked < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (clicked < 16) {
    $hotButton.className = 'hot-button hot';
  } else if (clicked > 16) {
    $hotButton.className = 'hot-button nuclear';
  }
}

$hotButton.addEventListener('click', clickCount);
