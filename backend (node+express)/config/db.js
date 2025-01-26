const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('db connected');
  } catch (err) {
    console.error('Error in mongodb js:', err);
    process.exit(1);
  }
};

module.exports = connectDB;
