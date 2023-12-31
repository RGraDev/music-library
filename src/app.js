const express = require('express');
const artistRouter = require('./routes/artist');
const app = express();
app.use(express.json());

app.use('/', artistRouter);

app.get('/', (req, res) => {
  res.status(200).json({ result: 'Hello World' });
})

module.exports = app;
