var clicked = 0;

var $switch = document.querySelector('.button');
var $backGround = document.querySelector('.background');

function lightBulb(event) {
  clicked++;
  var lightOff = (clicked % 2 === 0);
  if (lightOff === true) {
    $switch.className = 'button';
    $backGround.className = 'background';
  } else {
    $switch.className = 'button on';
    $backGround.className = 'background on';
  }
}

$switch.addEventListener('click', lightBulb);
