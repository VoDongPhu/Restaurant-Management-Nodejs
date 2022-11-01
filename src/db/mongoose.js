import mongoose from "mongoose";
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/RestaurantManagement', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connected!");
  } catch (error) {
    console.log("Error:", error.message);
    process.exit(1);
  }
};

export default connectDB;