import mongoose from "mongoose";

const awesomeServiceSchema = new mongoose.Schema({
  type: {
    type: String,
    trim: true,
    required: true,
  },
  image: {
    type: String,
    trim: true,
    required: true,
  },
  name: {
    type: String,
    trim: true,
    required: true,
  },

  description: {
    type: String,
    trim: true,
    required: true,
  },
});

const AwesomeService = mongoose.model("AwesomeServices", awesomeServiceSchema);
export default AwesomeService;
