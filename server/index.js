const express = require('express');
const path = require('path');
app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res) => {
  res.send('Server');
});

app.listen(port, () => {
  console.log('Listening on port ' + port);
});