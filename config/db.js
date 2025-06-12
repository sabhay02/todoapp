const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected To Mongodb ${conn.connection.host}`.bgGreen.white);
  } catch (error) {
    console.log(`Mongodb Error ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
