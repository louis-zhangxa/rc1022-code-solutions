const fs = require('fs');
const json = require('./data.json');

const notes = json.notes;
const keys = Object.keys(notes);

const write = () => {
  fs.writeFile('./data.json', JSON.stringify(json, null, 2), 'utf-8', (err, data) => {
    if (err) throw err;
  });
};

if (process.argv[2] === 'read') {
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    console.log(`${[i + 1]}: ${notes[Number(key)]}`);
  }
}

if (process.argv[2] === 'create') {
  json.notes[json.nextId] = process.argv[3];
  json.nextId++;
  write();
}

if (process.argv[2] === 'delete') {
  const key = keys[process.argv[3] - 1];
  delete notes[Number(key)];
  write();
}

if (process.argv[2] === 'update') {
  const key = keys[process.argv[3] - 1];
  notes[Number(key)] = process.argv[4];
  write();
}

// const notes = json.notes;
// for (keys in Object.keys(notes)) {
//   console.log(`${Number(keys)}: ${notes[Number(keys)]}`);
// }
