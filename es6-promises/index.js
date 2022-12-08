const takeAChance = require('./take-a-chance');

const Louis = takeAChance('Louis');

Louis.then(
  value => {
    console.log(value);
  }
);

Louis.catch(
  error => {
    console.error(error.message);
  }
);
