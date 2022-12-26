import express from "express";
const router = express.Router();

import { booking, getBooking, getBookingByID } from "../controller/booking.controller.js";

router.post("/", booking);
router.get("/get-all-bookings", getBooking)
router.get("/get-booking/:id", getBookingByID)

export default router;
