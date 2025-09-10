const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require('path');
const fs = require('fs');

const envPath = path.join(__dirname, '.env');
console.log('Loading .env from:', envPath);

if (fs.existsSync(envPath)) {
  require('dotenv').config({ path: envPath });
  console.log('.env file loaded successfully');
} else {
  console.log('.env file not found, using default values');
}

const MONGODB_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;

console.log("Using MONGO_URI:", MONGODB_URI);
console.log("Using PORT:", PORT);

if (!MONGODB_URI) {
  console.error("ERROR: MONGO_URI is not defined. Please check your .env file.");
  process.exit(1);
}

const app = express();
app.use(cors());
app.use(express.json());

const authRoutes = require("./routes/auth.js");

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch(err => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  });

app.use("/api/auth", authRoutes);

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));