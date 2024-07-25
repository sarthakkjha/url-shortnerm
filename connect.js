const mongoose = require('mongoose');

const connectToMongoDB = async () => {
  const mongoURL = process.env.MONGO_URL;
  await mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("MongoDB connected");
};

module.exports = { connectToMongoDB };
