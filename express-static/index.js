const express = require('express');
const app = express();

const path = require('path');

// const currentName = (path.join(__dirname, 'public'));

// const files = express.static(currentName);

// app.use(files);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('server is aaaaallllllliiiiiivvvveeeee!!!!!');
});
