// To connect with our database
const mongoose = require("mongoose");
require("dotenv").config(); // Loads the .env file

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected Successfully!");
  } catch (err) {
    console.log("Error connecting to the database:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
