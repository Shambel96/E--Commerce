// To connect with our database
// CommonJs
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect("mongodb://127.0.0.1:27017/blogDB");
    console.log("MongoDB Connected Successfully!");
  } catch (err) {
    console.log("Error connecting to the database:", err);
  }
};

module.exports = connectDB;
