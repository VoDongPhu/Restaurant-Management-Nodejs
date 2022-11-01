import mongoose from "mongoose";
import Booking from "../models/booking.model.js";

//register
export const booking = async (req, res) => {
  ///checking if email existed
  const {
    idUserBooking,
    fullname,
    emailBook,
    phone,
    roomtype,
    dateArrival,
    dateDeparture,
    adults,
    children,
    comment,
  } = req.body;

  try {
    // Create a new user
    const newBooking = new Booking({
      idUserBooking: idUserBooking,
      fullname: fullname,
      emailBook: emailBook,
      phone: phone,
      roomtype: roomtype,
      dateArrival: dateArrival,
      dateDeparture: dateDeparture,
      adults: adults,
      children: children,
      comment: comment,
    });
    ///Save Booking
    await newBooking.save();
    console.log(`Booking success with fullname client is: ${fullname}`);
    res.status(200).json({
      success: true,
      message: `Booking success with fullname client is: ${req.body.fullname}`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Lỗi hệ thống.",
    });
  }
};
