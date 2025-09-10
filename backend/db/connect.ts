import mongoose from "mongoose";

const connectDB = async (url: string) => {
  try {
    await mongoose.connect(url);
    console.log("✅ MongoDB Connected...");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    process.exit(1); 
  }
};

export default connectDB;
