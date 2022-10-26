var $nameInput = document.querySelector('#user-name');
var $emailInput = document.querySelector('#user-email');
var $msgInput = document.querySelector('#user-message');

function handleFocus(event) {
  console.log('focus event fired');
  console.log('  event.target.name', event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log('  event.target.name', event.target.name);
}

function handleInput(event) {
  console.log('  value of', event.target.name, event.target.value);
}

$nameInput.addEventListener('focus', handleFocus);
$nameInput.addEventListener('blur', handleBlur);
$nameInput.addEventListener('input', handleInput);

$emailInput.addEventListener('focus', handleFocus);
$emailInput.addEventListener('blur', handleBlur);
$emailInput.addEventListener('input', handleInput);

$msgInput.addEventListener('focus', handleFocus);
$msgInput.addEventListener('blur', handleBlur);
$msgInput.addEventListener('input', handleInput);
