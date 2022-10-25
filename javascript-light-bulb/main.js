/* grab element from dom
make a funtion to see if user clicked the button. if clicked, turn on. click again, turn off
add eventlistner for moniter user input */
var lightOff = true;

var $switch = document.querySelector('.button');
var $backGround = document.querySelector('.background');

function lightBulb(event) {
  if (lightOff === false) {
    $switch.className = 'button';
    $backGround.className = 'background';
    lightOff = true;
  } else {
    $switch.className = 'button on';
    $backGround.className = 'background on';
    lightOff = false;
  }
}

$switch.addEventListener('click', lightBulb);
