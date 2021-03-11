const express = require('express');
const path = require('path');
app = express();
const port = 3333;

app.use(express.static(path.join(__dirname, '..', 'public')));

app.listen(port, () => {
  console.log('Listening on port ' + port);
});