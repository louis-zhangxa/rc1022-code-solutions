const express = require('express');
const app = express();

let nextID = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const keys = [];
  for (const key in grades) {
    keys.push(grades[key]);
  }
  res.json(keys);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  req.body.ID = nextID++;
  grades[req.body.ID] = req.body;
  res.status(201).json(req.body);
});

app.listen(3000, (req, res) => {
  // eslint-disable-next-line no-console
  console.log('server is aliveeeee!!!!!');
});
