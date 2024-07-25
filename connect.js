const mongoose = require('mongoose');

const connectToMongoDB = async (url) => {
  await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("MongoDB connected");
};

module.exports = { connectToMongoDB };

const mongoURL = "your_production_mongo_url";
connectToMongoDB(mongoURL);
