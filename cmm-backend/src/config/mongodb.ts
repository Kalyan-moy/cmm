import mongoose from "mongoose";

const connectMongoDB = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

export default connectMongoDB;
