
import Booking from "../models/booking.model.js";

//register
export const getBooking = async (req,res) => {
  try {
     await Booking.find()
    .populate({
      path: "foodID"
    })
    .exec()
    .then((bookings)=>{
      res.status(200).json({
        data: bookings,
        message: "Get data success"
      })
    })
  } catch(err) {
    res.status(404).json({ message: error.message })
  }
}

export const booking = async (req, res) => {
  ///checking if email existed
  // const booking = new Booking ({
  //   fullname: "Trương Xuân Tâm",
  //   emailBook: "tam123@gmail.com",
  //   phone:"0857 456 789",
  //   tabletype: "Vip",
  //   dateArrival: "2022-12-25",
  //   timeArrival: "6.00 PM",
  //   adults: "2",
  //   children: "1",
  //   comment: "abc",
  //   foodID: [
  //     "63a11f4f5b0207a53928c36b",
  //     "63a120345b0207a53928c374"
  //   ]
  // })
  // booking.save
  const {
    //idUserBooking,
    fullname,
    emailBook,
    phone,
    tabletype,
    dateArrival,
    timeArrival,
    adults,
    children,
    comment,
    foodID
  } = req.body;

  try {
    // Create a new user
    const newBooking = new Booking({
      //idUserBooking: idUserBooking,
      fullname: fullname,
      emailBook: emailBook,
      phone: phone,
      tabletype: tabletype,
      dateArrival: dateArrival,
      timeArrival: timeArrival,
      adults: adults,
      children: children,
      comment: comment,
      foodID: foodID
    });
    ///Save Booking
    await newBooking.save().then((newBooking)=>{
      Booking.findById(newBooking._id)
      .populate({
        path: "foodID"
      })
      .exec()
      .then(()=>{
        res.status(200).json({
          success: true,
          message: 'create a booking successful!'
        }
        )
      })
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Lỗi hệ thống.",
    });
  }
};
export const getBookingByID = async (req,res) => {
  const bookingID = req.params.id
  try {
   await Booking.findById(bookingID)
   .populate({
    path: "foodID"
  })
  .exec()
  .then((bookings)=>{
    res.status(200).json({
      data: bookings,
      message: "Get data success"
    })
  })
  } catch(error) {
    res.status(404).json({ message: error.message });
  }
}
