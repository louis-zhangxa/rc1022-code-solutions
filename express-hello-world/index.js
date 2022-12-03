const rq = require('express');
const app = rq();

app.use((req, res) => {
  res.send('hello world');
});

app.listen(3000, () => {
  // console.log('port 3000 is alive!');
});
