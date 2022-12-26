import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  price: {
    type: String,
    trim: true,
    required: true,
  },
  image: {
    type: String,
    trim: true,
    required: true,
  },
});

const Food = mongoose.model("Foods", foodSchema);
export default Food;
