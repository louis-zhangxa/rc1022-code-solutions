function handleClick(event) {
  console.log('button clicked');
  console.log('event:', event);
  console.log('target:', event.target);
}

var $button = document.querySelector('.click-button');
$button.addEventListener('click', handleClick, false);

function handleMouseover(event) {
  console.log('button hovered');
  console.log('event:', event);
  console.log('target:', event.target);
}

var $hover = document.querySelector('.hover-button');
$hover.addEventListener('mouseover', handleMouseover, false);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event:', event);
  console.log('target:', event.target);
}

var $dbClick = document.querySelector('.double-click-button');
$dbClick.addEventListener('dblclick', handleDoubleClick, false);
