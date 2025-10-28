import mongoose from "mongoose";
import dns from "dns";

dns.setDefaultResultOrder("ipv4first");

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 10000,
});
    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("❌ MongoDB connection error:");
    console.log(error); // full error object
    process.exit(1);
  }
}