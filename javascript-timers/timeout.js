var $h1 = document.querySelector('.message');
function changeH1() {
  $h1.textContent = 'Hello There';
}
setTimeout(changeH1, 2000);
