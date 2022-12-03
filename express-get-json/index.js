const rq = require('express');
const app = rq();

const grades =
  {
    12: {
      id: 12,
      name: 'Tim Berners-Lee',
      course: 'HTML',
      score: 95
    },
    47: {
      id: 47,
      name: 'Brendan Eich',
      course: 'JavaScript',
      score: 100
    },
    273: {
      id: 273,
      name: 'Forbes Lindsay',
      course: 'JavaScript',
      score: 92
    }
  };

app.get('/api/grades', (req, res) => {
  var keys = [];
  for (var key in grades) {
    keys.push(grades[key]);
  }
  res.json(keys);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('SERVER IS ALIVE!!!!!!!!!!!');
});
