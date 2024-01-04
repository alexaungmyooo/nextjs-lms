import mongoose from "mongoose";

interface DBConnection {
  host: string;
}

interface DBError {
  message: string;
}

export const connectDB = async (dbUrl: string) => {
  try {
    const data = await mongoose.connect(dbUrl);
    console.log(`Database connected with ${data.connection.host}`);
  } catch (error) {
    const dbError = error as DBError;
    console.error(dbError.message);
    setTimeout(() => connectDB(dbUrl), 5000);
  }
};

// Usage
// const dbUrl = process.env.DB_URL || "";
// connectDB(dbUrl);
