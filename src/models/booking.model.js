import mongoose from "mongoose";
import validator from "validator";

const bookingSchema = new mongoose.Schema({
  idUserBooking: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  fullname: {
    type: String,
    trim: true,
    required: true,
  },
  emailBook: {
    type: String,
    unique: false,
    trim: true,
    lowercase: true,
    validate: (value) => {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email address");
      }
    },
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  roomtype: {
    type: String,
    required: true,
    trim: true,
  },
  dateArrival: {
    type: String,
    required: true,
    trim: true,
  },
  dateDeparture: {
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
});

const Booking = mongoose.model("Bookings", bookingSchema);
export default Booking;
