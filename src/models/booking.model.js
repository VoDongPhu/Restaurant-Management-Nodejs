import mongoose from "mongoose";
import validator from "validator";
const Schema = mongoose.Schema
const bookingSchema = new mongoose.Schema({
  // idUserBooking: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   required: true,
  // },
  fullname: {
    type: String,
    trim: true,
    required: true,
  },
  emailBook: {
    type: String,
    required: true,
    trim: true
    // unique: false,
    // trim: true,
    // lowercase: true,
    // validate: (value) => {
    //   if (!validator.isEmail(value)) {
    //     throw new Error("Invalid email address");
    //   }
    // },
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  tabletype: {
    type: String,
    required: true,
    trim: true,
  },
  dateArrival: {
    type: Date,
    required: true,
    trim: true,
  },
  timeArrival: {
    type: String,
    required: true,
    trim: true,
  },
  adults: {
    type: String,
    required: true,
    trim: true,
  },
  children: {
    type: String,
    required: true,
    trim: true,
  },
  comment: {
    type: String,
    required: false,
    trim: true,
  },
  foodID: [
   {
    type: Schema.Types.ObjectId,
    ref:"Foods"
   }
  ]
});

const Booking = mongoose.model("Bookings", bookingSchema);
export default Booking;
