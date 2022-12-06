const express = require('express');
const app = express();
const fs = require('fs');
const json = require('./data.json');
const notes = json.notes;

app.get('/api/notes', (req, res) => {
  const keys = [];
  for (const key in notes) {
    keys.push(notes[key]);
  }
  res.json(keys);
});

app.get('/api/notes/:id', (req, res) => {
  if (req.params.id < 0) {
    const erroeMessage = { error: "No id is negetive you stupid, don't mess around with this server!!!!!" };
    res.status(400).json(erroeMessage);
  } else {
    if (!notes[req.params.id]) {
      const erroeMessage = { error: "No id is match the object, don't be a fool okay?" };
      res.status(404).json(erroeMessage);
    } else {
      res.json(notes[req.params.id]);
    }
  }
});

app.use(express.json());

app.post('/api/notes', (req, res) => {
  if (!req.body.content) {
    const erroeMessage = { error: 'PUT SOMETHING PLEASE!!!!' };
    res.status(400).json(erroeMessage);
  } else {
    req.body.id = json.nextId;
    notes[json.nextId] = req.body;
    json.nextId++;
    fs.writeFile('./data.json', JSON.stringify(json, null, 2), 'utf-8', (err, data) => {
      if (err) {
        const erroeMessage = { error: 'oh shit something wrong!!!' };
        res.status(500).json(erroeMessage);
      } else {
        res.status(201).json(req.body);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  if (req.params.id < 0) {
    const erroeMessage = { error: "No id is negetive you stupid, don't mess around with this server!!!!!" };
    res.status(400).json(erroeMessage);
  } else {
    if (!notes[req.params.id]) {
      const erroeMessage = { error: "No id is match the object, don't be a fool okay?" };
      res.status(404).json(erroeMessage);
    } else {
      delete notes[req.params.id];
      fs.writeFile('./data.json', JSON.stringify(json, null, 2), 'utf-8', (err, data) => {
        if (err) {
          const erroeMessage = { error: 'oh shit something wrong!!!' };
          res.status(500).json(erroeMessage);
        } else {
          res.sendStatus(204);
        }
      });
    }
  }
});

app.put('/api/notes/:id', (req, res) => {
  if (req.params.id < 0) {
    const erroeMessage = { error: "No id is negetive you stupid, don't mess around with this server!!!!!" };
    res.status(400).json(erroeMessage);
  } else {
    if (!notes[req.params.id]) {
      const erroeMessage = { error: "No id is match the object, don't be a fool okay?" };
      res.status(404).json(erroeMessage);
    } else {
      if (!req.body.content) {
        const erroeMessage = { error: 'PUT SOMETHING PLEASE!!!!' };
        res.status(400).json(erroeMessage);
      } else {
        req.body.id = req.params.id;
        notes[req.params.id] = req.body;
        json.nextId++;
        fs.writeFile('./data.json', JSON.stringify(json, null, 2), 'utf-8', (err, data) => {
          if (err) {
            const erroeMessage = { error: 'oh shit something wrong!!!' };
            res.status(500).json(erroeMessage);
          } else {
            res.sendStatus(200);
          }
        });
      }
    }
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('server is aaaaallllllliiiiiivvvveeeee!!!!!');
});
