const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./config/database");
const productRoutes = require("./routes/productRoutes");

const app = express();
const PORT = process.env.PORT || 5500;

dotenv.config();
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

/* app.get("/", (req, res) => {
  res.send("E-commerce backend is running");
}); */

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
