const dotenv = require("dotenv");
const connectDB = require("./config/database");
const app = require("./app");

dotenv.config();
connectDB();

const PORT = process.env.PORT || 5500;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
