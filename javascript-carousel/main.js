var $image = document.querySelector('.carousel-image');
var $left = document.querySelector('.left');
var $right = document.querySelector('.right');
var $round = document.querySelectorAll('.round');

// var images = ['images/004.png', 'images/007.png', 'images/025.png', 'images/039.png', 'images/001.png'];
var image = 0;

// var i = 0;

function timeReset() {
  clearInterval(interval);
  interval = setInterval(slideImage, 3000);
}

function slideImage(number) {
  // i++;

  // for (var i = 0; i < images.length; i++) {

  // }
  // image++;
  // if (image === 1) {
  //   $image.setAttribute('src', 'images/004.png');
  //   removeDot(1);
  // } else if (image === 2) {
  //   $image.setAttribute('src', 'images/007.png');
  //   removeDot(2);
  // } else if (image === 3) {
  //   $image.setAttribute('src', 'images/025.png');
  //   removeDot(3);
  // } else if (image === 4) {
  //   $image.setAttribute('src', 'images/039.png');
  //   removeDot(4);
  // } else if (image === 5) {
  //   $image.setAttribute('src', 'images/001.png');
  //   image = 0;
  //   removeDot(0);
  // }
}

function lastPicture(event) {
  timeReset();
  image--;
  if (image === 0) {
    $image.setAttribute('src', 'images/001.png');
    removeDot(0);
  } else if (image === 1) {
    $image.setAttribute('src', 'images/004.png');
    removeDot(1);
  } else if (image === 2) {
    $image.setAttribute('src', 'images/007.png');
    removeDot(2);
  } else if (image === 3) {
    $image.setAttribute('src', 'images/025.png');
    removeDot(3);
  } else if (image === 4) {
    $image.setAttribute('src', 'images/039.png');
    removeDot(4);
  } else if (image < 0) {
    image = 4;
    $image.setAttribute('src', 'images/039.png');
    removeDot(4);
  }
}

function nextPicture(event) {
  timeReset();
  image++;
  if (image === 1) {
    $image.setAttribute('src', 'images/004.png');
    removeDot(1);
  } else if (image === 2) {
    $image.setAttribute('src', 'images/007.png');
    removeDot(2);
  } else if (image === 3) {
    $image.setAttribute('src', 'images/025.png');
    removeDot(3);
  } else if (image === 4) {
    $image.setAttribute('src', 'images/039.png');
    removeDot(4);
  } else if (image === 5) {
    $image.setAttribute('src', 'images/001.png');
    image = 0;
    removeDot(0);

  }
}

$left.addEventListener('click', lastPicture);
$right.addEventListener('click', nextPicture);
var interval = setInterval(slideImage, 3000);

function removeDot(number) {
  for (var i = 0; i < $round.length; i++) {
    if ($round[i] === $round[number]) {
      $round[i].className = 'fa-solid fa-circle round';
    } else {
      $round[i].className = 'fa-regular fa-circle round';
    }
  }
}

$round[0].addEventListener('click', function (event) {
  timeReset();
  image = 0;
  $image.setAttribute('src', 'images/001.png');
  removeDot(0);
});

$round[1].addEventListener('click', function (event) {
  timeReset();
  image = 1;
  $image.setAttribute('src', 'images/004.png');
  removeDot(1);
});

$round[2].addEventListener('click', function (event) {
  timeReset();
  image = 2;
  $image.setAttribute('src', 'images/007.png');
  removeDot(2);
});

$round[3].addEventListener('click', function (event) {
  timeReset();
  image = 3;
  $image.setAttribute('src', 'images/025.png');
  removeDot(3);
});

$round[4].addEventListener('click', function (event) {
  timeReset();
  image = 4;
  $image.setAttribute('src', 'images/039.png');
  removeDot(4);
});
