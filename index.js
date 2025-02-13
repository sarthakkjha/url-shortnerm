require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');  
const { connectToMongoDB } = require('./connect');
const urlRoute = require('./routes/url');
const URL = require('./models/url');

mongoose.set('strictQuery', false);  
const app = express();
const PORT = process.env.PORT || 8001;

connectToMongoDB(process.env.MONGO_URL).then(() => {
  console.log('MongoDB connected');
});

app.use(express.json());
app.use('/url', urlRoute);

app.get('/:shortId', async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    { shortId },
    { $push: { visitHistory: { timestamp: Date.now() } } }
  );
  res.redirect(entry.redirectURL);
});

app.listen(PORT, () => {
  console.log(`Server started at PORT: ${PORT}`);
});
