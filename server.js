// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost:27017/database-name', { useNewUrlParser: true, useUnifiedTopology: true });

const DataSchema = new mongoose.Schema({
  name: String,
  description: String
});

const Data = mongoose.model('Data', DataSchema);

app.get('/data', async (req, res) => {
  const data = await Data.find();
  res.json(data);
});

app.post('/data', async (req, res) => {
  const newData = new Data(req.body);
  await newData.save();
  res.json(newData);
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
