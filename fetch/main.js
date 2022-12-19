fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json()
  )
  .then(users => console.log(users)
  )
  .catch(err => console.error('failed', err));

fetch('https://pokeapi.co/api/v2/pokemon/1', {
  method: 'GET' // is this the place to specify the request method (GET, POST, etc.) when calling fetch?
})
  .then(response => response.json()
  )
  .then(users => console.log(users)
  )
  .catch(err => console.error('failed', err));
