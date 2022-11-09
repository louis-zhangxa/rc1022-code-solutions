var $countdown = document.querySelector('.countdown-display');

var times = 4;

function countdown() {
  times--;
  $countdown.textContent = times;
  if (times === 0) {
    $countdown.textContent = '~earth beeeeelloooowww us~';
    clearInterval(timer);
  }
}

var timer = setInterval(countdown, 1000);
