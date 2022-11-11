var $list = document.querySelector('#user-list');

function getUser() {
  var user = new XMLHttpRequest();
  user.open('GET', 'https://jsonplaceholder.typicode.com/users');
  user.responseType = 'json';
  user.addEventListener('load', function () {
    console.log(user.status);
    console.log(user.response);
    for (var i = 0; i < user.response.length; i++) {
      var $li = document.createElement('li');
      $li.textContent = user.response[i].name;
      $list.appendChild($li);
    }
  });
  user.send();
}

getUser();
