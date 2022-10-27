var $tabContainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tab.length; i++) {
      $tab[i].className = 'tab';
      if (event.target === $tab[i]) {
        event.target.className = 'tab active';
      }
    }
  }
  var $dataView = event.target.getAttribute('data-view');
  for (var j = 0; j < $view.length; j++) {
    var $attr = $view[j].getAttribute('data-view');
    $view[j].className = 'view hidden';
    if ($attr === $dataView) {
      $view[j].className = 'view';
    }
  }
}
);
