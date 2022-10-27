var $taskList = document.querySelector('.task-list');
$taskList.addEventListener('click', log);

function log(event) {
  console.log('event.target', event.target);
  console.log('event.target.tagName', event.target.tagName);
  var ancester = event.target.closest('.task-list-item');
  console.log(ancester);
  if (event.target && event.target.tagName === 'BUTTON') {
    ancester.remove();
  }
}
