const express = require('express');

// node src/index.js

const app = express();

app.get('/', (req, res) => {
  return res.json('API is running...');
});

app.listen(3001, () => {
  console.log('Listening on port 3001');
});
