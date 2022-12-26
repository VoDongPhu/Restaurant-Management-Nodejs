import mongoose from "mongoose";
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://vodongphu:phuqn123@cluster0.ladd629.mongodb.net/RestaurantManagement?retryWrites=true&w=majority', {
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
