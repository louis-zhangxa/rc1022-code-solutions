var $contact = document.querySelector('form');

function handleValue(event) {
  event.preventDefault();
  var name = $contact.elements.name.value;
  var email = $contact.elements.email.value;
  var message = $contact.elements.message.value;
  var ob = {
    name,
    email,
    message
  };
  console.log('messageData', ob);
  $contact.reset();
}

$contact.addEventListener('submit', handleValue);
